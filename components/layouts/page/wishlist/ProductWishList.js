import React, { Component } from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";

import Rater from "react-rater";

const ProductWishList = ({ router }, props) => {
  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <div className="sidebar card">
                <ul>
                  <li>
                    <a href="">My Profile</a>
                  </li>
                  <li>
                    <a href="">Account Setting</a>
                  </li>
                  <li>
                    <a href="">My Card</a>
                  </li>
                  <li>
                    <a href="">My Wish list</a>
                  </li>
                  <li>
                    <a href="">My Orders</a>
                  </li>
                  <li>
                    <a href="">My Wallet</a>
                  </li>
                  <li>
                    <a href="">My Gift card</a>
                  </li>
                  <li>
                    <a href="">My Vouchar</a>
                  </li>
                  <li>
                    <a href="">Notifications</a>
                  </li>
                  <li>
                    <a href="">Audience Pool</a>
                  </li>
                  <li>
                    <a href="">My Reviews</a>
                  </li>
                  <li>
                    <a href="">Refferal Programme</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle">
                <h1>My Wishlist</h1>
              </div>
              <div className="mt-4">
                <div className="innerwishlist">
                  <div className="wishsingleproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Seller: Seller shop name</h5>
                  </div>
                  <div className="wishsingleproductIcon">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="innerwishlist">
                  <div className="wishsingleproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Seller: Seller shop name</h5>
                  </div>
                  <div className="wishsingleproductIcon">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="innerwishlist">
                  <div className="wishsingleproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Seller: Seller shop name</h5>
                  </div>
                  <div className="wishsingleproductIcon">
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="innerwishlist">
                  <div className="wishsingleproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Seller: Seller shop name</h5>
                  </div>
                  <div className="wishsingleproductIcon">
                    <FavoriteIcon />
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

export default ProductWishList;
