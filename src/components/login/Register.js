import React, { useRef } from "react";
import { View, Image, StyleSheet } from "react-native";
import Toast from "react-native-easy-toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import RegisterForm from "./RegisterForm";
import { useTheme } from "react-native-paper";

export default function Register({ navigation }) {
  const toastRef = useRef();
  const theme = useTheme();
  const { colors } = useTheme();

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: theme.dark ? colors.background : "#FDFBFA" }}
    >
      <Image
        source={require("../../image/card.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm navigation={navigation} toastRef={toastRef} />
      </View>
      <Toast
        ref={toastRef}
        position="center"
        opacity={0.9}
        style={{ backgroundColor: "#FA8842" }}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    marginHorizontal: 30,
  },
  logo: {
    width: "100%",
    height: 200,
    marginTop: 35,
  },
});
