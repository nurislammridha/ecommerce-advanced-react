import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import HeaderTop from "./HeaderTop";
import HeaderSearchBar from "./HeaderSearchBar";
import {
  Dropdown,
  Form,
  FormControl,
  Button,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  FaSearchengin,
  FaCartArrowDown,
  FaNotesMedical,
  FaBell,
} from "react-icons/fa";
import Menu from "./Menu";

const Header = ({ router }, props) => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <Navbar>
            <Navbar.Brand href="#home">
              <img src="/images/logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="header-category mr-3">
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="search">
                <FormControl type="text" placeholder="Search" />
              </Form>
              <div className="rightnavbar d-flex flex-row ml-3">
                <div className="loginguest">
                  <p>Hey user/Guest</p>
                  <p href="">Sign up or Login</p>
                </div>
                <div>
                  <FaBell className="header-carticon" />
                  <span className="badge counter">
                    <span className="count">0</span>
                  </span>
                </div>
                <div>
                  <FaCartArrowDown className="header-carticon" />
                  <span className="badge counter">
                    <span className="count">0</span>
                  </span>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </>
  );
};

export default withRouter(Header);
