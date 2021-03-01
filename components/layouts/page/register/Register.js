import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import RegisterTwo from "./RegisterTwo"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ChangeRegisterInputField, RegisterFirstStep } from "../../../../store/actions/auth/RegisterAction";

// import Row from "react-bootstrap/Row";
const Register = ({ router }, props) => {
  const { register, handleSubmit, errors, setValue, watch } = useForm();
  const dispatch = useDispatch()
  const [stepNo, setStepNo] = useState(1)
  const registerInput = useSelector((state) => state.registerReducer.registerInput)
  const isLoading = useSelector((state) => state.registerReducer.isLoading)

  //handle change input 
  const handleChangeTextInput = (name, value) => {
    dispatch(ChangeRegisterInputField(name, value))
  }
  const handleRegisterFirstStep = (e) => {
    dispatch(RegisterFirstStep(registerInput, setStepNo))
  }

  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="Loginform">
                <h1>Create Account</h1>
                <Form
                  onSubmit={handleSubmit(handleRegisterFirstStep)}
                  method="post"
                  autoComplete="off"
                  encType="multipart/form-data"
                  autoSave="off">
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
                              ref={register({
                                required: true,
                                maxLength: 100,
                              })}
                            />
                            <div className="text-danger m-2">
                              {errors.first_name &&
                                errors.first_name.type === 'required' &&
                                "First name can't be blank!"}
                            </div>
                          </Col>
                          <Col>
                            <Form.Control
                              placeholder="Last name"
                              name="last_name"
                              value={registerInput.last_name}
                              onChange={(e) => handleChangeTextInput('last_name', e.target.value)}
                              ref={register({
                                required: true,
                                maxLength: 100,
                              })}
                            />
                            <div className="text-danger m-2">
                              {errors.last_name &&
                                errors.last_name.type === 'required' &&
                                "Last name can't be blank!"}
                            </div>
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
                          ref={register({
                            required: true,
                            maxLength: 100,
                          })}
                        />
                        <div className="text-danger m-2">
                          {errors.phone_no &&
                            errors.phone_no.type === 'required' &&
                            "Mobile number can't be blank!"}
                        </div>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Referral Code (Optional)</Form.Label>
                        <Form.Control type="test" placeholder="Maccaf" />
                      </Form.Group>
                      {
                        isLoading === true && (
                          <>

                            <Button disabled={true} variant="primary">
                              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Next
                            </Button>
                          </>
                        )
                      }
                      {
                        isLoading === false && (
                          <Button type="submit" variant="primary">
                            Next
                          </Button>
                        )
                      }
                    </>
                  }

                  {
                    stepNo === 2 &&
                    <>
                      <RegisterTwo setStepNo={setStepNo} handleChangeTextInput={handleChangeTextInput} />
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
