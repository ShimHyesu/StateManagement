//
// 로그인, 로그아웃 버튼을 보여주는 컴포넌트
//
import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { useDispatch } from "react-redux";
import { authorize, logout } from "../slices/auth";

function AuthButtons() {
  // useDispatch를 사용해서 dispatch함수 받아옴
  const dispatch = useDispatch();

  // 버튼을 눌렀을 떄 원하는 액션을 만든 뒤 dispatch 함수의 인자로 넣어 호출
  const onPressLogin = () => {
    dispatch(
      authorize({
        id: 1,
        username: "johndoe",
        displayName: "John Doe",
      })
    );
  };

  const onPressLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />
      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
}

export default AuthButtons;

const styles = StyleSheet.create({});
