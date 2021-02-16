import React, { Component, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import Link from "next/link";


import { Form } from "react-bootstrap";
import ProductList from "./ProductList";
import { GetCategoryList, getBrandList, handleChangeCategoryFilter } from "../../../../store/redux/products/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
const MultipleProducts = ({ router }, props) => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.product.category);
  const brands = useSelector((state) => state.product.brands);
  const filterProduct = useSelector((state) => state.product.filterProduct);
  useEffect(() => {
    dispatch(GetCategoryList())
    dispatch(getBrandList())
  }, []);

  const handleChangeProductFilter = (name, value, e) => {
    dispatch(handleChangeCategoryFilter(name, value));
  }
  return (
    <>
      <div className="HomeProduct bp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="filterSideBar ml-3">
                <div className="sidebar-section">
                  <h6>Category</h6>
                  {
                    category && category.length > 0 && category.map((item, index) => (
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          checked={(filterProduct.category !== null) ? (filterProduct.category.id === item.id) ? true : false : false}
                          type="checkbox" label={item.name}
                          name={item.name}
                          onChange={(e) => {
                            if (filterProduct.category !== null) {
                              if (filterProduct.category.id === item.id) {
                                handleChangeProductFilter("category", null, e)
                              } else {
                                handleChangeProductFilter("category", item, e)
                              }
                            } else {
                              handleChangeProductFilter("category", item, e)
                            }
                          }}
                        />
                      </Form.Group>

                    ))
                  }
                </div>

                <div className="sidebar-section">
                  <h6>Brand</h6>
                  {
                    brands && brands.length > 0 && brands.map((item, index) => (
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={item.name}
                          name={item.name}
                          checked={(filterProduct.brand !== null) ? (filterProduct.brand.id === item.id) ? true : false : false}
                          onChange={(e) => {
                            if (filterProduct.brand !== null) {
                              if (filterProduct.brand.id === item.id) {
                                handleChangeProductFilter("brand", null, e)
                              } else {
                                handleChangeProductFilter("brand", item, e)
                              }
                            } else {
                              handleChangeProductFilter("brand", item, e)
                            }
                          }}
                        />
                      </Form.Group>

                    ))
                  }
                </div>

                <div className="sidebar-section">
                  <h6>Price</h6>
                  <div className="row">
                    <div className="col-5 m-0">
                      <input type="text" className="form-control" placeholder="Min"
                        onChange={(e) => handleChangeProductFilter('min_price', e.target.value)}
                      />
                    </div>
                    <div className="col-5 m-0">
                      <input type="text" className="form-control" placeholder="Max"
                        onChange={(e) => handleChangeProductFilter('max_price', e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <Link href="/">View More</Link> */}

                </div>

                {/* <div className="sidebar-section">
                  <h6>Type</h6>
                  <Form>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Richman" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Lubnan" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Cats eye" />
                    </Form.Group>
                  </Form>
                  <Link href="/">View More</Link>

                </div> */}

                <div className="sidebar-section">
                  <h6>Rating</h6>


                  <Rater total={5} rating={2} /><br></br>

                  <Rater total={5} rating={2} /><br></br>
                  <Rater total={5} rating={2} /><br></br>
                  <div className="ratingiew">
                    <Link href="/">View More</Link>
                  </div>



                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleProducts;
