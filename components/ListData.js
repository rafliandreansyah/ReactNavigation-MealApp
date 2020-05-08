import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DefaultText from "./DefaultText";

const ListData = (props) => (
  <View style={styles.item}>
    <DefaultText>
      <Ionicons name="ios-radio-button-on" size={12} color="black" />
      {"   "}
      {props.children}
    </DefaultText>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderColor: "#ccc",
    borderRadius: 10,
    marginHorizontal: 22,
    marginVertical: 8,
    borderWidth: 1,
  },
});

export default ListData;
