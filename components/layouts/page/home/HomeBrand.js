import React, { Component, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../../../store/redux/brands/actions/BrandAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";

const HomeBrand = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.brand.loading);
  const brands = useSelector((state) => state.brand.brands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

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

          {loading && (
            <LoadingSkelleton
              alignment="vertical"
              count={3}
              width={330}
              height={100}
            />
          )}

          <div className="row pt">
            {!loading && brands.map.length === 0 && (
              <div>No Brand Found !!</div>
            )}

            {brands.map.length > 0 && (
              <>
                {brands.map((brand, index) => (
                  <div className="col-xl-4" key={index}>
                    <div className="singleBrandBox">
                      <div className="brandImg">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}images/brands/${brand.image}`}
                          alt=""
                        />
                      </div>
                      <div className="brandTitle">
                        <h3>{brand.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* <div className="col-xl-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBrand;
