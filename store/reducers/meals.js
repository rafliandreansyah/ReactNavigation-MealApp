import { MEALS } from "../../data/data-dummy";
import { TOGGLE_FAVORITE, SET_FILTER } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filter: MEALS,
  favorite: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favorite.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updateFavMeal = [...state.favorite];
        updateFavMeal.splice(existingIndex, 1);
        return { ...state, favorite: updateFavMeal };
      } else {
        const addFavorite = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return { ...state, favorite: state.favorite.concat(addFavorite) };
      }
    case SET_FILTER:
      const appliedFilter = action.filters;
      const updateFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilter.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilter.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilter.lactosFree && !meal.isLactosFree) {
          return false;
        }
        return true;
      });
      return { ...state, filter: updateFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
