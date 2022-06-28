import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

import COLORS from "../theme/theme";
import Tasks from "../screens/Tasks";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Drawer.Navigator
          initialRouteName="Tasks"
          screenOptions={{
            drawerStyle: {
              width: "65%",
              backgroundColor: COLORS.primaryVariant
            },
            drawerType: "back",
            overlayColor: "transparent",
            headerShown: false
          }}
        >
          <Drawer.Screen name="Tasks" component={Tasks} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Route;
