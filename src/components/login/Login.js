import React, { useRef } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import Toast from "react-native-easy-toast";
import LoginForm from "./LoginForm";
import { useTheme } from "react-native-paper";

export default function Login({ navigation }) {
  const toastRef = useRef();
  const theme = useTheme();
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: theme.dark ? colors.background : "#FDFBFA" }}
    >
      <Image
        source={require("../../image/cardlogin.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm navigation={navigation} toastRef={toastRef} />
      </View>
      <Toast
        ref={toastRef}
        position="center"
        opacity={0.9}
        style={{ backgroundColor: "#FA8842" }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 30,
  },

  logo: {
    width: "100%",
    height: 170,
    marginTop: 30,
  },
});
