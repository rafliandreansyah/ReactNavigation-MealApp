import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/data-dummy";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListData from "../components/ListData";

const MealDetailScreen = (props) => {
  const getMealData = props.navigation.getParam("mealId");
  const mealsData = MEALS.find((meal) => meal.id === getMealData);

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
