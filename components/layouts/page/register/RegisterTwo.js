import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { customerRegister } from "../../../../store/actions/auth/RegisterAction";
// import Row from "react-bootstrap/Row";
const RegisterStepTwo = (props) => {
  const { handleChangeTextInput } = props;
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch()
  const registerInput = useSelector((state) => state.registerReducer.registerInput)
  // final customer register 
  const customerRegisterAction = (e) => {
    dispatch(customerRegister(registerInput));
    e.preventDefault();
  }
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Type OTP</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your one time password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Minimum 6 characters with a number and letter"
          name="password"
          value={registerInput.password}
          onChange={(e) => handleChangeTextInput('password', e.target.value)}
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Please re-type password again"
          name="password_confirmation"
          value={registerInput.password_confirmation}
          onChange={(e) => handleChangeTextInput('password_confirmation', e.target.value)}
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
      </Form.Group>
      <Link href="/">
        <a>
          {" "}
          <Button variant="primary" type="submit" onClick={(e)=> customerRegisterAction(e)}>
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
        </Link> and <Link href="/">
          <a>
            {"   "}
            <span>Privacy Policy</span>
          </a>
        </Link>
      </div>

    </>
  );
};

export default RegisterStepTwo;
