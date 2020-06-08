import React from "react";
import { Button } from "@material-ui/core";

function Donations(props) {
  return (
    <div>
      <img src={require('../blm.png')} alt="black lives matter"/>
      <Button style={{backgroundColor: "white"}} onClick={(e) =>{
          e.preventDefault();
          window.location.href=props.url;
        }}
      >
        Donate
      </Button>
      
      <h1>{props.name}</h1>
    </div>
  )
}
export default Donations;