import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/data-dummy";

import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filter);
  const catId = props.navigation.getParam("categoryId");

  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (params) => {
  const getId = params.navigation.getParam("categoryId");
  const dataCategory = CATEGORIES.find((cat) => cat.id === getId);

  return {
    headerTitle: dataCategory.title,
  };
};

export default CategoryMealScreen;
