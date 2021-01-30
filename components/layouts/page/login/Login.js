import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginInput } from "../../../../store/actions/auth/LoginAction";
const Login = ({ router }, props) => {
  const dispatch = useDispatch();
  const loginInpiut = useSelector((state) => state.authReducer.loginInpiut);

  console.log('loginInpiut :>> ', loginInpiut);

  const handleLoginInputChange = (name, value) => {
    dispatch(handleLoginInput(name, value))
  }
  const handleLogin = (e) => {
    
  }
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="Loginform">
                <h1>Login</h1>
                <Form autoComplete="off">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email or phone number</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={loginInpiut.email}
                      onChange={(e) => handleLoginInputChange('email', e.target.value)}
                      placeholder="Enter your register email or phone number"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={loginInpiut.password}
                      onChange={(e) => handleLoginInputChange('password', e.target.value)}
                    />
                  </Form.Group>
                  <Link href="/">
                    <a>
                      {" "}
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <h5>Forget Password?</h5>
                    </a>
                  </Link>
                  <h6>New to Maccaf</h6>

                  <Link href="/register">
                    <a>
                      {" "}
                      <button className="createbtn" type="submit">
                        Create an account
                      </button>
                    </a>
                  </Link>
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
