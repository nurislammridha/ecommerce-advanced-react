import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
                    <a href="">Sell on Maccafe </a>
                  </li>
                  <li>
                    <a
                      href=""
                      // className="btn btn-outline-secondary btn-sm mt-2"
                    >
                      {" "}
                      Join Refferal Programe{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="singleWidget">
                <h2> Shop By </h2>
                <ul>
                  <li>
                    <a href="">Sitemap </a>
                  </li>
                  <li>
                    <a href=""> Brands</a>
                  </li>
                  <li>
                    <a href=""> Deals & offers </a>
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
                  <li className="text-center">
                    <a href="">Facebook </a>
                  </li>
                  <li className="text-center">
                    <a href=""> Instagram</a>
                  </li>
                  <li className="text-center">
                    <a href=""> Twitter </a>
                  </li>
                  <li className="text-center">
                    <a href=""> Youtube</a>
                  </li>
                  {/* <li>
                    <a href=""> Contact Us </a>
                  </li> */}
                </ul>
              </div>
            </Col>

            <Col lg={3}>
              <div className="singleWidget">
                <h2> Download app</h2>
                <a href="#">
                  <img className="ml-5" src="/images/default/playstore.png" />
                </a>
                <h4 className="pt-5 text-center">Hotline: 01XXXXXXXXX</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterWidget;
