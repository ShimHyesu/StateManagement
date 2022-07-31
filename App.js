import React from "react";
import { Text, View } from "react-native";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices";

const store = configureStore({ reducer: rootReducer });

function App() {
  return <Provider store={store}>{/* TODO : 컴포넌트 사용 */}</Provider>;
}

export default App;
