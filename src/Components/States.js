import React, { useState } from "react";
import {
  GridListTile,
  GridListTileBar,
  Collapse,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";
import "./States.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.complex,
    }),
  },
  expandOpen: {
    transform: "rotate(540deg)",
  },
}));

function State(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <GridListTile>
        <img src={require("../blm.png")} alt="blm.png"></img>
        <GridListTileBar
          title={props.state}
          actionIcon={
            <ExpandMore
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
            ></ExpandMore>
          }
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ol>
              <div>
                {props.bailfunds.map((info, key) => (
                  <div key={key} className="bail-funds-div">
                    {info["name"]}
                    <br></br>
                    <a
                      href={info["url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click
                    </a>
                  </div>
                ))}
              </div>
            </ol>
          </CardContent>
        </Collapse>
        }
      </GridListTile>
    </div>
  );
}

export default State;
