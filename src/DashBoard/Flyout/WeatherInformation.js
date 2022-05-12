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
              <CheckBox iconType="tick" label={"CAT"} />
            </Col>
            <Col>
              <CheckBox iconType="tick" label={"ICING"} />
            </Col>
            <Col>
              <CheckBox iconType="tick" label={"CB"} />
            </Col>
            <Col>
              <CheckBox iconType="tick" label={"HIWC"} />
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col>
              <CheckBox iconType="tick" label={"TCAC"} />
            </Col>
            <Col>
              <CheckBox iconType="tick" label={"VAAC"} />
            </Col>
          </Row>
          <Row style={{ display: "flex", margin: "1%" }}>
            <Col>
              <CheckBox iconType="tick" label={"SIGMAT"} />
            </Col>
          </Row>
        </Container>
        <fieldset style={{ float: "left", width: "95%" }}>
          <legend>
            <CheckBox iconType="tick" label={"Charts"} />
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
