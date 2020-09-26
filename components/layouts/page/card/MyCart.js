import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import CancelIcon from "@material-ui/icons/Cancel";
import { Checkbox } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const MyCart = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wishlisttitle">
                <h1>My Cart</h1>
              </div>

              <div className="mt-4">
                <div className="innerwishlist productorderdetailsbox cartlistsection">
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText mycarttext">
                    <h1>Product title with link</h1>
                    <h2>Seller: Shop no</h2>
                    <h4>৳ 500</h4>
                  </div>
                  {/* <div className="mycartquantity">
                    <NumericInput mobile className="form-control" />
                  </div> */}

                  <div className="orderquantity mycarttext">
                    <h2>REMOVE</h2>
                  </div>
                  <div className="mycartquantity one">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="innerwishlist productorderdetailsbox cartlistsection">
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText mycarttext">
                    <h1>Product title with link</h1>
                    <h2>Seller: Shop no</h2>
                    <h4>৳ 500</h4>
                  </div>
                  {/* <div className="mycartquantity">
                    <NumericInput mobile className="form-control" />
                  </div> */}

                  <div className="orderquantity mycarttext">
                    <h2>REMOVE</h2>
                  </div>
                  <div className="mycartquantity one">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wishlisttitle">
                <h1>Price Details</h1>
              </div>

              <div className="promocodesection mt-4">
                <div className="promotionsummery one">
                  <div className="orderProductDetails cartline">
                    <div className="orderProduct">
                      <p>Price (0 items)</p>
                      <p>Number of Items</p>
                      <p>Total Price</p>
                    </div>
                    <div className="orderProductText">
                      <p>৳ 500</p>
                      <p> 2</p>
                      <p>৳ 500</p>
                    </div>
                  </div>

                  <div className="mycartplace">
                    <button>PLACE ORDER</button>
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

export default MyCart;
