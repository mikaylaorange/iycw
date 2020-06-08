import firestoreRef from './firebase';
import React, { useEffect, useState } from "react";

import "./App.css";
import States from "./Components/state-button";
import { TextField } from "@material-ui/core";

//TODO: Add fonts to use for the site and clean this page up.
function App() {
  const [statesList, setStatesList] = useState([]);
  /** useEffect to retrieve all state names from firestore. The state name is the collection ID, 
   * so that will be passed down to the StateButton component. This is because we determine which
   * state is clicked within that component.
   */
  useEffect(() => {
    let statesArr = [];
    async function getStates() {
      let querySnapshot = await firestoreRef
        .collection('bail-funds')
        .get();
      querySnapshot.forEach(function (doc) {
        if (doc.data().funds !== undefined) {
          statesArr.push([doc.id, doc.data().abbreviation, doc.data().funds]);
        }
      });
      setStatesList(statesArr);
    }
    getStates();
  }, []);

  const search = () => {
    let input = document.getElementById("input").value.toUpperCase();
    for (let i = 0; i < statesList.length; i++) {
      if (statesList[i][0].toUpperCase().indexOf(input) > -1) {
        document.getElementById(`${statesList[i][0]}`).style.display = "";
      } else {
        document.getElementById(`${statesList[i][0]}`).style.display = "none";
      }
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="headline">Select A State</h1>
        <TextField type="search" id="input" onChange={search} variant="outlined" />

        {statesList.map((states, key) => (
          <States key={key}
            stateName={states[0]}
            abbreviation={states[1]}
            funds={states[2]}
          />
        )
        )}
      </div>
    </div>
  );
}

export default App;
