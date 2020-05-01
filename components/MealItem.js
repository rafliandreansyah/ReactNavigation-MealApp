import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constant/Colors";

const MealItem = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItem}>
      <Touchable onPress={props.onSelectItem}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeading }}>
            <ImageBackground
              source={{ uri: props.imgUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={styles.textDetail}>{props.duration} minute</Text>
            <Text style={styles.textDetail}>{props.complexity}</Text>
            <Text style={styles.textDetail}>{props.affordability}</Text>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    height: 250,
    backgroundColor: "#ccc",
    marginVertical: 4,
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    fontFamily: "source-sans-pro-bold",
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  textDetail: {
    fontFamily: "source-sans-pro-bold",
    fontSize: 18,
    color: "white",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeading: {
    height: "85%",
  },
  mealDetail: {
    height: "15%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
});

export default MealItem;
