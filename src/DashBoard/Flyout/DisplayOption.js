import React, { useState, useContext } from "react";
import classes from "./Flyout.module.css";
import { Button, CheckBox, ComboBox, Input, Label } from "arms_v2.8_webui";
import { Container, Row, Col } from "react-bootstrap";
import { MapboxContext } from "./../../Map/Mapbox";

function DisplayOption(props) {
  const [check, setCheck] = useState(false);
  const [fir, setFIR] = useState("");
  const [projectionInfo, setProjectionInfo] = useState("");

  const { map } = useContext(MapboxContext);

  let flyoutClass = [`${classes.mainDiv}`];
  if (props.show) {
    flyoutClass = [`${classes.mainDiv} ${classes.animation}`];
  }

  const sampleData = [
    { value: "A", listname: "A", displayValue: "A" },
    { value: "B", listname: "B", displayValue: "B" },
    { value: "C", listname: "C", displayValue: "C" },
    { value: "D", listname: "D", displayValue: "D" },
    { value: "E", listname: "E", displayValue: "E" },
  ];

  const projectionList = [
    { value: "none", listname: "Select Projection", displayValue: "none" },
    {
      value: "albers",
      listname: "Albers",
      displayValue: "Albers",
    },
    {
      value: "equalEarth",
      listname: "Equal Earth",
      displayValue: "equalEarth",
    },
    {
      value: "equirectangular",
      listname: "Equirectangular",
      displayValue: "equirectangular",
    },
    {
      value: "lambertConformalConic",
      listname: "Lambert Conformal Conic",
      displayValue: "lambertConformalConic",
    },
    {
      value: "mercator",
      listname: "Mercator",
      displayValue: "mercator",
    },
    {
      value: "naturalEarth",
      listname: "Natural Earth",
      displayValue: "naturalEarth",
    },
    {
      value: "winkelTripel",
      listname: "Winkel Tripel",
      displayValue: "winkelTripel",
    },
  ];

  return (
    <nav className={flyoutClass.join(" ")}>
      <div>
        <div
          style={{
            textAlign: "left",
            paddingLeft: "5px",
            paddingBottom: "5px",
            borderBottom: "2px solid white",
            fontSize: "15px",
          }}
        >
          Display Options
        </div>
        <fieldset>
          <legend>Route Information</legend>
          <Container style={{ float: "left" }}>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col md={12}>
                <CheckBox iconType="tick" label={"All Routes"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"Airfields"} />
              </Col>
              <Col>
                <Button text={"Circles"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"FIR"} />
              </Col>
              <Col>
                <ComboBox
                  options={sampleData}
                  onChange={(e) => {
                    setFIR(e.target.value);
                    setCheck(false);
                  }}
                  value={fir}
                />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col style={{ margin: "1%" }}>
                <Row>
                  <Col>
                    <Button text={">"} onClick={() => setCheck(true)} />
                  </Col>
                  <Col>
                    <Button text={"<"} />
                  </Col>
                </Row>
              </Col>
              <Col style={{ alignSelf: "center", margin: "1%" }}>
                <Row>
                  <Col aria-rowspan={2}>
                    <Input
                      style={{ height: "40px" }}
                      value={check ? fir : ""}
                      onChange={() => setCheck(false)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col style={{ margin: "1%" }}>
                <Row>
                  <Col>
                    <Button text={"HighLight"} />
                  </Col>
                  <Col>
                    <Button text={"Clear"} onClick={() => setFIR([])} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{ display: "flex", margin: "1%", marginBottom: "20px" }}
            >
              <Col>
                <CheckBox iconType="tick" label={"Restricted Area"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"MORA"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"Terrian"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"Detail Terrian"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <CheckBox iconType="tick" label={"Swath"} />
              </Col>
              <Col>
                <Input />
              </Col>
              <Col>
                <Label text={"NM"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <p style={{ fontSize: "14px" }}>Organised Track System</p>
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col style={{ width: "100px" }}>
                <Label text={"NAT"} style={{ textAlign: "left" }} />
              </Col>
              <Col>
                <CheckBox iconType="tick" label={"E"} />
              </Col>
              <Col>
                <CheckBox iconType="tick" label={"W"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col style={{ width: "100px" }}>
                <Label text={"PACOTS"} style={{ textAlign: "left" }} />
              </Col>
              <Col>
                <CheckBox iconType="tick" label={"E"} />
              </Col>
              <Col>
                <CheckBox iconType="tick" label={"W"} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <p style={{ fontSize: "14px" }}>Projection</p>
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: "1%" }}>
              <Col>
                <ComboBox
                  options={projectionList}
                  style={{ width: "150px" }}
                  onChange={(e) => setProjectionInfo(e.target.value)}
                />
              </Col>
              <Col style={{ marginLeft: "5px" }}>
                <Button
                  text={"Load"}
                  onClick={() => {
                    const mapObj = map.current;
                    mapObj.setProjection(projectionInfo);
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button text={"Clear Chache"} style={{ width: "150px" }} />
              </Col>
            </Row>
          </Container>
        </fieldset>
      </div>
    </nav>
  );
}

export default DisplayOption;
