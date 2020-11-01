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
import ReactMegaMenu from "react-mega-menu";

const Header = ({ router }, props) => {
  const headerCategoryData = [
    {
      label: "Category1",
      key: "Category1",
      items: "Category1 content",
    },
    {
      label: "Category2",
      key: "Category2",
      items: "Category2 content",
    },
    {
      label: "Category3",
      key: "Category3",
      items: "Category3 content",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <Navbar>
            <Navbar.Brand href="#home">
              <img src="/images/logos/logo-white.png" />
              <span className="logo-bottom-text">#UnboxHappiness</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="header-category mr-3">
                {/* <NavDropdown title="Category" id="basic-nav-dropdown"> */}
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                {/* </NavDropdown> */}
                <div>
                  <ReactMegaMenu
                    tolerance={50} // optional, defaults to 100
                    direction={"LEFT"} // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
                    styleConfig={{
                      menuProps: {
                        style: {
                          height: "20em",
                          width: "10em",
                          padding: "2px",
                          margin: "0",
                        },
                      },
                      contentProps: {
                        style: {
                          width: "10em",
                          padding: "2px",
                          background: "#fff",
                          color: "#000",
                          zIndex: 10000,
                        },
                      },
                      menuItemProps: {
                        style: {
                          padding: "2px",
                          height: "2em",
                          color: "#000",
                        },
                      },
                      menuItemSelectedProps: {
                        style: {
                          padding: "2px",
                          height: "2em",
                          backgroundColor: "#eee",
                        },
                      },
                      containerProps: {
                        style: {
                          padding: "2px",
                          backgroundColor: "#fff",
                        },
                      },
                    }}
                    data={headerCategoryData} // array of data to be rendered
                  />
                </div>
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
