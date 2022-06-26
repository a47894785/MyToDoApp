import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider } from "native-base";

import COLORS from "./theme/theme";
import Tasks from "./screens/Tasks";
import About from "./screens/About";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
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
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
