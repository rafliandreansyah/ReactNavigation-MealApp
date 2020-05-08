import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = (params) => {
  return {
    headerTitle: "Categories Food",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Drawer Navigation"
          iconName="ios-menu"
          onPress={() => params.navigation.toggleDrawer()}
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

export default CategoriesScreen;
