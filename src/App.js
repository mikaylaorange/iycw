import firestoreRef from './firebase';
import React, {useEffect,useState} from "react";

import "./App.css";
import States from "./Components/state-button";
import { TextField } from "@material-ui/core";

//TODO: Add fonts to use for the site and clean this page up.
function App() {
  const [statesList,setStatesList] = useState([]);
  const [P_state, P_setState] = useState(null);

  const P_wrapperSetState = val =>
    {
        P_setState(val);
    };
  
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
      querySnapshot.forEach(function(doc) {
        if (doc.data().funds !== undefined) {
        statesArr.push([doc.id,doc.data().abbreviation,doc.data().funds]);
        }
      });
      setStatesList(statesArr);
    }
    getStates();
  },[]);

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="headline">Select A State</h1>
        <TextField type="search" variant="outlined" />
          {statesList.map((states,key) => (
            <States key={key} 
                    state={states[0]}
                    abbreviation={states[1]}
                    funds={states[2]}
                    P_state={P_state}
                    P_stateSetter={P_wrapperSetState}/>
          )
          )}
      </div>
    </div>
  );
}

export default App;
