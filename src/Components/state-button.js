import React from "react";
import { Button } from "@material-ui/core";
import "./state-button.css";
import Donations from "./donations";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateId: null,
      isStatesPage: true,
      isDonationsPage: false
    }
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
        <Button style={{ backgroundColor: "white" }}
          onClick={this.onHide}>Hide</Button>
      </div>
    )
    const statesPage = (
      <div id={this.props.stateName} className="state-div">
        <div className="view-wrapper">
          <p style={{ color: "#EADEDA" }}>{this.props.stateName}</p>
          <Button
            onClick={this.onClick} className="view" style={{ border: "2px solid #EADEDA", borderRadius: "15px", }}>
            <p style={{ color: "#EADEDA" }}>View</p>
          </Button>
        </div>
      </div>
    )
    return (this.state.isStatesPage ? statesPage : donationsPage)

  }

}

export default State;
