import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/data-dummy";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filter);
  const catId = props.navigation.getParam("categoryId");

  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (meals.length === 0) {
    return (
      <View style={styles.textContainer}>
        <DefaultText>Meal is empty, Check your filter!</DefaultText>
      </View>
    );
  }

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (params) => {
  const getId = params.navigation.getParam("categoryId");
  const dataCategory = CATEGORIES.find((cat) => cat.id === getId);

  return {
    headerTitle: dataCategory.title,
  };
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
