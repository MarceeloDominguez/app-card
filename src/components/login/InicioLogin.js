import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

export default function InicioLogin() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
        barStyle="dark-content"
      />
      <ImageBackground
        source={require("../../image/fondo.jpg")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <View style={styles.details}>
          <Text style={styles.title}>Ingresa o regístrate</Text>
          <TouchableOpacity>
            <Button
              title="Ingresar"
              containerStyle={{ marginVertical: 5 }}
              buttonStyle={{ backgroundColor: "#FA8842" }}
              onPress={() => navigation.navigate("login")}
            />
            <Button
              title="Registrarme"
              containerStyle={{ marginVertical: 5 }}
              buttonStyle={{ backgroundColor: "#EC1A09" }}
              onPress={() => navigation.navigate("register")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    height: "30%",
    width: "100%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 30,
  },
  title: {
    color: "#DF5D0D",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  containerButton: {
    backgroundColor: "red",
    marginVertical: 5,
    borderRadius: 2,
  },
});
