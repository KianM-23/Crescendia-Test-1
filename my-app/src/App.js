import React from "react";
import { Route, Switch } from "react-router-dom";
import Recipe from "./features/recipe/Recipe";

function App() {
  return (
    <div className="bg-green-500">
      <Switch>
        <Route path="/recipe" component={Recipe} />
      </Switch>
    </div>
  );
}

export default App;
