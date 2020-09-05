import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterWidget = () => {
  return (
    <>
      <div className="footerArea">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="singleWidget">
                <h2> Make money with us </h2>
                <ul>
                  <li>
                    <a href="">Sell on Mac cafe </a>
                  </li>
                  <li>
                    <a href=""> Join Refferal Programe </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="singleWidget">
                <h2> Shop By </h2>
                <ul>
                  <li>
                    <a href="">Site Map </a>
                  </li>
                  <li>
                    <a href=""> Brands</a>
                  </li>
                  <li>
                    <a href=""> Deals & offer </a>
                  </li>
                  <li>
                    <a href="">Gift cards </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="singleWidget">
                <h2> Connect with us </h2>
                <ul>
                  <li>
                    <a href="">Facebook </a>
                  </li>
                  <li>
                    <a href=""> Instagrame</a>
                  </li>
                  <li>
                    <a href=""> Twitter </a>
                  </li>
                  <li>
                    <a href=""> Youtube</a>
                  </li>
                  <li>
                    <a href=""> Contact Us </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="singleWidget">
                <h2> Download app</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterWidget;
