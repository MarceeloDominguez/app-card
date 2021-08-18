import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading({ loading, text }) {
  return (
    <Overlay
      isVisible={loading}
      overlayStyle={styles.overlay}
      backdropStyle={{ backgroundColor: "#FDFBFA" }}
    >
      <View>
        <ActivityIndicator size="large" color="#FA8842" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    borderColor: "#FA8842",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    color: "#FA8842",
    fontWeight: "bold",
  },
});
