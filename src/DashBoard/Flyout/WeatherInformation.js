import { CheckBox, RadioButton } from "arms_v2.8_webui";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Flyout.module.css";

function WeatherInformation(props) {
  let flyoutClass = [`${classes.mainDiv}`];
  if (props.show) {
    flyoutClass = [`${classes.mainDiv} ${classes.animation}`];
  }
  const chartsRadio = [
    { name: "Satellite", id: 1 },
    { name: "SIGWX", id: 2 },
  ];
  const forecasthr = [
    { name: "0", id: 1 },
    { name: "6", id: 2 },
    { name: "12", id: 3 },
    { name: "18", id: 4 },
  ];

  return (
    <nav className={flyoutClass.join(" ")}>
      <fieldset>
        <legend>Weather Information</legend>
        <Container style={{ float: "left" }}>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col>
              <CheckBox label={"CAT"} />
            </Col>
            <Col>
              <CheckBox label={"ICING"} />
            </Col>
            <Col>
              <CheckBox label={"CB"} />
            </Col>
            <Col>
              <CheckBox label={"HIWC"} />
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col>
              <CheckBox label={"TCAC"} />
            </Col>
            <Col>
              <CheckBox label={"VAAC"} />
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col>
              <CheckBox label={"SIGMAT"} />
            </Col>
          </Row>
        </Container>
        <fieldset>
          <legend>
            <CheckBox label={"Charts"} />
          </legend>
          <Container>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <RadioButton
                  options={chartsRadio}
                  labelFont="12px"
                  radioboxsize="13px"
                />
              </Col>
            </Row>
          </Container>
          <fieldset>
            <legend>Forecasthr</legend>
            <Container>
              <Row style={{ display: "flex", margin: "1%" }}>
                <Col>
                  <RadioButton
                    options={forecasthr}
                    labelFont="12px"
                    radioboxsize="13px"
                  />
                </Col>
              </Row>
            </Container>
          </fieldset>
        </fieldset>
      </fieldset>
    </nav>
  );
}

export default WeatherInformation;
