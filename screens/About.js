import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  useWindowDimensions
} from "react-native";
import React, { useCallback } from "react";
import { useClipboard, useColorMode } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import COLORS from "../theme/theme";
import NavBar from "../components/NavBar";
import about_img from "../assets/about_bg.png";

const About = () => {
  const { width: screenWidth } = useWindowDimensions();
  const navigation = useNavigation();
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const aboutBg = isDarkMode ? COLORS.dark : COLORS.white;
  const aboutText = isDarkMode ? COLORS.white : COLORS.dark;

  const handleMenuButton = useCallback(
    () => {
      navigation.openDrawer();
    },
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={about_img}
        style={[styles.img, { left: screenWidth / 2 - 150 }]}
      />
      <View style={styles.navBar}>
        <NavBar onPress={handleMenuButton} color={COLORS.white} />
      </View>
      <ScrollView style={[styles.cardContainer, { backgroundColor: aboutBg }]}>
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ color: aboutText, fontSize: 24, fontWeight: "bold" }}>
            About us
          </Text>
          <Text style={{ color: aboutText, marginTop: 5, fontSize: 20 }}>
            Velit amet ipsum excepteur id commodo proident anim dolore magna
            minim officia. Excepteur quis duis deserunt ullamco consectetur
            veniam qui eu labore fugiat ea labore esse et. Ut culpa laborum
            reprehenderit ullamco labore.
          </Text>
          <Text style={{ color: aboutText, marginTop: 8, fontSize: 20 }}>
            Consectetur laboris ut fugiat nisi dolor cillum excepteur eiusmod
            aliquip ea ullamco laboris occaecat. Ipsum est sunt do ipsum
            commodo. Exercitation excepteur enim cupidatat voluptate adipisicing
            eu. Cillum in nisi anim reprehenderit proident dolor nostrud minim
            labore ullamco cupidatat officia deserunt. Id dolor sunt qui labore
            elit. Proident enim enim sunt laboris deserunt sunt non ut veniam
            Lorem dolore ut elit et. Nisi officia ullamco nostrud et do id minim
            nisi dolore pariatur do irure.
          </Text>
          <Text style={{ color: aboutText, marginTop: 8, fontSize: 20 }}>
            Et in qui adipisicing enim duis ullamco ea esse anim exercitation.
            Dolore id exercitation elit veniam. Eiusmod aute sint nostrud
            cupidatat minim duis et ipsum. Dolor incididunt id est irure. Nisi
            excepteur occaecat ea laborum consequat esse ut velit voluptate do.
            Minim mollit officia pariatur ea exercitation ipsum. Ea sunt sit
            nisi sint mollit est magna amet. Nulla proident enim esse enim
            voluptate esse dolor cupidatat. Elit ut ipsum aute dolor nostrud. Eu
            quis nulla Lorem aliquip sunt ut velit in. Nisi duis consectetur
            voluptate excepteur sunt consequat laboris cupidatat magna elit
            irure. Deserunt dolor ex id esse. Amet sunt reprehenderit irure
            cupidatat labore deserunt. Lorem magna fugiat commodo non id ipsum
            culpa magna cupidatat reprehenderit. Anim labore incididunt do
            proident mollit ullamco sint reprehenderit incididunt do labore nisi
            adipisicing. Ex irure aliqua amet dolore mollit eu dolor laborum
            exercitation voluptate.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLORS.green
  },
  img: {
    width: 300,
    height: 300,
    position: "absolute",
    top: 50
  },
  navBar: {
    position: "absolute",
    top: 50,
    left: 20
  },
  cardContainer: {
    position: "absolute",
    top: 323,
    right: 0,
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20
  }
});
