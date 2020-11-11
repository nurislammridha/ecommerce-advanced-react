import React, { Component, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/redux/products/actions/ProductAction";
import LoadingSkelleton from "../../../skelleton/LoadingSkelleton";

const HomeProduct = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="HomeProduct bp">
        <div className="container-fluid">

        {loading && (
          <LoadingSkelleton
            alignment="vertical"
            count={6}
            width={215}
            height={250}
          />
        )}

          <div className="row">
            {!loading && products.map.length === 0 && (
              <div>No Product Found !!</div>
            )}

            {products.map.length > 0 && (
              <>
                {products.map((product, index) => (
                  <div className="col-xl-2 col-lg-3 col-6" key={index}>
                    <div className="singleProduct singleproductborder">
                      <div className="productImg">
                        <img src="/images/default/chair.png" />
                      </div>
                      <div className="productDetails">
                        <div className="productTitle">
                          <h3>Elegant Chair</h3>
                          <p>Brown Color</p>
                        </div>
                        <div className="productPrice pt-2">
                          <h4>৳ 590.00</h4>
                          <p>৳ 590.00</p>
                        </div>
                        <div className="ratepoint">
                          <Rater total={5} rating={2} /> <span> (1) </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-6">
              <div className="singleProduct singleproductborder">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                    <p>Brown Color</p>
                  </div>
                  <div className="productPrice pt-2">
                    <h4>৳ 590.00</h4>
                    <p>৳ 590.00</p>
                  </div>
                  <div className="ratepoint">
                    <Rater total={5} rating={2} /> <span> (1) </span>
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

export default HomeProduct;
