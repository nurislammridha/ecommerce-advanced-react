import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Form,
} from "react-bootstrap";

const MainMenu = ({ router }, props) => {
  return (
    <>
      <div className="headerBottom">
        <div className="container">
          <Navbar expand="lg" className="headerBottom">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                activeKey="/"
                onSelect={(selectedKey) => router.push(selectedKey)}
                className="navigation"
              >
                <Nav.Item>
                  <Nav.Link eventKey="/products">Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/search">Sitemap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/giftcard">Gift card</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/">Feedback</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/">First Purchase Offer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/AudiencePool">Audience Poll</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/">Deals and offer</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default withRouter(MainMenu);
