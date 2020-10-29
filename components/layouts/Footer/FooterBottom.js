import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterBottom = () => {
  return (
    <>
      <div className="footerbotomarea">
        <div className="container-fluid">
          <Row>
            <Col lg={6}>
              <div className="singleWidget footertext">
                <p className="pl-4 pt-2">A higher form of shipping.stay with us enjoy exciting offers,deals & more. </p>
               
              </div>
            </Col>

            <Col lg={6}>
              <div className="singleWidget footerwidget">
                
                <ul>
                  <li>
                    <a className="text-decoration-none" href="">Copyright @2020 maccaf </a>
                  </li>
                  <li>
                    <a href="">Privacy policy</a>
                  </li>
                  <li>
                    <a href="">Terms of use</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
            </Col>

            

          
          </Row>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
