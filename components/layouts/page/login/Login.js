import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { emptyDispatch, handleLoginInput, loginAction } from "../../../../store/actions/auth/LoginAction";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

const Login = () => {
  const dispatch = useDispatch();
  const loginInpiut = useSelector((state) => state.authReducer.loginInpiut);
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const isLogging = useSelector((state) => state.authReducer.isLogging);
  const { register, handleSubmit, errors, setValue } = useForm();

  const handleLoginInputChange = (name, value) => {
    dispatch(handleLoginInput(name, value));
  }

  const handleLogin = (e) => {
    dispatch(loginAction(loginInpiut));
    // e.preventDefault();
  }
  const router = useRouter()
  if (isLogging === true) {
    router.push('/myprofile')
    dispatch(emptyDispatch())
  }
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="Loginform">
                <h1>Login</h1>
                <form
                  onSubmit={handleSubmit(handleLogin)}
                  method="post"
                  autoComplete="off"
                  encType="multipart/form-data">

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email or phone number</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={loginInpiut && loginInpiut.email}
                      onChange={(e) => handleLoginInputChange('email', e.target.value)}
                      placeholder="Enter your register email or phone number"
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.email &&
                        errors.email.type === 'required' &&
                        "Please enter email or phone !"}
                    </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={loginInpiut && loginInpiut.password}
                      onChange={(e) => handleLoginInputChange('password', e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.password &&
                        errors.password.type === 'required' &&
                        "Please enter password !"}
                    </div>
                  </Form.Group>
                  {
                    !isLoading && (
                      <a>
                        {" "}
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </a>
                    )
                  }
                  {
                    isLoading && (
                      <a>
                        {" "}
                        <Button disabled={true} variant="primary" type="submit">
                          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Login
                        </Button>
                      </a>
                    )
                  }
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
