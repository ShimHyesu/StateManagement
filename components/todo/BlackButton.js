//
// 삭제와 등록 버튼으로 사용할 컴포넌트
//
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

function BlackButton({ onPress, title }) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{ color: "white" }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default BlackButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
  },
});
