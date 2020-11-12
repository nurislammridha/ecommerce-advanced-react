import React, { Component, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/redux/products/actions/ProductAction";
import LoadingSkelleton from "../../../skelleton/LoadingSkelleton";
import ProductMiniCard from "../product/ProductMiniCard";

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

          {loading && (
            <LoadingSkelleton
              alignment="vertical"
              count={6}
              width={215}
              height={250}
            />
          )}

          <div className="row">
            {!loading && products.length === 0 && (
              <div>No Product Found !!</div>
            )}

            {products.length > 0 &&
              products.map((product, index) => (
                <div className="col-xl-2 col-lg-3 col-6" key={index}>
                  <ProductMiniCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
