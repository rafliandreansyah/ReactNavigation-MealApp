import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsNavigation from "./Navigation/MealsNavigation";

const fetchFont = () => {
  return Font.loadAsync({
    "source-sans-pro-light": "./assets/Fonts/SourceSansPro-ExtraLight.ttf",
    "source-sans-pro": "./assets/Fonts/SourceSansPro-Regular.ttf",
    "source-sans-pro-bold": "./assets/Fonts/SourceSansPro-Bold.ttf",
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
