import React, { Component, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const accountsetting = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <div className="sidebar card">
                <ul>
                  <li>
                    <a href="">My Profile</a>
                  </li>
                  <li>
                    <a href="">Account Setting</a>
                  </li>
                  <li>
                    <a href="">My Card</a>
                  </li>
                  <li>
                    <a href="">My Wish list</a>
                  </li>
                  <li>
                    <a href="">My Orders</a>
                  </li>
                  <li>
                    <a href="">My Wallet</a>
                  </li>
                  <li>
                    <a href="">My Gift card</a>
                  </li>
                  <li>
                    <a href="">My Vouchar</a>
                  </li>
                  <li>
                    <a href="">Notifications</a>
                  </li>
                  <li>
                    <a href="">Audience Pool</a>
                  </li>
                  <li>
                    <a href="">My Reviews</a>
                  </li>
                  <li>
                    <a href="">Refferal Programme</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle mb-3">
                <h1>Edit and Update your Information</h1>
              </div>
              <div className="d-inline">
                <img className="d-inline" src="/images/default/chair.png" />
                <span>You can change your profile photo at anytime</span>
              </div>

              <Form>
                <Row>
                  <Col>
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="Edit First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Edit Last name" />
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-2">Email</Form.Label>
                    <Form.Control placeholder="Edit Email" />
                  </Col>
                  <Col>
                    <Form.Label className="mt-2">Contact Number</Form.Label>
                    <Form.Control placeholder="Phone number" />
                  </Col>
                  <Col></Col>
                </Row>
                <Form.Group className="accountTextarea mt-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Edit Address"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Type old password" />
                  </Col>
                  <Col>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control placeholder="Type new password" />
                  </Col>
                  <Col>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control placeholder="Type new password" />
                  </Col>
                </Row>
                <button className="btn btn-warning float-right text-white mt-3">
                  Save Changes
                </button>
                <div className="clearfix"></div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accountsetting;
