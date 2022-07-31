//
// auth 모듈 작성하기
//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const AuthState = {
  user: null,
};

const initialState = {
  user: null,
};

// 이 slice에는 두가지 액션 - 사용자 정보를 상태에 담는 authorize 액션, 사용자 정보를 초기화하는 logout 액션
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      // 업데이트하는 과정에서 action을 사용하지 않으면 생략 가능
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { authorize, logout } = authSlice.actions;
