import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Weekdays(props) {
  return (
    <Row>
      <Col sm={5} md={4}>
        <Card className="mb-4">
          <div className="Weekdays Card text-center">
            <div className="Card-body">
              <Card.Title className="Card-title"></Card.Title>
              <div className="weekly-forecast-date">{props.day}</div>
              <img
                className="weekly-forecast-icons"
                src="https://openweathermap.org/img/wn/10d@2x.png"
                id="icon"
                alt="temperature icon"
              />

              <div className="weekly-forecast-temperature">
                <span className="weekly-forecast-temperature-max">12°</span>
                <div className="weekly-forecast-temperature-min">20°</div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
