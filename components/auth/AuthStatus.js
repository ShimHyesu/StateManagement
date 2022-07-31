//
// 현재 사용자 인증 상태를 보여주는 컴포넌트
// 사용자 정보가 유효하다면 사용자의 displayName을 보여주고, 그렇지 않다면 '로그인하세요' 문구 보여줌
//
import React from "react";
import { StyleSheet, View, Text } from "react-native";

import useUser from "../../hooks/useUser";

function AuthStatus() {
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : "로그인하세요"}
      </Text>
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
