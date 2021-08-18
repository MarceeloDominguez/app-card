import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { Caption, Card, useTheme } from "react-native-paper";
import useFetch from "../Hooks/useFetch";
import firebase from "firebase";

export default function Home({ navigation }) {
  const { colors } = useTheme();
  const theme = useTheme();
  const { loading, result } = useFetch(
    "https://apistruchas.vercel.app/api/bank/user"
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="#FA8842" size="large" />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.dark ? "#333333" : "#fff"}
      />
      <View
        style={{ backgroundColor: theme.dark ? colors.background : "#FDFBFA" }}
      >
        <View style={styles.containerUser}>
          <View style={{ flexDirection: "row" }}>
            {result?.avatar ? (
              <Avatar
                source={{ uri: result?.avatar }}
                rounded
                size="large"
                containerStyle={styles.avatar}
              />
            ) : (
              <Avatar
                source={require("../image/avatar-default.jpg")}
                rounded
                size="large"
                containerStyle={styles.avatar}
              />
            )}
            <View style={styles.nameUser}>
              <Caption>¡Hola!</Caption>
              {result?.firstname ? (
                <Text style={{ color: colors.text }}>{result?.firstname}</Text>
              ) : (
                <Text style={{ color: colors.text }}>Nombre del usuario</Text>
              )}
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Icon
              type="material-community"
              name="pencil-outline"
              iconStyle={{ color: colors.text }}
            />
          </View>
        </View>
        <InfoUser navigation={navigation} user={result} colors={colors} />
        <CerrarSesion />
      </View>
    </ScrollView>
  );
}

function InfoUser({ navigation, user, colors }) {
  return (
    <Card style={{ marginHorizontal: 10, borderRadius: 10 }}>
      <Card.Content>
        <TouchableOpacity
          onPress={() => navigation.navigate("accounts", user)}
          activeOpacity={0.6}
        >
          <View style={styles.containerInfo}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                type="material-community"
                name="account-outline"
                iconStyle={{ marginRight: 30, color: colors.text }}
              />
              <Text style={{ color: colors.text }}>Mis datos</Text>
            </View>
            <Icon
              type="material-community"
              name="chevron-right"
              iconStyle={{ color: colors.text }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("card")}
          activeOpacity={0.6}
        >
          <View style={styles.containerInfo}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                type="material-community"
                name="credit-card-multiple-outline"
                iconStyle={{ marginRight: 30, color: colors.text }}
              />
              <Text style={{ color: colors.text }}>Mis cuentas</Text>
            </View>
            <Icon
              type="material-community"
              name="chevron-right"
              iconStyle={{ color: colors.text }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("contacts")}
          activeOpacity={0.6}
        >
          <View style={styles.containerInfo}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                type="material-community"
                name="account-multiple-plus-outline"
                iconStyle={{ marginRight: 30, color: colors.text }}
              />
              <Text style={{ color: colors.text }}>Mis contactos</Text>
            </View>
            <Icon
              type="material-community"
              name="chevron-right"
              iconStyle={{ color: colors.text }}
            />
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
}

function CerrarSesion() {
  return (
    <Card
      style={{ marginHorizontal: 10, marginVertical: 20, borderRadius: 10 }}
    >
      <Card.Content>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => firebase.auth().signOut()}
        >
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Icon
              type="material-community"
              name="chevron-right"
              iconStyle={{ marginRight: 30 }}
              color="#EC1A09"
            />
            <Text style={{ color: "#EC1A09", fontWeight: "bold" }}>
              Cerrar sesión
            </Text>
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  containerUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  avatar: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#FA8842",
  },
  nameUser: {
    justifyContent: "center",
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    borderBottomWidth: 0.3,
    borderColor: "grey",
  },
  containerBtn: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
