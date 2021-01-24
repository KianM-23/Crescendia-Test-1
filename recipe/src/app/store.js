import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from "../features/recipe/recipeSlice";
import ingredientReducer from "../features/ingredient/ingredientSlice";

export default configureStore({
  reducer: {
    ingredient: ingredientReducer,
    recipe: recipeReducer,
  },
  devTools: true,
});
