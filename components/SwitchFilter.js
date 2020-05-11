import React from "react";
import { StyleSheet, Switch, Text, View, Platform } from "react-native";

import Colors from "../constant/Colors";

const SwitchFilter = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={{ true: Colors.lightPrimaryColor, false: "null" }}
        thumbColor={{
          true: Platform.OS === "android" ? Colors.primaryColor : "white",
          false: "null",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: "source-sans-pro",
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 16,
  },
});

export default SwitchFilter;
