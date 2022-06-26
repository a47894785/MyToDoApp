import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useColorMode, Switch } from "native-base";
import COLORS from "../theme/theme";

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
      <Text style={[styles.switchText, { color: textColor, paddingLeft: 35 }]}>
        Light
      </Text>
      <Switch
        defaultIsChecked={isDarkMode}
        value={isDarkMode}
        onValueChange={toggleSwitch}
      />
      <Text style={[styles.switchText, { color: textColor, paddingLeft: 8 }]}>
        Dark
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  switchText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
