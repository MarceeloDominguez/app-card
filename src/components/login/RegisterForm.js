import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import firebase from "firebase";
import { validateEmail } from "../../utils/validations";
import Loading from "../Loading";
import { useTheme } from "react-native-paper";

export default function RegisterForm({ navigation, toastRef }) {
  const [formData, setFormData] = useState(FormValue());
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [repeatShowPassword, setRepeatShowPassword] = useState(false);
  const theme = useTheme();

  const onSubmit = () => {
    if (!formData.email || !formData.password || !formData.repeatPassword) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      toastRef.current.show("Las contraseñas tienen que ser iguales");
    } else if (formData.password.length < 6) {
      toastRef.current.show(
        "La contraseña tiene que tener al menos 6 caracteres"
      );
    } else {
      setLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          setLoading(true);
          navigation.navigate("navigationResolver");
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show("El email ya esta en uso, prueba con otro");
        });
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
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
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "repeatPassword")}
        label="Contraseña"
        placeholderTextColor={theme.dark ? "grey" : "rgba(0,0,0,0.2)"}
        inputContainerStyle={{ borderBottomColor: "rgba(0,0,0,0.2)" }}
        inputStyle={{ color: theme.dark ? "#fff" : "#333333" }}
        password={true}
        secureTextEntry={repeatShowPassword ? false : true}
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
            name={repeatShowPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={{ color: "#c1c1c1" }}
            onPress={() => setRepeatShowPassword(!repeatShowPassword)}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
      <Loading loading={loading} text="Creando cuenta" />
    </View>
  );
}

function FormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  inputForm: {
    width: "100%",
    marginTop: 10,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#FA8842",
  },
});
