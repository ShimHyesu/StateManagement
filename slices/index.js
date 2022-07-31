//
// 루트 리듀서와 스토어를 만들고 프로젝트에 적용하기
//
import { combineReducers } from "redux";

import auth from "./auth";
import todos from "./todos";

const rootReducer = combineReducers({
  auth,
  todos,
});

export default rootReducer;
