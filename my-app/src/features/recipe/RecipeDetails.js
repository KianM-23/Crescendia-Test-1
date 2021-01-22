import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { recipeSelect } from "./recipeSlice";

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
    <div>
      {recipe && (
        <div>
          <div>{recipe.title}</div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
