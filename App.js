import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import COLORS from "./theme/theme";
import Route from "./components/Route";

export default function App() {
  const [appIsReady, setAppisReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppisReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(
    async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    },
    [appIsReady]
  );

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.primary }}
      onLayout={onLayoutRootView}
    >
      <Route />
    </View>
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
