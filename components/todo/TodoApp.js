import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import TodoInput from "./TodoInput";
import Todos from "./Todos";

function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
    </SafeAreaView>
  );
}

export default TodoApp;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
