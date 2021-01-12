import React, { Component, useState, useEffect } from "react";
// import NumericInput from "react-numeric-input";
// import CancelIcon from "@material-ui/icons/Cancel";
// import { Checkbox } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";
import {
  getCartsAction,
  updateCartQtyAction,
} from "../../../../store/actions/orders/CartAction";
import NumericInput from "react-numeric-input";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";

const MyCart = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.loading);
  const carts = useSelector((state) => state.cart.carts);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const increaseQuantity = (id, quantity) => {
    carts.find((item) => item.productID === id && setQuantity((quantity += 1)));
    dispatch(updateCartQtyAction(id, (quantity += 1)));
  };
  // const increaseQuantity = (id, quantity) => {
  //   carts.find(
  //     (item) => item.productID === id && setQuantity((item.quantity += 1))
  //   );
  // };

  const decrementQunatity = (id, quantity) => {
    carts.find(
      (item) =>
        item.productID === id &&
        item.quantity > 1 &&
        setQuantity((item.quantity -= 1))
    );
  };
  //update cart quantity
  // const updateProductQuantity = (id, quantity) => {
  //   dispatch(updateCartQtyAction(id, quantity));
  // };

  return (
    <>
      <div className="wishbanner pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wishlisttitle">
                <h1>My Cart</h1>
              </div>

              {/* {!loading && carts.map.length === 0 && (
                <div>No Cart Found !!</div>
              )} */}

              {loading && (
                <LoadingSkelleton
                  alignment="vertical"
                  count={1}
                  width={730}
                  height={200}
                />
              )}

              {carts.map((item) => (
                <div className="mt-2 p-3">
                  <div className="innerwishlist productorderdetailsbox cartlistsection">
                    <div className="singleorderproduct">
                      <img
                        className="img-fluid w-75 m-2"
                        src={item.productImage}
                      />
                    </div>
                    <div className="wishsingleproductText mycarttext">
                      <h1>{item.productName}</h1>
                      <h2>Seller: Shop no</h2>
                      <h4>৳ {item.price}</h4>
                      <h2>
                        Quantity :
                        <button
                          className="btn btn-light quantity-btn decrement bg-light border rounded-circle text-dark ml-3"
                          onClick={(id, quantity) =>
                            decrementQunatity(item.productID, quantity)
                          }
                        >
                          {" "}
                          <Remove />
                        </button>
                        <span className="colorType border rounded text-dark">
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-light quantity-btn  increment bg-light border rounded-circle text-dark ml-2"
                          onClick={(id, quantity) =>
                            increaseQuantity(item.productID, quantity)
                          }
                        >
                          <AddIcon />
                        </button>
                      </h2>
                    </div>
                    {/* <div className="mycartquantity">
                        <NumericInput mobile className="form-control" />
                      </div> */}

                    <div className="orderquantity mycarttext">
                      <h2>REMOVE</h2>
                    </div>
                    <div className="mycartquantity one">
                      <FavoriteIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="wishlisttitle">
                <h1>Price Details</h1>
              </div>

              <div className="promocodesection mt-4">
                <div className="promotionsummery one">
                  <div className="orderProductDetails cartline">
                    <div className="orderProduct">
                      <p>Price (0 items)</p>
                      <p>Number of Items</p>
                      <p>Total Price</p>
                    </div>
                    <div className="orderProductText">
                      <p>৳ 500</p>
                      <p> 2</p>
                      <p>৳ 500</p>
                    </div>
                  </div>

                  <div className="mycartplace">
                    <button>PLACE ORDER</button>
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

export default MyCart;
