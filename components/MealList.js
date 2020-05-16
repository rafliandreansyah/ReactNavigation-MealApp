import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

const MealList = (props) => {
  const favorite = useSelector((meal) => meal.meals.favorite);

  const renderItemsMeal = (itemData) => {
    const isFavorite = favorite.some(
      (mealId) => mealId.id === itemData.item.id
    );
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
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItemsMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});

export default MealList;
