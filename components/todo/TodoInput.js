//
// 할일 항목을 등록하는 컴포넌트
//
import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import BlackButton from "./BlackButton";

function TodoInput() {
  const [text, setText] = useState("");

  const onPress = () => {
    console.log("등록");
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
