import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";

const MealsNavigation = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  CetegoryMealsDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigation);
