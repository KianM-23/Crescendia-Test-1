import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";

function Recipe({ match }) {
  return (
    <div>
      <h1>Recipe</h1>
      <Switch>
        <Route path={match.url + "/:id"} component={RecipeDetails} />
        <Route path={match.url + "/"} component={RecipeList} />
      </Switch>
    </div>
  );
}

export default Recipe;
