import * as Types from "../../../Types";

const initialState = {
  carts: [],
  loading: false,
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CARTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_CARTS:
      return {
        ...state,
        carts: action.payload.data,
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
