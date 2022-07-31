//
// Flatlist로 여러 TodoItem 컴포넌트를 보여줌
//
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import TodoItem from "./TodoItem";

function Todos() {
  const todos = [
    { id: 1, text: "리액트 네이티브 배우기", done: true },
    { id: 2, text: "상태 관리 배우기", done: false },
  ];

  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      ListFooterComponent={() => <View style={styles.seperator} />}
    />
  );
}

export default Todos;

const styles = StyleSheet.create({
  todos: {
    flex: 1,
  },

  seperator: {
    height: 1,
    backgroundColor: "black",
  },
});
