import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/data-dummy";

import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {
  const getMealData = props.navigation.getParam("mealId");
  const mealsData = MEALS.find((meal) => meal.id === getMealData);

  return (
    <View style={styles.screen}>
      <Text>{mealsData.title}</Text>
      <Button
        title="Back to Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (params) => {
  const getMealData = params.navigation.getParam("mealId");
  const mealsData = MEALS.find((idMeal) => idMeal.id === getMealData);

  return {
    headerTitle: mealsData.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={() => console.log("Favorite")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
