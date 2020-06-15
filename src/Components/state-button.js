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
    };
  }

  cardAnimation = () => {
    const donation = document.getElementById(
      `donation = ${this.props.stateName}`
    );
    const state = document.getElementById(`state = ${this.props.stateName}`);

    if (!this.state.isStatesPage) {
      // Closing animation / Fading animation
      if (window.innerWidth > 850) {
        // Desktop Animation
        donation.style.opacity = "0";
        donation.style.left = "0%";
        donation.style.visibility = "hidden";
        state.style.left = "0%";
      } else {
        // Mobile Animation
        donation.style.opacity = "0";
        donation.style.visibility = "hidden";
        state.style.opacity = "1";
        state.style.visibility = "visible";
      }
    } else {
      // Opening / Appearing animation
      if (window.innerWidth > 850) {
        // Desktop Animation
        donation.style.opacity = "1";
        donation.style.left = "184px";
        donation.style.visibility = "visible";
        state.style.left = "-184px";
      } else {
        // Mobile Animation
        donation.style.opacity = "1";
        donation.style.visibility = "visible";
        state.style.opacity = "0";
        state.style.visibility = "hidden";
      }
    }
    this.setState({
      stateId: this.props.stateName,
      isStatesPage: !this.state.isStatesPage,
    });
  };

  onClick = (e) => {
    e.preventDefault();
    this.cardAnimation();
  };

  render() {
    const statesPage = (
      <div id={this.props.stateName} className="state-div">
        <div className="view-wrapper">
          <p style={{ color: "#EADEDA" }}>{this.props.stateName}</p>
          <Button
            onClick={this.onClick}
            className="view"
            style={{
              border: "2px solid #EADEDA",
              borderRadius: "15px",
              color: "#EADEDA",
            }}
          >
            {this.state.isStatesPage ? "View" : "Hide"}
          </Button>
        </div>
      </div>
    );

    return (
      <div className="state-wrapper">
        <div id={`state = ${this.props.stateName}`} className="state-page-div">
          {statesPage}
        </div>
        <div
          className="donation-wrapper"
          id={`donation = ${this.props.stateName}`}
        >
          <div className="donations-div">
            {this.props.funds.map((fund, key) => (
              <Donations key={key} name={fund.name} url={fund.url} />
            ))}
            <Button
              onClick={this.onClick}
              className="donation-view"
              style={{
                margin: "10% 0% 0% 0%",
                border: "2px solid #EADEDA",
                borderRadius: "15px",
                color: "#EADEDA",
              }}
            >
              {this.state.isStatesPage ? "View" : "Hide"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default State;
