import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NativeBaseProvider } from "native-base";

import COLORS from "./theme/theme";
import Tasks from "./screens/Tasks";
import About from "./screens/About";
import Route from "./components/Route";

const Drawer = createDrawerNavigator();

export default function App() {
  return <Route />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
