import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import MealsNavigation from "./navigation/MealsNavigation";

enableScreens();

const fetchFont = () => {
  return Font.loadAsync({
    "source-sans-pro-light": require("./assets/Fonts/SourceSansPro-ExtraLight.ttf"),
    "source-sans-pro": require("./assets/Fonts/SourceSansPro-Regular.ttf"),
    "source-sans-pro-bold": require("./assets/Fonts/SourceSansPro-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
