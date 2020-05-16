import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../store/actions/meals";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListData from "../components/ListData";

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const getMealId = props.navigation.getParam("mealId");
  const currentFavorite = useSelector((meal) => meal.meals.favorite);
  const isFavorite = currentFavorite.some((meal) => meal.id === getMealId);
  const mealsData = availableMeals.find((meal) => meal.id === getMealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(getMealId));
  }, [dispatch, getMealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isFavorite });
  }, [isFavorite]);

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: mealsData.imgUrl }} style={styles.image} />
        <View style={styles.mealrow}>
          <DefaultText style={styles.textDetail}>
            {mealsData.duration} minute
          </DefaultText>
          <DefaultText style={styles.textDetail}>
            {mealsData.complexity}
          </DefaultText>
          <DefaultText style={styles.textDetail}>
            {mealsData.affordability}
          </DefaultText>
        </View>

        <Text style={styles.title}>Ingredient</Text>
        {mealsData.ingredients.map((ingredients) => (
          <ListData key={ingredients}>{ingredients}</ListData>
        ))}
        <Text style={styles.title}>Step</Text>
        {mealsData.steps.map((steps) => (
          <ListData key={steps}>{steps}</ListData>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (params) => {
  // const getMealData = params.navigation.getParam("mealId");
  // const mealsData = MEALS.find((idMeal) => idMeal.id === getMealData);
  const mealTitle = params.navigation.getParam("mealTitle");
  const toggleFavorite = params.navigation.getParam("toggleFav");
  const isFavorite = params.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  mealrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "source-sans-pro-bold",
    fontSize: 20,
    textAlign: "center",
  },
});

export default MealDetailScreen;
