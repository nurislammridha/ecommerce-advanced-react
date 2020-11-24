import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Link from "next/link";
const sellerlogin = ({ router }, props) => {
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
          <div className="row bg-white pb-3">
            <div className="col-lg-6 "></div>
            <div className="col-lg-6 ">
              <div className="Loginform sellerLoginForm">
                <h1>
                  Please login with the seller account(Do not use the buyer
                  account)
                </h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Account</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email address,member ID or phone number"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Link href="/">
                    <a>
                      {" "}
                      <Button
                        variant="warning"
                        type="submit"
                        className="text-white"
                      >
                        Sign in
                      </Button>
                    </a>
                  </Link>
                </Form>
              </div>
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

export default sellerlogin;
