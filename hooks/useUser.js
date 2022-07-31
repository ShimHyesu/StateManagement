//
// 리덕스와 연동하는 로직을 Hook으로 분리
// -> 리덕스 상태 다루는 로직과 컴포넌트의 UI 로직을 완전히 분리 가능
// -> 나중에 상태 관리 라이브러리를 바꿀 때도 더욱 편하게 마이그레이션 할 수 있음
// -> 작성한 커스텀 Hook을 재사용하는 상황도 발생
//
import { useSelector } from "react-redux";

export default function useUser() {
  return useSelector((state) => state.auth.user);
}
