import React from "react";
import { View, Text } from "react-native";
import { Caption, useTheme } from "react-native-paper";

export default function Accounts({ route }) {
  const user = route.params;
  const { email, lastname, firstname, dni } = user;
  const { colors } = useTheme();

  return (
    <View style={{ marginTop: 100, marginHorizontal: 20 }}>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>Nombre y apellido</Caption>
        <Text
          style={{ textTransform: "uppercase", color: colors.text }}
        >{`${firstname} ${lastname}`}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>DNI</Caption>
        <Text style={{ color: colors.text }}>{dni}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>CUIL</Caption>
        <Text style={{ color: colors.text }}>20406953216</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>Fecha de nacimiento</Caption>
        <Text style={{ color: colors.text }}>16/8/1995</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>Email</Caption>
        <Text style={{ color: colors.text }}>{email}</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.3,
          marginVertical: 4,
          paddingVertical: 5,
          borderBottomColor: colors.text,
        }}
      >
        <Caption>Teléfono</Caption>
        <Text style={{ color: colors.text }}>1158987423</Text>
      </View>
    </View>
  );
}
