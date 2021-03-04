import React, { Component, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Card, Media } from "react-bootstrap";
import { getUserDataAction } from "../../../getUserData/Action/UserDataAction";
import { useDispatch, useSelector } from "react-redux";
import ProfileSideBar from "./profileSideBar";
const ProductProfile = ({ router }, props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserDataAction())
  }, [])
  const userData = useSelector((state) => state.UserDataReducer.userData);
  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>

            <div className="col-lg-7">
              <div className="row mt-5 mb-3 profileBox">
                <div className="col-xl-2 col-lg-2 col-md-2">
                  <div className="row">
                    <div className="col-12">
                    <i className="fas fa-user mr-2 img-thumbnail" style={{ fontSize: "100px" }}></i>
                  </div>
                  <p className="text-center ml-4 text-dark mt-2">Change</p>
                </div>
                {/* <div className=" gradientBox">
                    <img
                      className="rounded-circle bg-white"
                      src="/images/default/chair.png"
                    />
                    <p className="text-center text-white mt-2">Change</p>
                  </div> */}
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="bg-white p-3 pb-4">
                  <div className="registerInfo border-right float-left">
                    <h6 className="text-success pb-2">
                      User Information
                      </h6>
                    <p>{`${userData !== null && userData.first_name} ${userData !== null && userData.last_name}`}</p>
                      <p>username : {userData !== null && userData.username}</p>
                  </div>

                  <div className="registerInfo border-left pl-4 float-right">
                    <h6 className="text-danger pb-2"> Your address</h6>
                    <p>address</p>
                  </div>

                  <div className="registerInfo pl-4  float-left">
                    <h6 className="text-primary pb-2">
                      Contact Information
                      </h6>
                    <p>{userData !== null && userData.email}</p>
                    <p>{userData !== null && userData.phone_no}</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="myProfileAsset">
              <h1>My Assets</h1>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 myProfileCard">
                  <Card className="text-center ">
                    <Card.Body>
                      <Card.Text>0</Card.Text>
                      <Card.Title>Wallet</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 myProfileCard">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>0</Card.Text>
                      <Card.Title>Gift Cards</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 ">
                  <Card className="text-center">
                    <Card.Body>
                      <Card.Text>0</Card.Text>
                      <Card.Title>Vouchers</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <h5 className="mt-4 mb-4">My Recent Orders</h5>
              <div className="row bg-white myProfileTitle mb-2 py-2  rounded">
                <div className="float-left profileItem ">
                  <h6 className="text-center">Item</h6>
                </div>
                <div className="float-left profileItem one">
                  <h6 className="">Order No</h6>
                </div>
                <div className="float-left profileItem">
                  <h6 className="text-left">Order On</h6>
                </div>
                <div className="float-left profileItem two">
                  <h6 className="text-center">Total</h6>
                </div>
                <div className="float-left profileItem status ">
                  <h6 className="text-center">Status</h6>
                </div>
              </div>
              <div className="innerwishlist bg-white myProfileBox">
                <div className="wishsingleproduct shippingImg myProfileImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="shippmentBoxText myProfileText border-right">
                  <h5>#ORD 11221245</h5>
                </div>
                <div className="wishsingleproductIcon myProfileTime">
                  <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                </div>
                <div className="wishsingleproductIcon myProfilePrice border-left">
                  <p className="text-danger text-center">৳ 500</p>
                </div>
                <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                  <p className="text-primary text-center">Delivered</p>
                </div>

                <div className="border-left myProfilePriceBtn">
                  <button className="btn btn-outline-danger">
                    View details
                    </button>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
              <div className="innerwishlist bg-white myProfileBox mt-2">
                <div className="wishsingleproduct shippingImg myProfileImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="shippmentBoxText myProfileText border-right">
                  <h5>#ORD 11221245</h5>
                </div>
                <div className="wishsingleproductIcon myProfileTime">
                  <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                </div>
                <div className="wishsingleproductIcon myProfilePrice border-left">
                  <p className="text-danger text-center">৳ 500</p>
                </div>
                <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                  <p className="text-danger text-center">Pending</p>
                </div>

                <div className="border-left myProfilePriceBtn">
                  <button className="btn btn-outline-danger">
                    View details
                    </button>
                </div>
                <div className="clearfix"></div>
              </div>

              <h5 className="mt-4 mb-4">Partial payment/Draft</h5>
              <div className="row bg-white myProfileTitle mb-2 py-2  rounded">
                <div className="float-left profileItem ">
                  <h6 className="text-center">Item</h6>
                </div>
                <div className="float-left profileItem one">
                  <h6 className="">Order No</h6>
                </div>
                <div className="float-left profileItem">
                  <h6 className="text-left">Order On</h6>
                </div>
                <div className="float-left profileItem two">
                  <h6 className="text-center">Total</h6>
                </div>
                <div className="float-left profileItem status ">
                  <h6 className="text-center">Status</h6>
                </div>
              </div>
              <div className="innerwishlist bg-white myProfileBox mb-2">
                <div className="wishsingleproduct shippingImg myProfileImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="shippmentBoxText myProfileText border-right">
                  <h5>#ORD 11221245</h5>
                </div>
                <div className="wishsingleproductIcon myProfileTime">
                  <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                </div>
                <div className="wishsingleproductIcon myProfilePrice border-left">
                  <p className="text-danger text-center">৳ 5000000</p>
                </div>
                <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                  <p className="text-danger text-center">Payment pending</p>
                </div>

                <div className="border-left myProfilePriceBtn">
                  <button className="btn btn-outline-danger">
                    View details
                    </button>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
              <div className="innerwishlist bg-white myProfileBox">
                <div className="wishsingleproduct shippingImg myProfileImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="shippmentBoxText myProfileText border-right">
                  <h5>#ORD 11221245</h5>
                </div>
                <div className="wishsingleproductIcon myProfileTime">
                  <p className="text-center">Mon,Aug 28,20 10.26 AM</p>
                </div>
                <div className="wishsingleproductIcon myProfilePrice border-left">
                  <p className="text-danger text-center">৳ 500</p>
                </div>
                <div className="wishsingleproductIcon myProfileStatus border-right border-left ">
                  <p className="text-primary text-center">Delivered</p>
                </div>

                <div className="border-left myProfilePriceBtn">
                  <button className="btn btn-outline-danger">
                    View details
                    </button>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductProfile;
