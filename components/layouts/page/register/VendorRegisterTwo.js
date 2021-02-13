import React, { useRef } from "react";
import { Button, Spinner } from "react-bootstrap";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ChangeRegisterInputField, vendorRegister } from "../../../../store/actions/auth/VendorRegisterAction";
// import Row from "react-bootstrap/Row";
const VendorRegisterTwo = ({ setStepNo }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleChangeTextInput = (name, value) => {
    console.log('name', name);
    console.log('value', value);
    dispatch(ChangeRegisterInputField(name, value))
  }

  const dispatch = useDispatch()
  const registerInput = useSelector((state) => state.VendorRegisterReducer.registerInput);
  const isLoading = useSelector((state) => state.VendorRegisterReducer.isLoading)

  // final customer register 
  const handleRegister = async (e) => {
    dispatch(vendorRegister(registerInput));
  }
  return (
    <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Type OTP</Form.Label>
        <Form.Control
          type="text"
          name="otp"
          onChange={(e) => handleChangeTextInput('otp', e.target.value)}
          placeholder="Enter your one time password"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Minimum 6 characters with a number and letter"
          name="password"
          // value={registerInput.password}
          onChange={(e) => handleChangeTextInput('password', e.target.value)}
          ref={register({
            required: true,
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        {errors.password && (errors.password.required && <p className="text-danger">{errors.password.message}</p>)}
        {errors.password && <p className="text-danger">{errors.password.message}</p>}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Please re-type password again"
          name="password_confirmation"
          // value={registerInput.password_confirmation}
          onChange={(e) => handleChangeTextInput('password_confirmation', e.target.value)}
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation.message}</p>}
      </Form.Group>

      <div className="d-flex">
        <Button variant="primary" className="mr-2 btn-secondary" onClick={(e) => setStepNo(1)}>
          Back
         </Button>
        {
          isLoading === true && (
            <>

              <Button disabled={true} variant="primary">
                <Spinner animation="border" role="status"> </Spinner> Submitting...
             </Button>
            </>
          )
        }
        {
          isLoading === false && (
            <Button type="submit" variant="primary" onClick={handleSubmit(handleRegister)} >
              SIGN UP
            </Button>
          )
        }
      </div>

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

export default VendorRegisterTwo;
