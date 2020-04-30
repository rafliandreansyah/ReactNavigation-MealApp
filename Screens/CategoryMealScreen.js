import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/data-dummy";
import { MEALS } from "../data/data-dummy";

const CategoryMealScreen = (props) => {
  const renderItemsMeal = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItemsMeal}
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
