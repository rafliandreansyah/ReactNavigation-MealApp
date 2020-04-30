import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { CATEGORIES } from "../data/data-dummy";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const dataHandler = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      numColumns="2"
      keyExtractor={(item, index) => item.id}
      renderItem={dataHandler}
      data={CATEGORIES}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories Food",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
