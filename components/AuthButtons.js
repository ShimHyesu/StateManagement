//
// 로그인, 로그아웃 버튼을 보여주는 컴포넌트
//
import React from "react";
import { StyleSheet, View, Button } from "react-native";

function AuthButtons() {
  return (
    <View>
      <Button title="로그인" onPress={() => {}} />
      <Button title="로그아웃" onPress={() => {}} />
    </View>
  );
}

export default AuthButtons;

const styles = StyleSheet.create({});
