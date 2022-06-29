import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useColorMode, Switch } from "native-base";
import COLORS from "../theme/theme";
import { Feather } from "@expo/vector-icons";

export default function ModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const textColor = isDarkMode ? COLORS.white : COLORS.dark;

  const toggleSwitch = () => {
    toggleColorMode();
    // console.log(colorMode);
  };

  return (
    <View style={styles.switchContainer}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Feather
        name="sun"
        size={20}
        color={textColor}
        style={{
          paddingLeft: 55
        }}
      />
      <Switch
        defaultIsChecked={isDarkMode}
        value={isDarkMode}
        onValueChange={toggleSwitch}
      />
      <Feather
        name="moon"
        size={20}
        color={textColor}
        style={{
          paddingLeft: 8
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20
  },
  switchText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
