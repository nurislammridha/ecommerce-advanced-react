import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import Link from "next/link";


import {Form} from "react-bootstrap";
const MultipleProducts = ({ router }, props) => {
  return (
    <>
      <div className="HomeProduct bp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <div className="filterSideBar ml-3">
              <div className="Category">
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
                <div className="Brand mt-3">
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
                <div className="Type  mt-3">
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
                <div className="Rating  mt-3 mb-2">
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
              <div className="row multiproductdetails">
                {/* <div className="col-lg-2"></div> */}
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3">
                  <div className="singleProduct singleproductborder">
                    <div className="productImg">
                      <img src="/images/default/chair.png" />
                    </div>
                    <div className="productDetails">
                      <div className="productTitle multiproducttitle">
                        <h3>Spa Water</h3>
                        <p>500 ml PET</p>
                      </div>
                      <div className="productPrice multiproductprice">
                        <h4>৳13.00</h4>
                      </div>
                      <div className="ratepoint multiproductrating">
                        <Rater total={5} rating={2} /> <span> (2) </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleProducts;
