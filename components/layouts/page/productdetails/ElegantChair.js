import React, { Component } from "react";
import { FaCartPlus, FaGooglePlay, FaUser } from "react-icons/fa";
import Rater from "react-rater";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Link from "next/link";
import { Dropdown,DropdownButton } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import PinDropIcon from '@material-ui/icons/PinDrop';

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
                <span className="float-right">  
                {/* <Link href="/"> */}
               <ShareIcon/>
                  {/* </Link>  */}
                {/* <Link href="/"> */}
                <FavoriteIcon/>
              
                {/* </Link>  */}
                
                  </span>
                  
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
                  <h2 className="text-warning">৳ 590</h2>
                  <h4 className="text-danger">৳ 1200</h4><span className="text-dark">-38%</span>
                </div>
             {/* <div className="Promotion">
               <h6 className="float-left">Promotions</h6>
               <h6 className="float-right">Spend ৳ 2000 get ৳ 200 off
               <DropdownButton  title="Dropdown button">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </h6>
             </div> */}

                <div className="chaircolor">
                  <h2>Color:</h2>
                  <h2>Quantity:      
                    {/* <button className=" btn btn-light increment bg-light border rounded-circle text-dark ml-5"><AddIcon/></button>
                   <span className="colorType  border rounded text-dark">1</span>
                   <button className=" btn btn-light increment bg-light border rounded-circle text-dark ml-1"><AddIcon/></button> */}
                  </h2>
                </div>
                <div className="stock cart">
                  <span>Buy Now</span>
                </div>
                <div className="stock cart two">
                  <span>Add to cart</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 deliverysection bg-light p-3">
              <div className="chairDeliverydetails  ">
                <h2>Delivery Options</h2>
                <div className="chairDeliveryoption three"></div>
                <div className="chairDeliveryoption">
                  <p><PinDropIcon/>Dhaka,Dhaka - South,Wari</p><br></br>
                  <img src="/images/default/homedelivery.png" alt="" />
                   <p>Home Delivery</p><br></br>
                  <p className="mt-n3 deliveryDays pl-4">3-5 days</p><br></br>
                  <img src="/images/default/cashdelivery.png" alt="" />  <p>Cash on Delivery Available</p>
                </div>
                {/* <div className="chairDeliveryoption two">
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
                </div> */}
                <div className="clearfix"></div>
                <div className="border-bottom"></div>
                <div className="clearfix"></div>
                <div className="chairDeliveryoption returnWarranty mt-2">
                  <h6>Return & Warranty</h6>
                  <img src="/images/default/homedelivery.png" alt="" />
                   <p>7 Days Returns</p><br></br>
                   <p className="mt-n3 deliveryDays pl-4">Change of mind is not applicable</p><br></br>
                   <img src="/images/default/homedelivery.png" alt="" />
                   <p>Warranty not available</p><br></br>
                </div>
                <div className="clearfix"></div>
                <div className="clearfix"></div>
              <div className="mt-2 bg-light">
                <h6>Sold by</h6>
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
             
              <div className="clearfix"></div>
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
