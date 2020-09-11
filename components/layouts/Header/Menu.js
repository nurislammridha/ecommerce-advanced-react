import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Menu = ({ router }, props) => {
  return (
    <>
      <div className="headerBottom">
        <div className="container">
          <div className="row">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="navigation"
            >
              <Nav.Item>
                <Nav.Link href="/home">Brands</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Sitemap</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Gift card</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Feedback</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">First Purchase Offer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Audience Poll</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Deals and offer</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menu);
