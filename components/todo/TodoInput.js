//
// 할일 항목을 등록하는 컴포넌트
//
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import BlackButton from "./BlackButton";

import useTodosActions from "../../hooks/useTodosActions";

function TodoInput() {
  const [text, setText] = useState("");
  // add함수를 useTodosActions()에서 가져와 호출
  const { add } = useTodosActions();

  const onPress = () => {
    add(text);
    setText("");
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력하세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputWrapper: {
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
  },

  input: {
    flex: 1,
  },
});
