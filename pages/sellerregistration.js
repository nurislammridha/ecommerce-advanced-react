import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Card, Media } from "react-bootstrap";
const sellerregistration = ({ router }, props) => {
  return (
    <>
      <div className="sellerLoginHeader pt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-white font-weight-bold">Maccaf Seller</h2>
              <p className="text-white">Seller Hub</p>
            </div>
            <div className="col-lg-6">
              <div className="float-right pt-3">
                <Link href="/">
                  <a>
                    {" "}
                    <Button className="border-rounded text-white">
                      Back to Home
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="Sellerlogin pb pt-5">
        <div className="container">
          <div className="row bg-white pb-2">
            <div className="col-lg-6 ">
              <div className="Loginform sellerLoginForm">
                <h1 className="creatAccountText">Create Account </h1>
                <Form>
                  <h2 className="accountText">Your Account Type</h2>
                  <Form.Check
                    type="radio"
                    label="Business"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    className="d-inline"
                  />
                  <Form.Check
                    className="d-inline ml-5 "
                    type="radio"
                    label="Personal"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                  <div className="mb-3"></div>
                  <Form.Group controlId="formBasicEmail ">
                    <Form.Label>Mobile Number:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your valid and active mobile number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your vaild Email address"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your shop name"
                    />
                  </Form.Group>
                  <p className="text-center">
                    {" "}
                    By clicking "SIGN UP", I agree to Maccaf{" "}
                    <Link href="/">
                      <a className="text-warning">Terms & Conditions</a>
                    </Link>{" "}
                  </p>
                  <Link href="/">
                    <a>
                      {" "}
                      <Button
                        variant="warning"
                        type="submit"
                        className="text-white"
                      >
                        Sign up
                      </Button>
                    </a>
                  </Link>
                </Form>
              </div>
            </div>
            <div className="col-lg-4 ">
              <Card
                className="registrationBoxshadow"
                style={{ width: "32rem" }}
              >
                <Card.Body>
                  <Card.Title>Business Account</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Card.Text>
                  <Card.Title>Personal Account</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="sellerLoginFooter pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Maccaf Seller</h2>
              <p>Join us,sell products and make money</p>
            </div>
            <div className="col-lg-6">
              <div className="float-right">
                <h2 className="">Download App</h2>
                <img src="/images/default/playstore.png" alt="" />
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sellerregistration;
