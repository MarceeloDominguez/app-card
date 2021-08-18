import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableRipple, Switch, useTheme } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { Title } from "react-native-paper";
import Home from "../components/Home";
import Accounts from "../components/accounts/Accounts";
import Card from "../components/card/Card";
import Contacts from "../components/contacts/Contacts";

const Stack = createStackNavigator();

export default function HomeScreen({ toggleTheme }) {
  const paperTheme = useTheme();
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "",
          headerLeft: () => (
            <View
              style={[
                styles.containerBotton,
                { backgroundColor: theme.dark ? "#fff" : "#333333" },
              ]}
            >
              <TouchableRipple onPress={() => toggleTheme()}>
                <View pointerEvents="none">
                  <Switch
                    value={paperTheme.dark}
                    trackColor={{ true: "#333333", false: "#fff" }}
                    thumbColor={theme.dark ? "#333333" : "#fff"}
                  />
                </View>
              </TouchableRipple>
            </View>
          ),
          headerRight: () => (
            <Icon
              type="material-community"
              name="bell-outline"
              iconStyle={{ color: colors.text, marginHorizontal: 20 }}
            />
          ),
          headerTitle: () => (
            <View
              style={{
                width: 200,
                alignItems: "center",
              }}
            >
              <Title>Mi perfil</Title>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="accounts"
        component={Accounts}
        options={{ headerTransparent: true, title: "Mis datos" }}
      />
      <Stack.Screen
        name="card"
        component={Card}
        options={{
          headerTransparent: true,
          title: "Mis Tarjetas",
          headerTitleStyle: {
            color: "#333333",
          },
          headerTintColor: "#333333",
        }}
      />
      <Stack.Screen
        name="contacts"
        component={Contacts}
        options={{ headerTransparent: true, title: "Mis contactos" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerBotton: {
    borderRadius: 50,
    marginLeft: 15,
  },
});
