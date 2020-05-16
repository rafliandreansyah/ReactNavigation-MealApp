import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.favorite);

  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.emptyText}>
        <DefaultText style={styles.text}>Favorite is empty!!!</DefaultText>
      </View>
    );
  }

  return <MealList listData={availableMeals} navigation={props.navigation} />;
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

const styles = StyleSheet.create({
  emptyText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default FavoriteScreen;
