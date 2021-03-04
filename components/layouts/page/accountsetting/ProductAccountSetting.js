import React, { Component, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeUserUpdateInput, handleSetDataIntoInputField, updatedUserData } from "../../../../store/actions/user/UserAction";
import { getUserDataAction } from "../../../getUserData/Action/UserDataAction";
import ProfileSideBar from "../myprofile/profileSideBar";
const ProductAccountSetting = ({ router }, props) => {
  const { register, handleSubmit, errors, setValue, watch } = useForm();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataAction())
  }, [])
  const userData = useSelector((state) => state.UserDataReducer.userData);
  const userInputData = useSelector((state) => state.UserReducer.userInputData);
  const isLoading = useSelector((state) => state.UserReducer.isLoading);

  const handleChangeTextInput = (name, value) => {
    dispatch(changeUserUpdateInput(name, value))
  }
  const handleUpdatedUserData = () => {
    dispatch(updatedUserData(userInputData, userData))
  }
  useEffect(() => {
    dispatch(handleSetDataIntoInputField());
  }, [])
  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle accountSetting mb-3">
                <h1>Edit and Update your Information</h1>
              </div>
              <div className="d-inline">
                <img className="d-inline img-thumbnail" style={{ width: '125px' }} src="/images/default/chair.png" />
                <p className="accountText">
                  You can change your profile photo at anytime
                </p>
              </div>

              <Form
                onSubmit={handleSubmit(handleUpdatedUserData)}
                method="post"
                autoComplete="off"
                encType="multipart/form-data"
                autoSave="off"
              >
                <Row>
                  {/* <Col> */}
                  <div className="col-6">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      placeholder="Edit First name"
                      type="text"
                      // defaultValue={userData !== null && userData.first_name}
                      name="first_name"
                      value={userInputData && userInputData.first_name}
                      onChange={(e) => handleChangeTextInput('first_name', e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.first_name &&
                        errors.first_name.type === 'required' &&
                        "First name can't be empty!"}
                    </div>
                    {/* </Col> */}
                  </div>
                  <div className="col-6">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      placeholder="Edit Last name"
                      type="text"
                      name="last_name"
                      value={userInputData && userInputData.last_name}
                      onChange={(e) => handleChangeTextInput('last_name', e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.first_name &&
                        errors.last_name.type === 'required' &&
                        "Last name can't be empty!"}
                    </div>
                  </div>
                  {/* <Col></Col> */}
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="mt-2">Email</Form.Label>
                    <Form.Control
                      placeholder="Edit Email"
                      type="text"
                      name="email"
                      value={userInputData && userInputData.email}
                      onChange={(e) => handleChangeTextInput('email', e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.first_name &&
                        errors.email.type === 'required' &&
                        "Email can't be empty!"}
                    </div>
                  </Col>
                  <Col>
                    <Form.Label className="mt-2">Contact Number</Form.Label>
                    <Form.Control
                      placeholder="Phone number"
                      type="number"
                      name="phone_no"
                      value={userInputData && userInputData.phone_no}
                      onChange={(e) => handleChangeTextInput('phone_no', e.target.value)}
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <div className="text-danger m-2">
                      {errors.first_name &&
                        errors.phone_no.type === 'required' &&
                        "Phone number can't be empty!"}
                    </div>
                  </Col>
                  {/* <Col></Col> */}
                </Row>

                <div className=" col-12 accountTextarea mt-2 mb-1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Edit Address"
                    name="address"
                    value={userInputData && userInputData.address ? userInputData.address : ''}
                    onChange={(e) => handleChangeTextInput('address', e.target.value)}
                    ref={register({
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  <div className="text-danger m-2">
                    {errors.first_name &&
                      errors.address.type === 'required' &&
                      "Last name can't be empty!"}
                  </div>
                </div>

                {/* <Row>
                  <div className="col-xl-4 col-lg-4 col-6">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Type old password" />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-6">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control placeholder="Type new password" />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-6">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control placeholder="Type new password" />
                  </div>
                </Row> */}
                
                {
                  isLoading && (
                    <button type="submit" className="btn btn-warning float-right text-white mt-3">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...
                    </button>
                  )
                }
                {
                  !isLoading && (
                    <button type="submit" className="btn btn-warning float-right text-white mt-3">
                      Save Changes
                    </button>
                  )
                }
                <div className="clearfix"></div>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAccountSetting;
