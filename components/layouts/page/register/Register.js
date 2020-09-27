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
const Register = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="Loginform">
                <h1>Create Account</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>

                    <Row>
                      <Col>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mobile number</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter a valid mobile number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Referral Code (Optional)</Form.Label>
                    <Form.Control type="password" placeholder="Maccaf" />
                  </Form.Group>
                  <Link href="/">
                    <a>
                      {" "}
                      <Button variant="primary" type="submit">
                        Next
                      </Button>
                    </a>
                  </Link>

                  <div className="signform">
                    <div className="signinlink">
                      {" "}
                      <h3>Already have an account?</h3>
                    </div>
                    <div className="signinlink">
                      {" "}
                      <Link href="/">
                        <a>
                          <h4>Sign in</h4>
                        </a>
                      </Link>
                    </div>
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

export default Register;
