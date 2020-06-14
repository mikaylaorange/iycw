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
  // const classes = useStyles();
  // const [statesList, setStatesList] = useState([]);
  // /** useEffect to retrieve all state names from firestore. The state name is the collection ID, 
  //  * so that will be passed down to the StateButton component. This is because we determine which
  //  * state is clicked within that component.
  //  */
  // useEffect(() => {
  //   let statesArr = [];
  //   async function getStates() {
  //     let querySnapshot = await firestoreRef
  //       .collection('bail-funds')
  //       .get();
  //     querySnapshot.forEach(function (doc) {
  //       if (doc.data().funds !== undefined) {
  //         statesArr.push([doc.id, doc.data().abbreviation, doc.data().funds]);
  //       }
  //     });
  //     setStatesList(statesArr);
  //   }
  //   getStates();
  // }, []);

  // const search = () => {
  //   let input = document.getElementById("input").value.toUpperCase();
  //   for (let i = 0; i < statesList.length; i++) {
  //     if (statesList[i][0].toUpperCase().indexOf(input) > -1) {
  //       document.getElementById(`${statesList[i][0]}`).style.display = "";
  //     } else {
  //       document.getElementById(`${statesList[i][0]}`).style.display = "none";
  //     }
  //   }
  // }

  // return (
  //   <div className="App">
  //     <div className="App-header">
  //       <h1 className="headline">If You Can't Walk</h1>
  //       <TextField className={classes.root} placeholder="Search for a State" type="search" id="input" onChange={search} InputProps={{
  //         classes: {
  //           input: classes.input,
  //         },
  //         disableUnderline: true
  //       }} />
  //       <div className="states-list">
  //         {statesList.map((states, key) => (
  //           <States key={key}
  //             stateName={states[0]}
  //             abbreviation={states[1]}
  //             funds={states[2]}
  //           />
  //         )
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
