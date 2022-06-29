import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React, { useCallback } from "react";
import { Avatar, Headline, Text, Drawer, IconButton } from "react-native-paper";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useColorMode } from "native-base";

import ModeSwitch from "../components/mode-switch";
import COLORS from "../theme/theme";
import ic_task from "../assets/ic_task.png";
import about from "../assets/about.png";

const CustomDrawerItem = ({
  label,
  icon,
  onPress,
  active,
  primary,
  text,
  activeBg,
  activeText
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        backgroundColor: active ? activeBg : primary,
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 8,
        paddingVertical: 10,
        borderRadius: 10
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          tintColor: active ? activeText : text,
          marginLeft: 10
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          paddingLeft: 10,
          color: active ? activeText : text
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawer = props => {
  const { state, navigation } = props;

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const currentRoute = state.routeNames[state.index];

  // theme color
  const drawerPrimary = isDarkMode ? COLORS.blueGray : COLORS.primaryVariant;
  const drawerText = isDarkMode ? COLORS.white : COLORS.dark;
  const activeBg = isDarkMode ? COLORS.dark : COLORS.white;
  const activeText = isDarkMode ? COLORS.white : COLORS.primaryVariant;

  const handlePressBackButton = useCallback(
    () => {
      navigation.closeDrawer();
    },
    [navigation]
  );

  const handlePressTasks = useCallback(
    () => {
      navigation.navigate("Tasks");
    },
    [navigation]
  );

  const handlePressAbout = useCallback(
    () => {
      navigation.navigate("About");
    },
    [navigation]
  );

  return (
    <View style={{ flex: 1, backgroundColor: drawerPrimary }}>
      <DrawerContentScrollView>
        <View>
          <IconButton
            icon="chevron-left"
            color={drawerText}
            size={24}
            style={styles.backIcon}
            onPress={handlePressBackButton}
          />
        </View>
        <Avatar.Image
          source={require("../assets/XiaoHua.png")}
          size={100}
          style={{
            marginLeft: 30,
            marginTop: 15
          }}
        />
        <Headline style={[styles.headline, { color: drawerText }]}>
          Pin Hua
        </Headline>
        <CustomDrawerItem
          label={"To-Do List"}
          icon={ic_task}
          active={currentRoute === "Tasks"}
          onPress={handlePressTasks}
          primary={drawerPrimary}
          text={drawerText}
          activeBg={activeBg}
          activeText={activeText}
        />
        <CustomDrawerItem
          label={"About"}
          icon={about}
          active={currentRoute === "About"}
          onPress={handlePressAbout}
          primary={drawerPrimary}
          text={drawerText}
          activeBg={activeBg}
          activeText={activeText}
        />
      </DrawerContentScrollView>
      <Drawer.Section>
        <ModeSwitch />
      </Drawer.Section>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  backIcon: {
    left: "75%",
    top: "10%",
    alignItems: "center"
  },
  headline: {
    fontWeight: "bold",
    marginLeft: 35,
    marginTop: 5,
    marginBottom: 30
  }
});
