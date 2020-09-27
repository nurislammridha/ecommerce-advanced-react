import React, { Component } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
const RegisterTwo = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="Loginform">
                <h1>Create Account</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Type OTP</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your one time password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Minimum 6 characters with a number and letter"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Please re-type password again"
                    />
                  </Form.Group>
                  <Link href="/">
                    <a>
                      {" "}
                      <Button variant="primary" type="submit">
                        Sign up
                      </Button>
                    </a>
                  </Link>
                  <div className="formcondition">
                    <span>By clicking 'SIGN UP', I agree with Maccaf's </span>
                    <Link href="/">
                      <a>
                        {" "}
                        <span>Terms of Use</span>{" "}
                      </a>
                    </Link>
                    and
                    <Link href="/">
                      <a>
                        {"   "}
                        <span>Privacy Policy</span>
                      </a>
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterTwo;
