import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyOrders } from "../../../../store/redux/myOrders/actions/MyOrderAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import ProfileSideBar from "../myprofile/profileSideBar";

const MyOrder = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.myOrder.loading);
  const myOrders = useSelector((state) => state.myOrder.myOrders);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, []);

  return (
    <>
      <div className="wishbanner pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 offset-lg-1">
              <ProfileSideBar />
            </div>

            <div className="col-lg-7">
              <div className="wishlisttitle">
                <h1>My Orders</h1>
              </div>

              {!loading && myOrders.map.length === 0 && (
                <div>No Order Found !!</div>
              )}

              {loading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={850}
                  height={200}
                />
              )}

              {myOrders.map.length > 0 && (
                <>
                  {myOrders.map((myOrder, index) => (
                    <div className="mt-4">
                      <div className="innerwishlist productorderdetailsbox">
                        <div className="orderboxDetails">
                          <div className="ordercode">
                            <h2>#ORDERNO012345</h2>
                          </div>
                          <div className="ordercode one">
                            <h2>View Details</h2>
                          </div>
                        </div>
                        <div className="clear-fix"></div>


                        <div className="singleorderproduct">
                          <img src="/images/default/chair.png" />
                        </div>
                        <div className="wishsingleproductText orderproducttext">
                          <h1>Product title with link</h1>
                          <h4>৳ 500</h4>

                          <h5>Order On:</h5>
                        </div>
                        <div className="orderquantity">
                          <h2>Qty</h2>
                          <h3>1</h3>
                        </div>
                        <div className="orderquantity">
                          <h2>Payment Type</h2>
                          <h3 className="cod-text">COD</h3>
                        </div>
                        <div className="clear-fix"></div>
                        <div className="orderstatus ">
                          <div className="singlestatus">
                            <h2 className="order-status">
                              Order status:<span> Payment Pending</span>
                            </h2>
                          </div>
                          <div className="singlestatus two">
                            <h2>Total Amount: ৳ 500 </h2>
                          </div>
                        </div>
                        <div className="clear-fix"></div>
                      </div>
                    </div>
                  ))}
                </>
              )}
              {/*  */}
              <div className="mt-2">
                <div className="innerwishlist productorderdetailsbox">
                  <div className="orderboxDetails">
                    <div className="ordercode">
                      <h2>#ORDERNO012345</h2>
                    </div>
                    <div className="ordercode one">
                      <h2>View Details</h2>
                    </div>
                  </div>
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText orderproducttext">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Order On:</h5>
                  </div>
                  <div className="orderquantity">
                    <h2>Qty</h2>
                    <h3>1</h3>
                  </div>
                  <div className="orderquantity">
                    <h2>Payment Type</h2>
                    <h3>COD</h3>
                  </div>

                  <div className="orderstatus">
                    <div className="singlestatus">
                      <h2>
                        {/* Order status:<span> Payment Pending</span> */}
                      </h2>
                    </div>
                    <div className="singlestatus two processing">
                      <h2>Total Amount: ৳ 500 </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="innerwishlist productorderdetailsbox">
                  <div className="orderboxDetails">
                    <div className="ordercode">
                      <h2>#ORDERNO012345</h2>
                    </div>
                    <div className="ordercode one">
                      <h2>View Details</h2>
                    </div>
                  </div>
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText orderproducttext">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Order On:</h5>
                  </div>
                  <div className="orderquantity">
                    <h2>Qty</h2>
                    <h3>1</h3>
                  </div>
                  <div className="orderquantity">
                    <h2>Payment Type</h2>
                    <h3>COD</h3>
                  </div>

                  <div className="orderstatus">
                    <div className="singlestatus ">
                      <h2>
                        Order status:<span> Your order on processing</span>
                      </h2>
                    </div>
                    <div className="singlestatus two">
                      <h2>Total Amount: ৳ 500 </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="mt-2">
                <div className="innerwishlist productorderdetailsbox">
                  <div className="orderboxDetails">
                    <div className="ordercode">
                      <h2>#ORDERNO012345</h2>
                    </div>
                    <div className="ordercode one">
                      <h2>View Details</h2>
                    </div>
                  </div>
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText orderproducttext">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Order On:</h5>
                  </div>
                  <div className="orderquantity">
                    <h2>Qty</h2>
                    <h3>1</h3>
                  </div>
                  <div className="orderquantity">
                    <h2>Payment Type</h2>
                    <h3>COD</h3>
                  </div>

                  <div className="orderstatus">
                    <div className="singlestatus shipping">
                      <h2>
                        Order status:<span> Your order ready for shipping</span>
                      </h2>
                    </div>
                    <div className="singlestatus two">
                      <h2>Total Amount: ৳ 500 </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="innerwishlist productorderdetailsbox">
                  <div className="orderboxDetails">
                    <div className="ordercode">
                      <h2>#ORDERNO012345</h2>
                    </div>
                    <div className="ordercode one">
                      <h2>View Details</h2>
                    </div>
                  </div>
                  <div className="singleorderproduct">
                    <img src="/images/default/chair.png" />
                  </div>
                  <div className="wishsingleproductText orderproducttext">
                    <h1>Product title with link</h1>
                    <h4>৳ 500</h4>

                    <h5>Order On:</h5>
                  </div>
                  <div className="orderquantity">
                    <h2>Qty</h2>
                    <h3>1</h3>
                  </div>
                  <div className="orderquantity">
                    <h2>Payment Type</h2>
                    <h3>COD</h3>
                  </div>

                  <div className="orderstatus">
                    <div className="singlestatus delivered">
                      <h2>
                        Order status:<span> Delivered</span>
                      </h2>
                    </div>
                    <div className="singlestatus two">
                      <h2>Total Amount: ৳ 500 </h2>
                    </div>
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

export default MyOrder;
