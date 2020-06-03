import React from "react";
import "./App.css";
import States from "./Components/States";
import { TextField, GridList, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const mockData = require("./mockData.json");

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h4">States</Typography>
      <TextField type="search" className="searchTextField" variant="outlined" />
      <GridList cellHeight={180} rows={2} cols={3} className={classes.gridList}>
        {mockData.map((states, key) => (
          <States state={states.state} bailfunds={states.bail_funds} />
        ))}
      </GridList>
    </div>
  );
}

export default App;
