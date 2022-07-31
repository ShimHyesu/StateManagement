//
// AuthStatus와 AuthButtons 컴포넌트를 보여주는 컴포넌트
//
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import AuthStatus from "./AuthStatus";
import AuthButtons from "./AuthButtons";

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

export default AuthApp;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
