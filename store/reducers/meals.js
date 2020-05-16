import { MEALS } from "../../data/data-dummy";
import { TOGGLE_FAVORITE } from "../actions/meals";

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

    default:
      return state;
  }
};

export default mealsReducer;
