import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'next/router';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Menu = ({ router }, props) => {
  return (
    <>
      <div className="headerBottom">
        <div class="container">
          <div class="row">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              className="navigation"
            >
              <Nav.Item>
                <Nav.Link href="/home">Brand</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Sitemap</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Gift card</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Sitemap</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">First Purchase offer</Nav.Link>
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
