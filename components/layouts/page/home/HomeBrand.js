import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import LoadingSkelleton from "../../../skelleton/LoadingSkelleton";

const HomeBrand = ({ router }, props) => {
  return (
    <>
      <div className="HomeBrand bp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionTitle">
                <h2>Shop by Brand</h2>
              </div>
            </div>
            <div className="viewTopRight">
              <button className="viewButton storebutton">
                View all
                <FaArrowRight />
              </button>
            </div>
          </div>
          <LoadingSkelleton
            alignment="vertical"
            count={3}
            width={330}
            height={100}
          />
          <div className="row pt">
            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="singleBrandBox">
                <div className="brandImg">
                  <img src="/images/default/brand.png" alt="" />
                </div>
                <div className="brandTitle">
                  <h3>Our Product Categories</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBrand;
