import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const HeaderTop = ({ router }, props) => {
  return (
    <>
      <div className="headerTop">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="socialTop">
                <a href="">
                  {" "}
                  <FaFacebookF />{" "}
                </a>
                <a href="">
                  {" "}
                  <FaTwitter />{" "}
                </a>
                <a href="">
                  {" "}
                  <FaLinkedin />{" "}
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="topRightMenu">
                <a href=""> SELL ON Akij </a>
                <a href=""> CUSTOMER CARE </a>
                <a href=""> TRACK MY ORDER </a>
                <a href=""> Language </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(HeaderTop);
