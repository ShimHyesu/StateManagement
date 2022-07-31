//
// 할일 항목의 정보를 보여줌
//
import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

import BlackButton from "./BlackButton";

import useTodosActions from "../../hooks/useTodosActions";

function TodoItem({ id, text, done }) {
  // useTodoActions를 호출하여 toggle과 remove함수 받아온 뒤, Pressable 좌측 버튼 눌렀을 때 toggle함수, 우측 버튼을 눌렀을 때 remove함수 사용
  const { remove, toggle } = useTodosActions();
  const onToggle = () => {
    toggle(id);
  };

  const onRemove = () => {
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title="삭제" />
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
  },

  toggle: {
    justifyContent: "center",
    flex: 1,
  },

  doneText: {
    textDecorationLine: "line-through",
  },
});
