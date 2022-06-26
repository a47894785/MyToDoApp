import { Image, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, useColorMode } from "native-base";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../theme/theme";
import NavBar from "../components/NavBar";
import bg_img from "../assets/bg_img.png";
import ModeSwitch from "../components/mode-switch";

const Tasks = () => {
  const { colorMode } = useColorMode();
  const navigation = useNavigation();

  // theme colors
  const bgTask = colorMode === "dark" ? COLORS.dark : COLORS.white;
  // console.log(bgTask);

  const handleMenuButton = useCallback(
    () => {
      navigation.openDrawer();
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NavBar}>
        <NavBar color={"#ffffff"} onPress={handleMenuButton} />
      </View>
      <Image source={bg_img} style={styles.img} />
      <View style={[styles.taskContainer, { backgroundColor: bgTask }]}>
        <ModeSwitch />
      </View>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLORS.primary
  },
  NavBar: {
    position: "absolute",
    top: 50,
    left: 20
  },
  taskContainer: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 323,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingTop: 20
  },
  img: {
    height: 340,
    width: 340,
    resizeMode: "contain",
    marginLeft: 25,
    marginTop: 42
  }
});
