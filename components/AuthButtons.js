//
// 로그인, 로그아웃 버튼을 보여주는 컴포넌트
//
import React from "react";
import { StyleSheet, View, Button } from "react-native";

import useAuthActions from "../hooks/useAuthActions";

function AuthButtons() {
  const { authorize, logout } = useAuthActions();

  const onPressLogin = () => {
    authorize({
      id: 1,
      username: "johndoe",
      displayName: "John Doe",
    });
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={logout} />
    </View>
  );
}

export default AuthButtons;

const styles = StyleSheet.create({});
