import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { recipeSelect } from "./recipeSlice";
import { isEmpty } from "lodash";
import NavBar from "../../components/NavBar";

function RecipeDetails({ match }) {
  const { recipes } = useSelector(recipeSelect);
  const [recipe, setRecipe] = useState({});

  const { id } = match.params;
  console.log(recipe);
  console.log(id);
  useEffect(() => {
    setRecipe(recipes.find((recipe) => recipe.uuid === id));
  }, [id, recipes]);

  return (
    <div className="py-4">
      <div className="pb-10 shadow-2xl">
        <div className="max-w-6xl mx-auto bg-gray-100 bg-opacity-75 shadow-sm ">
          {!isEmpty(recipe) && (
            <div className="p-4">
              <div className="w-full my-6 text-4xl text-center bg-red-400 border">
                {recipe.title}
              </div>
              <div className="flex items-center justify-center h-full max-w-6xl mx-auto rounded-t-2xl">
                <img
                  className="w-3/5 mt-4 h-96"
                  src={`http://localhost:3001${recipe.images.full}`}
                />
              </div>

              {/* prep time */}

              <div className="grid grid-cols-5 m-10 border-t-4 ">
                <div className="flex flex-col h-20 font-semibold border-b border-l">
                  <p className="p-2">PREP TIME </p>
                  <span className="p-2">{recipe.prepTime}</span>
                </div>
                <div className="flex flex-col h-20 font-semibold border-b border-l">
                  <p className="p-2">SERVING TIME</p>
                  <spam className="p-2">{recipe.servings}</spam>
                </div>
                <div className="flex flex-col h-20 font-semibold border-b border-l">
                  <p className="p-2">COOK TIME</p>
                  <span className="p-2">{recipe.cookTime}</span>
                </div>
                <div className="flex flex-col h-20 font-semibold border-b border-l">
                  <p className="p-2">EDIT DATE</p>
                  <span className="p-2">{recipe.editDate}</span>
                </div>
                <div className="flex flex-col h-20 font-semibold border-b border-l border-r">
                  <p className="p-2">POST DATE</p>
                  <span className="p-2">{recipe.editDate}</span>
                </div>
              </div>

              {/* ingredients */}

              <div className="p-4 border-gray-300 ">
                <h2 className="mb-6 text-3xl font-semibold text-center">
                  INGREDIENTS
                </h2>
                <div className="grid h-64 grid-flow-col grid-rows-5 gap-4 font-medium">
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient) => {
                      return (
                        <div>
                          <div
                            className="flex items-center"
                            key={ingredient.uuid}
                          >
                            <div className="mr-2 ">
                              <input
                                type="checkbox"
                                className="w-6 h-6 checked:bg-red-500 checked:border-transparent"
                              />
                            </div>
                            <div>{` ${ingredient.name} ${ingredient.amount} ${ingredient.measurement}`}</div>
                          </div>
                          <hr className="border" />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="mb-6 ml-6">
                <h2 className="my-8 text-3xl">DIRECTIONS</h2>
                <ul className="flex flex-col space-y-6 text-xl">
                  {recipe.directions &&
                    recipe.directions.map((direction) => {
                      return (
                        <li
                          key={direction.uuid}
                        >{`• ${direction.instructions}`}</li>
                      );
                    })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
