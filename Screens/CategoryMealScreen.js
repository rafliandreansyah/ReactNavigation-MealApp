import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/data-dummy";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const dataCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Text>{dataCategory.title}</Text>
      <Button
        title="Detail screen"
        onPress={() => props.navigation.navigate("CetegoryMealsDetail")}
      />
      <Button
        title="Back to Categories"
        onPress={() => props.navigation.goBack()}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (params) => {
  const getId = params.navigation.getParam("categoryId");
  const dataCategory = CATEGORIES.find((cat) => cat.id === getId);

  return {
    headerTitle: dataCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
