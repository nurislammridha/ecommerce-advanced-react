import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";

const HomeStroe = ({ router }, props) => {
  return (
    <>
      <div className="HomeBrand ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionTitle">
                <h2>Shop by Stores</h2>
              </div>
            </div>
            <div className="viewTopRight">
              <button className="viewButton brandbutton">
                View all
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="row pt storepadding">
            <div className="singleStoreImg">
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
              <div className="StoreImg">
                <img src="/images/default/logo1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStroe;
