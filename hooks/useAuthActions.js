//
// 리덕스와 연동하는 로직을 Hook으로 분리
// -> 리덕스 상태 다루는 로직과 컴포넌트의 UI 로직을 완전히 분리 가능
// -> 나중에 상태 관리 라이브러리를 바꿀 때도 더욱 편하게 마이그레이션 할 수 있음
// -> 작성한 커스텀 Hook을 재사용하는 상황도 발생
//
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authorize, logout, User } from "../slices/auth";

// useMemo 사용해주는것이 좋음
// why? 이 Hook에는 컴포넌트가 새로 렌더링될 때마다 bindActionCreators가 호출되어 각 함수들이 새로 선언
// useEffect에서 이 액션 생성 함수들을 사용하게 되면 의도치 않은 버그 발생할 수 있음
import { useMemo } from "react";

export default function useAuthActions() {
  const dispatch = useDispatch();

  //   return {
  //     authorize: (user) => dispatch(authorize(user)),
  //     logout: () => dispatch(logout()),
  //   };

  // 더 간단하게 할 수 있는 방법 -> bindActionCreators 유틸 함수 사용
  // 첫 번째 인자: 액션 생성 함수들이 들어있는 객체 넣고, 두번째 인자로 dispatch

  return useMemo(
    () => bindActionCreators({ authorize, logout }, dispatch),
    [dispatch]
  );
}
