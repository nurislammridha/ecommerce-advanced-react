import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import HeaderTop from "./HeaderTop";
import HeaderSearchBar from "./HeaderSearchBar";
import {
  // Dropdown,
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
import MainMenu from "./Menu";

import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import "rc-menu/assets/index.css";

function handleSelect(info) {
  console.log("selected ", info);
}

function handleDeselect(info) {
  console.log("deselect ", info);
}

const titleRight = <span>Electronics</span>;
const titleRight1 = <span>Smartphone</span>;
const titleRight2 = <span>sub menu 2</span>;
const titleRight3 = <span>sub menu 3</span>;

const leftMenu = (
  <Menu
    multiple
    onSelect={handleSelect}
    onDeselect={handleDeselect}
    defaultSelectedKeys={["2", "1-1"]}
  >
    <SubMenu title={titleRight} key="1">
      <MenuItem key="1-1">0-1</MenuItem>
      <MenuItem key="1-2">0-2</MenuItem>
    </SubMenu>
    <MenuItem key="3">outer</MenuItem>
    <SubMenu title={titleRight1} key="4">
      <MenuItem key="4-1">inner inner</MenuItem>
      <Divider />
      <SubMenu key="4-2" title={titleRight2}>
        <MenuItem key="4-2-1">inn</MenuItem>
        <SubMenu title={titleRight3} key="4-2-2">
          <MenuItem key="4-2-2-1">inner inner</MenuItem>
          <MenuItem key="4-2-2-2">inner inner2</MenuItem>
        </SubMenu>
      </SubMenu>
    </SubMenu>
    <MenuItem disabled key="disabled">
      disabled
    </MenuItem>
    <MenuItem key="4-3">outer3</MenuItem>
  </Menu>
);

const Header = ({ router }, props) => {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <Navbar>
            <Link href="/" className="text-white">
              <Navbar.Brand href="/">
                <img src="/images/logos/logo-white.png" />
                <span className="logo-bottom-text">#UnboxHappiness</span>
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="header-category mr-3">
                <NavDropdown title="Category" id="basic-nav-dropdown">
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
                  <div className="menu-div-category">{leftMenu}</div>
                </NavDropdown>
              </Nav>

              <Form className="search">
                <FormControl type="text" placeholder="Search" />
              </Form>
              <div className="rightnavbar d-flex flex-row ml-3">
                <div className="loginguest">
                  <p>Hey user/Guest</p>
                  <Link href="/login">
                    <span className="text-white pointer">Sign up or Login</span>
                  </Link>
                </div>
                <div>
                  <Link href="/notification">
                    <FaBell className="header-carticon pointer" />
                  </Link>

                  <span className="badge counter pointer">
                    <span className="count">0</span>
                  </span>
                </div>
                <div>
                  <Link href="/cart">
                    <FaCartArrowDown className="header-carticon pointer" />
                  </Link>
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
        <MainMenu />
      </div>
    </>
  );
};

export default withRouter(Header);
