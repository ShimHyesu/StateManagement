import React from "react";
import { Text, View } from "react-native";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices";

import AuthApp from "./components/AuthApp";

const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}

export default App;
