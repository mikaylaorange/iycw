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
    }
  }
  onClick = e => {
    e.preventDefault();
    this.setState(
      {
        stateId: this.props.stateName,
        isStatesPage: !this.state.isStatesPage,
      },
      () => console.log(this.state.stateId)
    );
  };

  render() {
    const donationsPage = (
      <div>
        <div id={this.props.stateName} className="state-div">
        <div className="view-wrapper">
          <p style={{ color: "#EADEDA" }}>{this.props.stateName}</p>
          <Button
            onClick={this.onClick} className="view" style={{ 
              border: "2px solid #EADEDA", 
              borderRadius: "15px",
              color: "#EADEDA"  }}>
                {this.state.isStatesPage ? "View" : "Hide"}
          </Button>
        </div>
      </div>
      <div className="donations-div">
      {this.props.funds.map((fund, key) => (
          <Donations key={key}
            name={fund.name}
            url={fund.url}
          />
        )
        
        )}
        </div>
      </div>
    )
    const statesPage = (
      <div id={this.props.stateName} className="state-div">
        <div className="view-wrapper">
          <p style={{ color: "#EADEDA" }}>{this.props.stateName}</p>
          <Button
            onClick={this.onClick} className="view" style={{ 
              border: "2px solid #EADEDA", 
              borderRadius: "15px",
              color: "#EADEDA"  }}>
                {this.state.isStatesPage ? "View" : "Hide"}
          </Button>
        </div>
      </div>
    )
    return (this.state.isStatesPage ? statesPage : donationsPage)

  }

}

export default State;
