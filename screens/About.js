import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          About
        </Text>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
