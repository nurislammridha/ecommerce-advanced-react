import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import RegisterTwo from "./RegisterTwo"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ChangeRegisterInputField, handleRegisterFirstStep } from "../../../../store/actions/auth/RegisterAction";

// import Row from "react-bootstrap/Row";
const Register = ({ router }, props) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, errors } = useForm();
  const [stepNo, setStepNo] = useState(1)
  const registerInput = useSelector((state) => state.registerReducer.registerInput)

  //handle change input 
  const handleChangeTextInput = (name, value) => {
    dispatch(ChangeRegisterInputField(name, value))
  }
  const handleRegisterStepOne = (e) => {
    dispatch(handleRegisterFirstStep(registerInput, setStepNo))
    e.preventDefault()
  }

  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="Loginform">
                <h1>Create Account</h1>
                <Form>
                  {
                    stepNo === 1 &&
                    <>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              placeholder="First name"
                              name="first_name"
                              value={registerInput.first_name}
                              onChange={(e) => handleChangeTextInput('first_name', e.target.value)}
                              ref={register({ required: true })}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              placeholder="Last name"
                              name="last_name"
                              value={registerInput.last_name}
                              onChange={(e) => handleChangeTextInput('last_name', e.target.value)}
                              ref={register({ required: true })}
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter a valid mobile number"
                          name="phone_no"
                          value={registerInput.phone_no}
                          onChange={(e) => handleChangeTextInput('phone_no', e.target.value)}
                          ref={register({ required: true })}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Referral Code (Optional)</Form.Label>
                        <Form.Control type="test" placeholder="Maccaf" />
                      </Form.Group>
                      <Button onClick={(e) => handleRegisterStepOne(e)} variant="primary">
                        Next
                      </Button>
                    </>
                  }

                  {
                    stepNo === 2 &&
                    <>
                      <RegisterTwo handleChangeTextInput={handleChangeTextInput} stepNo={stepNo} setStepNo={setStepNo} />
                    </>
                  }
                  {/* <a onClick={() => setStepNo(2)}>
                      {" "}
                      <Button variant="primary" type="submit">
                        Next
                      </Button>
                    </a> */}

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
