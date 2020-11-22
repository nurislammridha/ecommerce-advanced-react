import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import CancelIcon from "@material-ui/icons/Cancel";
import MainLayout from "../components/layouts/Layout";
import { Checkbox } from "@material-ui/core";

const placeorder = ({ router }, props) => {
  return (
    <>
      <MainLayout>
        <div className="homebanner pb bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div class="card mt-5">
                  <div class="card-body">
                    <h5 class="card-title">Shipping Address</h5>
                    <form>
                      <div className="row">
                        <div className="col">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your or Receiver name"
                          />
                        </div>
                        <div className="col">
                          <label>Contact Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>
                      <div className="row mt-3 mb-3">
                        <div className="col">
                          <label>Shipping address</label>
                          <textarea
                            className="form-control"
                            placeholder="Type your full address"
                          ></textarea>
                        </div>
                        <div className="col">
                          <label>Email</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email address (optional)"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="promocodesection priceDetailsHeading py-2 px-3 mt-5 mb-2">
                  <h1>Price Detail</h1>
                </div>
                <div className="placeOrderSummery bg-white p-3">
                  <div className="float-left">
                    <p>Price </p>
                    <p>Number of Items</p>
                    <p>Shipping cost</p>
                  </div>
                  <div className="float-right">
                    <p>৳ 0.00</p>
                    <p>৳ 0.00</p>
                    <p>৳ 0.00</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="border-top pt-1">
                    <p className="float-left">Total Price</p>
                    <p className="float-right">৳ 2300.00</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="proceedBtn">
                    <button className="btn btn-warning text-white pb-2">
                      PROCEED
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shippmentDetails">
              <h1>Shippment Details</h1>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default placeorder;
