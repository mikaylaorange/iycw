import React, {useState, useEffect} from "react";
import { Button } from "@material-ui/core";

import "./state-button.css";



function State(props) {
  const [stateId,setStateId] = useState(null);

  useEffect(() => {
    props.P_stateSetter(stateId);
}, [stateId, props]);
  // TODO: 
  // 1) Here, create an onClick function that when the state is clicked, it renders the correct donations
  // 2) Make the display of these buttons inline so they appear horizontally instead of vertically. 
  // 3) Fix bug where this state button has to be clicked twice for the stateId to update. This may require a change in 
  // the way we create our components (use class components instead of method ones.)
  const onClick = () => {
    setStateId(props.state)
  }
  return (
    <div>
      <Button style={{backgroundColor: "#FFCF99", 
                      height: "100px", 
                      width: "100px"}} 
              onClick={() => onClick()}>
          {props.abbreviation}
      </Button>
      <h1>{props.state}</h1> 
    </div>
  );
}

export default State;
