import React, {useState, useEffect} from "react";
import { Button } from "@material-ui/core";

import "./state-button.css";



function State(props) {
  const [state_id,setStateId] = useState(null);

  useEffect(() => {
    props.P_stateSetter(state_id);
}, [state_id, props]);
  // TODO: 
  // 1) Here, create an onClick function that when the state is clicked, it renders the correct donations
  // 2) Make the display of these buttons inline so they appear horizontally instead of vertically. 
  const onClick = () => {
    setStateId(props.state);
    console.log(state_id);
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
