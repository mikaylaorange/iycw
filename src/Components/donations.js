import React from "react";
import { Button } from "@material-ui/core";

function Donations(props) {
  return (
    <div style={{ display: "block", justifyContent: "center" }}>
      <h1 style={{ fontSize: "calc(10px + 2vmin)", color: "#EADEDA" }}>{props.name}</h1>
      <Button style={{ backgroundColor: "#EADEDA", width: "128px" }} onClick={(e) => {
        e.preventDefault();
        window.open(props.url, "_blank");
      }}
      >
        Donate
      </Button>
    </div>
  )
}
export default Donations;