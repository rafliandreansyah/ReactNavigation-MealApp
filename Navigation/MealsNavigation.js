import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

import Colors from "../constant/Colors";

const MealsNavigation = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    CetegoryMealsDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const FavoriteNavigation = createStackNavigator(
  {
    Favorite: FavoriteScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const BottomMealNavigation = createBottomTabNavigator(
  {
    Meal: {
      screen: MealsNavigation,
      navigationOptions: {
        tabBarIcon: (tabs) => {
          return (
            <Ionicons name="md-restaurant" size={25} color={tabs.tintColor} />
          );
        },
      },
    },
    Favorite: {
      screen: FavoriteNavigation,
      navigationOptions: {
        tabBarIcon: (tabs) => {
          return <Ionicons name="ios-star" size={25} color={tabs.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor,
    },
  }
);

export default createAppContainer(BottomMealNavigation);
