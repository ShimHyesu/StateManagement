//
// 할일 항목의 정보를 보여줌
//
import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

import BlackButton from "./BlackButton";

function TodoItem({ id, text, done }) {
  const onToggle = () => {
    console.log(`토글 ${id}`);
  };

  const onRemove = () => {
    console.log(`제거 ${id}`);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={styles.doneText}>{text}</Text>
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
