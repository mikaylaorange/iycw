import React from "react";
import { Button } from "@material-ui/core";
import "./state-button.css";
import Donations from "./donations";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stateId: null,
                  isStatesPage: true,
                  isDonationsPage: false}
  }
  onClick = e => {
    e.preventDefault();
    this.setState(
      {
        stateId: this.props.stateName,
        isStatesPage: false,
        isDonationsPage: true
      },
      () => console.log(this.state.stateId)
    );
  };
  onHide = e => {
    e.preventDefault();
    this.setState(
      {
        stateId: null,
        isStatesPage: true,
        isDonationsPage: false
      }
    )
  }
  render() {
    const donationsPage = (
      <div>
          {this.props.funds.map((fund, key) => (
          <Donations key={key}
            name={fund.name}
            url={fund.url}
           />
        )
        )}
        <Button style={{backgroundColor: "white"}}
                onClick={this.onHide}>Hide</Button>
        </div>
    )
      const statesPage = (
        
<div id={this.props.stateName}>
  
     <Button style={{
        backgroundColor: "#FFCF99",
        height: "100px",
        width: "100px"
      }}
       onClick={this.onClick} >
        {this.props.abbreviation}
      </Button>
      <h1>{this.props.stateName}</h1>      
    </div>
      )
    return (this.state.isStatesPage ? statesPage : donationsPage)
    
    }
      
  }

 export default State;
