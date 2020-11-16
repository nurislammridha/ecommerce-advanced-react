import React, { Component, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import { Col, Card } from "react-bootstrap";

const FlashSell = (props) => {
  return (
    <>
      <div className="sliderCard-header flashsell">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card p-3">
                <div className="row flashSellButtonArea">
                  <div className="col-lg-8">
                    <div className="flashtitle selltitle">
                      <h2>Flash Sell</h2>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <button className="viewButton sellbutton">
                      View all
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left pt-2">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-lg-6">
              <div className="card p-3">
                <div className="row flashSellButtonArea">
                  <div className="col-lg-8">
                    <div className="flashtitle selltitle">
                      <h2>New User Offer</h2>
                    </div>
                  </div>
                  {/* <div className="col-lg-4"></div>s */}
                  <div className="col-lg-4">
                    <button className="viewButton sellbutton">
                      View all
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>

                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg mt-2">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded mt-1">0% Off</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="productImg ">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails flasdetails">
                      <div className="productTitle text-left pt-2">
                        <h3>Elegant Chair</h3>
                        <p className="pt-2">৳ 500 </p>
                      </div>
                      <div className="flashspan mt-2">
                        <span className="pl-2 pr-2 rounded">0% Off</span>
                      </div>
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

export default FlashSell;
