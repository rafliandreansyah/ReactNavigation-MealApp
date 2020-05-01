import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constant/Colors";

const CategoryGridTile = (props) => {
  let PlatFormTouchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    PlatFormTouchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.listItem}>
      <PlatFormTouchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...styles.backgroundGrid,
            ...{ backgroundColor: props.color },
          }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </PlatFormTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    height: 150,
    margin: 16,
    borderRadius: 20,
    overflow: "hidden",
  },
  backgroundGrid: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    elevation: 5,
  },
  title: {
    fontSize: 22,
    color: Colors.primaryColor,
    fontFamily: "source-sans-pro-bold",
  },
});

export default CategoryGridTile;
