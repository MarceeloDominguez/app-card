import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import firebase from "firebase";
import HomeScreen from "../screen/HomeScreen";
import SendScreen from "../screen/SendScreen";
import PayScreen from "../screen/PayScreen";
import MovementScreen from "../screen/MovementScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import InicioLogin from "../components/login/InicioLogin";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({ toggleTheme }) => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      shifting={false}
      initialRouteName="homeScreen"
      activeColor="#FA8842"
      inactiveColor={colors.text}
      barStyle={{
        backgroundColor: colors.background,
        padding: 4,
        elevation: 5,
      }}
    >
      <Tab.Screen
        name="homeScreen"
        children={() => <HomeScreen toggleTheme={toggleTheme} />}
        options={{
          title: "Mi perfil",
          tabBarIcon: ({ color }) => (
            <Icon
              type="material-community"
              name="account-outline"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="sendScreen"
        component={SendScreen}
        options={{
          title: "Enviar",
          tabBarIcon: ({ color }) => (
            <Icon type="material-community" name="currency-usd" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="payScreen"
        component={PayScreen}
        options={{
          title: "QR",
          tabBarIcon: ({ color }) => (
            <Icon type="material-community" name="qrcode-scan" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="movementScreen"
        component={MovementScreen}
        options={{
          title: "Actividad",
          tabBarIcon: ({ color }) => (
            <Icon type="material-community" name="finance" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function NavigationResolver({ toggleTheme }) {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  return login ? <TabNavigator toggleTheme={toggleTheme} /> : <InicioLogin />;
}
