//React requirements
import React from 'react';

//UI
import { Col, Row } from 'react-bootstrap';

export default props => (
  <div>
    <Row>
      <Col xsOffset={1} xs={2} mdOffset={4} md={1} className="imageCropper">
        <img className="imageCropper__image" src="https://ipetcompanion.com/feedapuppy/styles/media/puppy.jpg" />
      </Col>
      <Col xs={6} md={3}>
        <h2 className="textLeft">Username here</h2>
        <p>Organization info</p>
        <p>Basic user information such as job title</p>
      </Col>
    </Row>
    <Row>
      <h1 className="textCenter">Recent notes here</h1>
    </Row>
  </div>
);
