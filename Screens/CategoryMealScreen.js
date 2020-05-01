import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/data-dummy";
import { MEALS } from "../data/data-dummy";

import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  const renderItemsMeal = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imgUrl={itemData.item.imgUrl}
        onSelectItem={() =>
          props.navigation.navigate({
            routeName: "CetegoryMealsDetail",
            params: { mealId: itemData.item.id },
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItemsMeal}
        style={{ width: "100%" }}
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
    paddingHorizontal: 16,
  },
});

export default CategoryMealScreen;
