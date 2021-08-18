import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import firebase from "firebase";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";
import { useTheme } from "react-native-paper";

export default function LoginForm({ navigation, toastRef }) {
  const [formData, setformData] = useState(FormValue());
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const theme = useTheme();

  const onSubmit = () => {
    if (!formData.email || !formData.password) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(true);
          navigation.navigate("navigationResolver");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("Email o contraseña incorrecta");
        });
    }
  };

  const onChange = (e, type) => {
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.dark ? "#333333" : "#fff"}
      />
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        label="Email"
        placeholderTextColor={theme.dark ? "grey" : "rgba(0,0,0,0.2)"}
        inputContainerStyle={{ borderBottomColor: "rgba(0,0,0,0.2)" }}
        inputStyle={{ color: theme.dark ? "#fff" : "#333333" }}
        leftIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={{ color: "#c1c1c1" }}
          />
        }
      />
      <Input
        placeholder="Tu contraseña"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "password")}
        label="Contraseña"
        placeholderTextColor={theme.dark ? "grey" : "rgba(0,0,0,0.2)"}
        inputContainerStyle={{ borderBottomColor: "rgba(0,0,0,0.2)" }}
        inputStyle={{ color: theme.dark ? "#fff" : "#333333" }}
        password={true}
        secureTextEntry={showPassword ? false : true}
        leftIcon={
          <Icon
            type="material-community"
            name="lock"
            iconStyle={{ color: "#c1c1c1" }}
          />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={{ color: "#c1c1c1" }}
            onPress={() => setshowPassword(!showPassword)}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
      <Loading loading={loading} text="Iniciando sesión" />
    </View>
  );
}

function FormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  inputForm: {
    width: "100%",
    marginTop: 10,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#FA8842",
  },
});
