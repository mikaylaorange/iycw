import firestoreRef from './firebase';
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, Router } from 'react-router-dom';
import Landing from "./Components/Landing"
import StatesPage from "./Components/states-page";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import history from './history';

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    width: "510px",
    height: "66px",
    border: "2px solid #EADEDA",
    borderRadius: "15px",
  },
  input: {
    fontSize: 30,
    color: "#EADEDA",
    top: "300%",
    textAlign: "center",
    marginTop: "2%",
  }
})
//TODO: Add fonts to use for the site and clean this page up.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/states" exact component={StatesPage}/>
        </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App;
