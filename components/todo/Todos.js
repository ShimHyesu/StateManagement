//
// Flatlist로 여러 TodoItem 컴포넌트를 보여줌
//
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import TodoItem from "./TodoItem";

import useTodos from "../../hooks/useTodos";

function Todos() {
  // useTodos를 사용하여 할일 목록 상태를 조회해서 Flatlist의 data에 넣어주기
  const todos = useTodos();

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
