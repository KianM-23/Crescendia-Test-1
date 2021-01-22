import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipes, recipeSelect } from "./recipeSlice";

function RecipeList({ match }) {
  const dispatch = useDispatch();
  const { recipes } = useSelector(recipeSelect);
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  return (
    <div className="flex">
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.uuid} className="px-2 w-64">
              <h2 className="font-bold">{recipe.title}</h2>
              <div className="bg-red-500 w-full h-64"></div>
              <div>
                <h3 className="text-center font-semibold">Ingredients</h3>
                <ul>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient) => {
                      return (
                        <li
                          key={ingredient.uuid}
                        >{`• ${ingredient.name} ${ingredient.amount} ${ingredient.measurement}`}</li>
                      );
                    })}
                </ul>
                <div>
                  <Link to={match.url + `/${recipe.uuid}`}>View Details</Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RecipeList;
