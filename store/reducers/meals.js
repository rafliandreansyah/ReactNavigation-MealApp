import { MEALS } from "../../data/data-dummy";

const initialState = {
  meals: MEALS,
  filter: MEALS,
  favorite: [],
};

const mealsReducer = (state = initialState, actions) => {
  return state;
};

export default mealsReducer;
