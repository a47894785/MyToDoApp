import React from "react";
import { Feather } from "@expo/vector-icons";

const NavBar = ({ onPress, color }) => {
  return <Feather name="menu" size={24} color={color} onPress={onPress} />;
};

export default NavBar;
