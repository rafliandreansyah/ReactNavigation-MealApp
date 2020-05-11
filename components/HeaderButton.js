import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constant/Colors";

const CustomHeaderButton = (props) => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable>
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS === "android" ? "white" : Colors.primaryColor}
      />
    </Touchable>
  );
};

export default CustomHeaderButton;
