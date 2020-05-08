import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/data-dummy";

const FavoriteScreen = (props) => {
  const dataMeal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={dataMeal} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (params) => {
  return {
    headerTitle: "Your Favorites",
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

export default FavoriteScreen;
