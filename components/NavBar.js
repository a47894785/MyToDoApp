import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const NavBar = ({ onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name="menu" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default NavBar;
