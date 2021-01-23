import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";

function Recipe({ match }) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path={match.url + "/:id"} component={RecipeDetails} />
        <Route path={match.url + "/"} component={RecipeList} />
      </Switch>
    </div>
  );
}

export default Recipe;
