import React, { Component } from "react";
import { FaCartPlus, FaGooglePlay, FaUser } from "react-icons/fa";
import Rater from "react-rater";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ElegantChair = ({ router }, props) => {
  return (
    <>
      <div className="homebanner bp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="elegentchairmenu">
                {/* <ul>
                  <li> Akij Plastics</li>
                  <li>Chair </li>
                  <li> Chair Elegant Chair wave rose wood</li>
                </ul> */}
                <Breadcrumb>
                  <Breadcrumb.Item href="#"> Akij Plastics</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Chair
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    Chair Elegant Chair wave rose wood
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="singlechair">
                <img src="/images/default/singlechair.png" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chairdetails">
                <h1>Elegant Chair-Wave- Rose Wood</h1>
                <div className="review">
                  <Rater total={5} rating={2} /> <span> 58 Ratings </span>
                </div>
                <div className="stock">
                  <span>Brand: AKIJ PLASTICS LTD.</span>
                </div>
                <div className="Chairinstock">
                  <span>In Stock</span>
                </div>
                <div className="Chairinstock icon">
                  <FaCartPlus />
                  <FaCartPlus />
                </div>
                <div className="chairdetailstext">
                  <h2>৳ 590</h2>
                </div>

                <div className="chaircolor">
                  <h2>Color:</h2>
                  <h2>Quantity:</h2>
                </div>
                <div className="stock cart">
                  <span>Buy Now</span>
                </div>
                <div className="stock cart two">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 deliverysection">
              <div className="chairDeliverydetails">
                <h2>Delivery Options</h2>
                <div className="chairDeliveryoption three"></div>
                <div className="chairDeliveryoption">
                  <p>Dhaka,Dhaka - South,Wari</p>
                  <p>Home Delivery</p>
                  <p>Cash on Delivery Available</p>
                </div>
                <div className="chairDeliveryoption two">
                  <p>Edit</p>
                  <p>৳ 245</p>
                </div>
                <div className="elegentchairestore">
                  <h3>Store by</h3>
                  <div className="elegentstoreImg">
                    <img src="/images/default/store1.png" />
                  </div>
                  <div className="elegentstoreImg two">
                    <h5>Akij Plastics Ltd</h5>
                    <p>Flagship Store</p>
                    <Rater total={5} rating={2} />
                  </div>
                  <div className="elegentstoreImg three">
                    <img src="/images/default/playstore.png" />
                  </div>
                </div>
                <div className="elegentrating">
                  <div className="elegentsinglerating">
                    <h6>88%</h6>
                    <p>Positive Seller Ratings</p>
                  </div>
                  <div className="elegentsinglerating two">
                    <h6>41%</h6>
                    <p>Ship on Time</p>
                  </div>
                  <div className="elegentsinglerating">
                    <h6>43%</h6>
                    <p>Chat Response Rate</p>
                  </div>
                </div>
              </div>
              <div className="elegentpayment">
                <div className="elegentpaymenttext">
                  <p>Payment:</p>
                </div>
                <div className="elegentpaymenttext one">
                  <img src="/images/default/payment-gateway.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="elegentsinglechair">
              <img src="/images/default/chair.png" />
            </div>
            <div className="elegentsinglechair two">
              <img src="/images/default/chair2.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElegantChair;
