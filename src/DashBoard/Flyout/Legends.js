import React from "react";
import classes from "./Flyout.module.css";
import { Container, Row, Col } from "react-bootstrap";

/*---------Images---------*/

import ICE from "../Images/ic1.bmp";
import TS from "../Images/ts1.bmp";
import VA from "../Images/va1.bmp";
import TC from "../Images/tc1.bmp";
import CAT from "../Images/tc1.bmp";

function Legends(props) {
  let flyoutClass = [`${classes.mainDiv}`];
  if (props.show) {
    flyoutClass = [`${classes.mainDiv} ${classes.animation}`];
  }

  return (
    <nav className={flyoutClass.join(" ")}>
      <div
        style={{
          textAlign: "left",
          paddingLeft: "5px",
          paddingBottom: "5px",
          borderBottom: "2px solid white",
          fontSize: "15px",
        }}
      >
        Legends
      </div>
      <div
        style={{
          border: "2px solid darkblue",
          backgroundColor: "lightblue",
          width: "98%",
          margin: "auto",
        }}
      >
        Quick Reference
      </div>
      <fieldset>
        <legend>Route Information</legend>
        <Container style={{ align: "center" }}>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              Color
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
              }}
            >
              Description
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.blackLine}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Main Route
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.darkRedLine}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Alernate Route
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.yellowLine}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              5000ft Contorous
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.brownLine}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              8000ft Contorous
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.redLine}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              13000ft Contorous
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "30%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <div className={`${classes.circle}`}></div>
            </Col>
            <Col
              style={{
                width: "60%",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginLeft: "3%",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              60 Min Circle
            </Col>
          </Row>
        </Container>
      </fieldset>
      <fieldset>
        <legend>Weather Information</legend>
        <Container style={{ align: "left" }}>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <img src={TS} width="100%" height="100%" />
            </Col>
            <Col
              style={{
                marginLeft: "3%",
              }}
            >
              TS
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <img src={VA} width="100%" height="100%" />
            </Col>
            <Col
              style={{
                marginLeft: "3%",
              }}
            >
              VA
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <img src={TC} width="100%" height="100%" />
            </Col>
            <Col
              style={{
                marginLeft: "3%",
              }}
            >
              TC
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <img src={CAT} width="100%" height="100%" />
            </Col>
            <Col
              style={{
                marginLeft: "3%",
              }}
            >
              CAT
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col
              style={{
                width: "25px",
                height: "25px",
                border: "1px solid darkblue",
                backgroundColor: "skyblue",
                marginRight: "3%",
              }}
            >
              <img src={ICE} width="100%" height="100%" />
            </Col>
            <Col
              style={{
                marginLeft: "3%",
              }}
            >
              ICE
            </Col>
          </Row>
        </Container>
      </fieldset>
    </nav>
  );
}

export default Legends;
