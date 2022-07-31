import React from "react";
import { Text, View } from "react-native";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices";

import AuthApp from "./components/AuthApp";

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
      <AuthApp />
    </Provider>
  );
}

export default App;
