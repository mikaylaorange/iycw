import React from "react";
import { Button } from "@material-ui/core";

function Donations(props) {
  return (
    <div style={{ display: "block", justifyContent: "center" }}>
      <img style={{ width: "128px", height: "128px" }} src={require('../blm.png')} alt="black lives matter" />
      <h1 style={{ fontSize: "calc(10px + 2vmin)" }}>{props.name}</h1>
      <Button style={{ backgroundColor: "white", width: "128px" }} onClick={(e) => {
        e.preventDefault();
        window.location.href = props.url;
      }}
      >
        Donate
      </Button>
    </div>
  )
}
export default Donations;