//
// 사용할때 상태와 액션 동시에 필요 -> usePosts에서 모두 작성
//
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/posts";

// 컴포넌트가 나타날 때 API를 요청
// enabled 값을 false로 하면 컴포넌트가 나타날 때 API 요청이 이뤄지지 않음
export default function usePosts(enabled = true) {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // enabled 값을 통해 Hook을 사용할떄 요청을 바로 시작할지,
  // refetch함수를 통해서만 요청을 시작할지 정할 수 있게 함
  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  // posts의 상태와 재요청을 하는 refetch 함수를 함께 반환
  return {
    ...posts,
    refetch: fetchData,
  };
}
