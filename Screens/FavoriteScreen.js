import React from "react";

import MealList from "../components/MealList.js";

import { MEALS } from "../data/data-dummy";

const FavoriteScreen = (props) => {
  const dataMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={dataMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoriteScreen;
