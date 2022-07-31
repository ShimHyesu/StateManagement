//
// 현재 사용자 인증 상태를 보여주는 컴포넌트
//
import React from "react";
import { StyleSheet, View, Text } from "react-native";

function AuthStatus() {
  return (
    <View style={styles.status}>
      <Text style={styles.text}>AuthStatus</Text>
    </View>
  );
}

export default AuthStatus;

const styles = StyleSheet.create({
  status: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
