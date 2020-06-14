import React from "react";
import "./Landing.css";
import { Button } from "@material-ui/core";
import TextScroll from "react-textscroll";

function Landing() {
  const names = [
    `EMMET TILL - JAMEE JOHNSON - ERIC GARNER - JOHN CRAWFORD II - MICHAEL BROWN -
    LAQUAN MCDONALD - SANDRA BLAND - TANISHA ANDERSON - WALTER SCOTT -
    BRENDON GLENN - FREDDIE BLUE - TRAYVON MARTIN - ATATIANA JEFFERSON
    - BOTHAM JEAN - PHILANDO CASTILE - WIILLIE TILLMAN - STEPHONE
    CLARK - JORDAN EDWARDS - SAMUEL DUBOSE - JAMAR CLARK - JANET
    WILSON - BREONNA TAYLOR - AHMAUD ARBERY - TONY MCDADE - GEORGE
    FLOYD - EZELL FORD - DANTE PARKER - MICHELLE CUSSEAUX - AKAI GURLEY
    - TAMIR RICE - RUMAIN BRISBON - JERAME REID - GEORGE MANN - MATTHEW
    AJIBADE - TROY ROBINSON - ANTHONY HILL - ALONZO SMITH - MICHEL NOE
    - RICHARD PERKINS - ERIC REASON - KIONTE SPENCER - JOSEPH MANN -
    FELIX KUMI`,
  ];

  return (
    <div className="landing-div">
      <div className="landing-headline">
        <p className="landing-text">If You Can't Walk</p>
      </div>
      <div className="landing-content-wrapper">
        <div className="names">
          <div className="names-wrapper">
            <p className="names-list">{names}</p>
            <div className="scrolling-names">
              <TextScroll mode="horizontal" text={names} speed={5000} />
            </div>
          </div>
        </div>
        <div className="objective">
          <div className="objective-wrapper">
            <ul style={{ listStyle: "none " }}>
              <li>Your support helps them....</li>
              <li>Your support helps us...</li>
              <li>Your support helps the everyone ...</li>
              <li>If You Can't Walk Then...</li>
            </ul>
            <div className="button-wrapper">
              <Button style={{ backgroundColor: "#eadeda", width: "40%" }}>
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="quote-wrapper">
          <p>
            “If you can't fly then run, if you can't run then walk, if you can't
            walk then crawl, but whatever you do you have to keep moving
            forward.” <br /> ― Martin Luther King Jr
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
