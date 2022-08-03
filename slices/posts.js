import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
// createAsyncThunk함수는 Promise를 반환하는 함수를 기반으로
// 함수가 호출됐을때, 성공하거나 실패했을때 사용할 액션들을 제공
// -> pending: 시작됐을때, fulfilled: 끝나면, rejected: 실패하면
// 추후 dispatch(fetchPosts())하면 상황별로 이 액션들 dispatch됨
import { getPosts } from "../api/getPosts";

// 첫 번째 파라미터에는 '슬라이스 이름/함수 이름'을 넣어주세요
// 두 번째 파라미터에는 요청하고 싶은 함수 넣어주세요
export const fetchPosts = createAsyncThunk("posts/fetchUsers", getPosts);

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  // fetchPosts를 통해 dispatch된 액션들을 처리하는 리듀서 함수들은 extraReducers에 작성
  // why? 새로 만드는것이 아닌, 이미 정의된 액션들의 리듀서를 작성하는것임
  // 각 액션의 타입은 fetchPosts.<status>.type값을 조회하여 확인
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      // 요청이 시작했을 때 loading을 false로 설정하고 나머지 값들을 null로 설정
      state.posts = {
        loading: true,
        data: null,
        error: null,
      };
    },
    [fetchPosts.fulfilled.type]: (state, action) => {
      // 요청이 성공했을 때, loading을 false로 하고 data값을 설정
      state.posts.data = action.payload;
      state.posts.loading = false;
    },
    [fetchPosts.rejected.type]: (state, action) => {
      // 요청이 실패했을 때, loading을 false로 하고 error값 설정
      state.posts.error = action.error;
      state.posts.loading = false;
    },
  },
});

export default postsSlice.reducer;
