import { isEmpty } from "lodash";
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
  console.log(recipes);
  return (
    <div className="py-4">
      <div className="grid max-w-6xl grid-cols-2 mx-auto bg-gray-100 bg-opacity-75">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.uuid} className="mx-2 mt-2 ">
                <div className="relative bg-blue-500 shadow-sm">
                  <img
                    className="w-full shadow-2xl h-80"
                    src={`http://localhost:3001${recipe.images.full}`}
                  />
                  <div className="absolute inset-0 flex flex-col p-10 space-y-6 text-gray-100 duration-300 ease-in transform opacity-0 hover:opacity-50 hover:bg-gray-900">
                    <p className="text-2xl">
                      Cook Time: {recipe.cookTime} mins
                    </p>
                    <p className="text-2xl">
                      Prep Time: {recipe.prepTime} mins
                    </p>
                    <p className="text-2xl">Servings: {recipe.servings}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-8 py-2 my-2 text-2xl font-bold bg-gray-100 border-2 hover:text-gray-100 hover:bg-gray-900 hover:border-gray-100">
                    <Link to={match.url + `/${recipe.uuid}`}>
                      {recipe.title}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RecipeList;
