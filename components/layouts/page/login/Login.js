import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Login = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="Loginform">
                <h1>Login</h1>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email or phone number</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your register email or phone number"
                    />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <h5>Forget Password?</h5>
                  <h6>New to Maccaf</h6>

                  <button className="createbtn" type="submit">
                    Create an account
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
