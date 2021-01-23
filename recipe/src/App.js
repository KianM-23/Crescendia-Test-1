import React from "react";
import { Route, Switch } from "react-router-dom";
import Recipe from "./features/recipe/Recipe";
import wood from "../src/resources/images/wood.png";
import Home from "./components/Home";

function App() {
  return (
    <div className="" style={{ backgroundImage: `url(${wood})` }}>
      <Switch>
        <Route path="/recipe" component={Recipe} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
