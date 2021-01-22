import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../service/axios";
export const getRecipes = createAsyncThunk("recipe/getRecipes", async () => {
  const response = await axios.get("/recipes");
  console.log(response.data);
  return response.data;
});

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
  },
  extraReducers: {
    [getRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const recipeSelect = (state) => state.recipe;

export default recipeSlice.reducer;
