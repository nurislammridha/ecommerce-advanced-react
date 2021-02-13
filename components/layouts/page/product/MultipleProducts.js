import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import Link from "next/link";


import { Form } from "react-bootstrap";
import ProductList from "./ProductList";
const MultipleProducts = ({ router }, props) => {
  return (
    <>
      <div className="HomeProduct bp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="filterSideBar ml-3">
                <div className="sidebar-section">
                  <h6>Category</h6>
                  <Form>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Men" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Women" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Men" />
                    </Form.Group>
                  </Form>
                  <Link href="/">View More</Link>
                </div>

                <div className="sidebar-section">
                  <h6>Brand</h6>
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

                </div>

                <div className="sidebar-section">
                  <h6>Price</h6>
                  <div className="row">
                    <div className="col-5 m-0">
                      <input type="text" className="form-control" placeholder="Min" />
                    </div>
                    <div className="col-5 m-0">
                      <input type="text" className="form-control" placeholder="Max" />
                    </div>
                    <div className="col-2 m-0">
                      <i className="btn btn-warning fa fa-search"></i>
                    </div>
                  </div>
                  <Link href="/">View More</Link>

                </div>

                <div className="sidebar-section">
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

                </div>

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
