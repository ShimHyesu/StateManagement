import React from "react";
import { Text, View } from "react-native";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices";

import TodoApp from "./components/todo/TodoApp";
import PostsApp from "./components/post/PostsApp";

// configureStore에는 thunk 미들웨어를 적용하는 것이 내장되어 있으므로
// 이를 불러오는 작업 생략 가능
const store = configureStore({
  reducer: rootReducer,
  // 직렬화 할 수 없는 데이터를 수락할 경우
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

function App() {
  return (
    <Provider store={store}>
      <PostsApp />
    </Provider>
  );
}

export default App;
