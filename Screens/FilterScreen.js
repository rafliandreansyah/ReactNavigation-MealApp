import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import SwitchFilter from "../components/SwitchFilter";
import { setFilter } from "../store/actions/meals";

const FilterScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactosFree, setIsLactosFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactosFree: isLactosFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilter(appliedFilters));
  }, [isGlutenFree, isLactosFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filter / Restriction</Text>
      <SwitchFilter
        label="Gluten-Free"
        value={isGlutenFree}
        onValueChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <SwitchFilter
        label="Lactos-Free"
        value={isLactosFree}
        onValueChange={(newValue) => setIsLactosFree(newValue)}
      />
      <SwitchFilter
        label="Vegan"
        value={isVegan}
        onValueChange={(newValue) => setIsVegan(newValue)}
      />
      <SwitchFilter
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = (params) => {
  return {
    headerTitle: "Filter",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Drawer Navigation"
          iconName="ios-menu"
          onPress={() => params.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={params.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "source-sans-pro-bold",
    fontSize: 22,
  },
});

export default FilterScreen;
