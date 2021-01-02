import * as Types from "../../../Types";

const initialState = {
  carts: [],
  loading: false,
  error: null,
  cartProduct: {
    productID: null,
    productName: '',
    quantity: '',
    price: '',
    offerPrice: '',
    productImage: ''
  }
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case Types.GET_CARTS:
      return {
        ...state,
        carts: action.payload.carts,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default CartReducer;
