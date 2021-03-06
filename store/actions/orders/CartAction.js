import { useState } from "react";
import * as Types from "../../Types";

// export const addToCartAction = (product, quantity = 1) => async (dispatch) => {
//   dispatch({ type: Types.POST_CARTS_LOADING, payload: true });
//   addToCartData(product, quantity);
//   const payloadData = getCartData();

//   setTimeout(() => {
//     dispatch({ type: Types.POST_CARTS_DATA, payload: payloadData });
//   }, 100);
// };

export const addToCartAction = (cartProduct, id) => async (dispatch) => {
  const previousCart = getCartData().carts;
  let carts = [...previousCart];
  if (carts.find((data) => data.productID === id)) {
    alert("This product already added in your carts!");
  } else {
    carts.push(cartProduct);
    localStorage.setItem("carts", JSON.stringify(carts));
  }
  dispatch({ type: Types.POST_CARTS_LOADING, payload: carts });
  dispatch(getCartsAction())
};

export const getCartsAction = () => async (dispatch) => {
  dispatch({ type: Types.GET_CARTS_LOADING, payload: true });
  const data = getCartData();
  dispatch({ type: Types.GET_CARTS, payload: data });
};

//update cart products quantity
export const updateCartQtyAction = (product_id, quantity) => async (dispatch) => {
  const cartStorageData = localStorage.getItem("carts");
  let data = {
    carts: [],
    products: [],
  };

  if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
    data.carts = JSON.parse(cartStorageData);
    data.products = data.carts.products;

    let findProducts = data.carts.filter(
      (item) => item.productID === product_id
    );
    if (findProducts.length) {
      const getProductIndex = data.carts.indexOf(findProducts[0]);
      findProducts[0].quantity = quantity;
      data.carts[getProductIndex] = findProducts[0];
      localStorage.setItem("carts", JSON.stringify(data.carts));
    }
  }
  dispatch({ type: Types.UPDATE_CARTS_DATA, payload: getCartData() });
  dispatch(getCartsAction());
};

//delete cart product
export const deleteCartItemAction = (product_id) => async (dispatch) => {
  const cartStorageData = localStorage.getItem("carts");
  let data = {
    carts: [],
    products: [],
  };

  if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
    data.carts = JSON.parse(cartStorageData);
    data.products = data.carts.products;

    let findProducts = data.carts.filter((item) => item.productID !== product_id); 

    localStorage.setItem("carts", JSON.stringify(findProducts));
  }
  dispatch({ type: Types.DELETE_CARTS_DATA, payload: getCartData() });
  dispatch(getCartsAction())
};

export const postEmptyCartMessage = () => async (dispatch) => {
  dispatch({ type: Types.EMPTY_CART_MESSAGE, payload: true });
};

export const postEmptyCartDeleteMessage = () => async (dispatch) => {
  dispatch({ type: Types.EMPTY_CART_DELETE_MESSAGE, payload: true });
};

// function addToCartData(product, quantity) {
//   // Find product first where product_id = this product_id and
//   // then if exist increment that totalQuantity or add totalCount


//   let products = [];
//   const cartStorageData = localStorage.getItem("carts");
//   if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
//     let carts = JSON.parse(cartStorageData);
//     if (carts.products.length > 0) {
//       const findProducts = carts.products.filter(function (x) {
//         return x.id === product.id;
//       });
//       if (findProducts.length > 0) {
//         const getProductIndex = carts.products.indexOf(findProducts[0]);
//         findProducts[0].qty = findProducts[0].qty + quantity;
//         carts.products[getProductIndex] = findProducts[0];
//         carts = {
//           products: carts.products,
//         };
//       } else {
//         product.qty = 1;
//         carts.products.push(product);
//         carts = {
//           products: carts.products,
//         };
//       }
//       localStorage.setItem("carts", JSON.stringify(carts));
//     } else {
//       // Add as a first item in carts
//       product.qty = 1;
//       products.push(product);
//       let carts = {
//         products: products,
//       };
//       localStorage.setItem("carts", JSON.stringify(carts));
//     }
//   } else {
//     // Add as a first item in carts
//     product.qty = 1;
//     products.push(product);
//     let carts = {
//       products: products,
//     };
//     localStorage.setItem("carts", JSON.stringify(carts));
//   }
// }

function getCartData() {
  const cartStorageData = localStorage.getItem("carts");
  let data = {
    carts: [],
    products: [],
  };

  if (typeof cartStorageData !== "undefined" && cartStorageData !== null) {
    data.carts = JSON.parse(cartStorageData);
    data.products = data.carts.products;
  }
  return data;
}
