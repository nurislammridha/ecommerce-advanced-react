import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import CancelIcon from "@material-ui/icons/Cancel";

import { Checkbox } from "@material-ui/core";

const Ecart = ({ router }, props) => {
  return (
    <>
      <div className="homebanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="carttitle">
                <h1>Chart</h1>
              </div>
              <div className="cartselection">
                <div className="itemselection">
                  <h2>Please select item(s)</h2>
                  <p>
                    Availability and promotions will be<br></br> shown here
                  </p>
                </div>
              </div>
              <div className="cartselection cartitem">
                <div className="cartitem one">
                  <h2>SELECT ALL (4 ITEM(S))</h2>
                </div>

                <div className="cartitem two">
                  <h2>DELETE</h2>
                </div>
              </div>
              <div className="cartselection cartitem">
                <div className="cartitem one">
                  <h2>AKIJ PLASTIC SHOP</h2>
                </div>
              </div>
              <div className="cartinner">
                <div className="cartdetails">
                  <div className="cartimg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="carttext">
                    <h2>Elegant Chair</h2>
                    <h3> Brown Color</h3>
                  </div>
                </div>
                <CancelIcon />
                <NumericInput mobile className="form-control" />
                <Checkbox color="primary" />
                <div className="cartquantity">
                  {/* <div class="input-group cartquantity">
                        <input type="button" value="-" class="button-minus" data-field="quantity">
                        <input type="number" step="1" max="" value="100" name="quantity" class="quantity-field">
                        <input type="button" value="+" class="button-plus" data-field="quantity">
                      </div> */}
                </div>

                <div className="cartprice">
                  <h4>৳ 435.00</h4>
                </div>
              </div>
              <div className="cartinner">
                <div className="cartdetails">
                  <div className="cartimg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="carttext">
                    <h2>Elegant Chair</h2>
                    <h3> Brown Color</h3>
                  </div>
                </div>
                {/* <NumericInput onChange={(value) => console.log(value)} /> */}
                <div className="cartquantity">
                  {/* <div class="input-group cartquantity">
                        <input type="button" value="-" class="button-minus" data-field="quantity">
                        <input type="number" step="1" max="" value="100" name="quantity" class="quantity-field">
                        <input type="button" value="+" class="button-plus" data-field="quantity">
                      </div> */}
                </div>

                <div className="cartprice">
                  <h4>৳ 435.00</h4>
                </div>
              </div>
              <div className="cartinner">
                <div className="cartdetails">
                  <div className="cartimg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="carttext">
                    <h2>Elegant Chair</h2>
                    <h3> Brown Color</h3>
                  </div>
                </div>

                <div className="cartquantity">
                  {/* <div class="input-group cartquantity">
                        <input type="button" value="-" class="button-minus" data-field="quantity">
                        <input type="number" step="1" max="" value="100" name="quantity" class="quantity-field">
                        <input type="button" value="+" class="button-plus" data-field="quantity">
                      </div> */}
                </div>

                <div className="cartprice">
                  <h4>৳ 435.00</h4>
                </div>
              </div>
              <div className="cartinner">
                <div className="cartdetails">
                  <div className="cartimg">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="carttext">
                    <h2>Elegant Chair</h2>
                    <h3> Brown Color</h3>
                  </div>
                </div>

                <div className="cartquantity">
                  {/* <div class="input-group cartquantity">
                        <input type="button" value="-" class="button-minus" data-field="quantity">
                        <input type="number" step="1" max="" value="100" name="quantity" class="quantity-field">
                        <input type="button" value="+" class="button-plus" data-field="quantity">
                      </div> */}
                </div>

                <div className="cartprice">
                  <h4>৳ 435.00</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="promocodesection">
                <h1>Add Promo Code</h1>
                <div className="promocodesectionone">
                  <h1>Type</h1>
                </div>
                <div className="promocodesectiontwo">
                  <h1>ADD</h1>
                </div>
                <div className="promotionsummery">
                  <h1>Summary</h1>
                  <div className="orderProductDetails">
                    <div className="orderProduct">
                      <p>Price (0 items)</p>
                      <p>Delivery Charge</p>
                      <p>Total Price</p>
                    </div>
                    <div className="orderProductText">
                      <p>৳ 0.00</p>
                      <p>৳ 0.00</p>
                      <p>৳ 0.00</p>
                    </div>
                  </div>
                  <div className="continousdetails">
                    <div className="orderProduct one">
                      <p>CONTINUE SHOPPING</p>
                    </div>
                    <div className="orderProductText two">
                      <p>PLACE ORDER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecart;
