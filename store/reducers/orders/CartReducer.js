import * as Types from "../../Types";

const initialState = {
  carts: [],
  products: [],
  loading: false,
  loading_add: false,
  loading_update: false,
  add_message: "",
  delete_message: "",
  error: null,
  cartProduct: {
    productID: null,
    productName: '',
    quantity: '',
    price: '',
    offerPrice: '',
    productImage: ''
  },
  // Place Order Part
  totalQuantity: 0,
  totalPrice: 0,
  shippingCost: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Types.POST_CARTS_LOADING:
    //   return {
    //     ...state,
    //     loading_add: action.payload,
    //     add_message: "Item Added to the cart successfully",
    //   };
    case Types.GET_CARTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.POST_CARTS_LOADING:
      return {
        ...state,
        cartProduct: {
          productID: null,
          productName: '',
          quantity: '',
          price: '',
          offerPrice: '',
          productImage: ''
        }
      };
    case Types.EMPTY_CART_MESSAGE:
      return {
        ...state,
        add_message: "",
      };

    case Types.EMPTY_CART_DELETE_MESSAGE:
      return {
        ...state,
        delete_message: "",
      };

    case Types.GET_CARTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_CARTS:
      return {
        ...state,
        carts: action.payload.carts,
        totalQuantity: calculateTotalQtyAndPrices(action.payload.carts).totalQuantity,
        totalPrice: calculateTotalQtyAndPrices(action.payload.carts).totalPrice,
        shippingCost: calculateTotalQtyAndPrices(action.payload.carts).shippingCost,
        products: action.payload.products,
        loading: false,
        errors: null,
      };

    case Types.POST_CARTS_DATA:
      return {
        ...state,
        carts: action.payload.carts,
        products: action.payload.products,
        loading_add: false,
        errors: null,
      };

    // case Types.UPDATE_CARTS_DATA:
    //   return {
    //     ...state,
    //     carts: action.payload.carts,
    //     products: action.payload.products,
    //     errors: null,
    //   };

    // case Types.DELETE_CARTS_DATA:
    //   return {
    //     ...state,
    //     carts: action.payload.carts,
    //     products: action.payload.products,
    //     errors: null,
    //     delete_message: "Cart Item has been deleted !",
    //   };

    default:
      return {
        ...state,
      };
      break;
  }
};

const calculateTotalQtyAndPrices = (carts) => {
  const response = {
    totalQuantity: 0,
    totalPrice: 0,
  }
  for (let i = 0; i < carts.length; i++) {
    response.totalQuantity += carts[i].quantity;
    response.totalPrice += (carts[i].offerPrice !== null && carts[i].price !== "" ? carts[i].quantity * carts[i].offerPrice : carts[i].quantity * carts[i].price);
    response.shippingCost = (response.totalPrice / 100) * 5;
  }
  return response;
}

export default CartReducer;
