import React from "react";
import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import Landing from "./Components/Landing";
import StatesPage from "./Components/states-page";
import history from "./history";

//TODO: Add fonts to use for the site and clean this page up.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/states" exact component={StatesPage} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
