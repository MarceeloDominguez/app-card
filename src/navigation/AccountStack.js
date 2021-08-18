import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavigationResolver from "./NavigationResolver";
import Login from "../components/login/Login";
import Register from "../components/login/Register";

const Stack = createStackNavigator();

export default function AccountStack({ toggleTheme }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="navigationResolver"
        children={() => <NavigationResolver toggleTheme={toggleTheme} />}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerTransparent: true, title: "" }}
      />
    </Stack.Navigator>
  );
}
