import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

import Colors from "../constant/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigation = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    CetegoryMealsDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FavoriteNavigation = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    CetegoryMealsDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const bottomTabConfig = {
  Meal: {
    screen: MealsNavigation,
    navigationOptions: {
      tabBarIcon: (tabs) => {
        return (
          <Ionicons name="md-restaurant" size={25} color={tabs.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorite: {
    screen: FavoriteNavigation,
    navigationOptions: {
      tabBarIcon: (tabs) => {
        return <Ionicons name="ios-star" size={25} color={tabs.tintColor} />;
      },
    },
    tabBarColor: Colors.secondaryColor,
  },
};

const BottomMealNavigation =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(bottomTabConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(
        bottomTabConfig,

        {
          tabBarOptions: {
            activeTintColor: Colors.secondaryColor,
          },
        }
      );

export default createAppContainer(BottomMealNavigation);
