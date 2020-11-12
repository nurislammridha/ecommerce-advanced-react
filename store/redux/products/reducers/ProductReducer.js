import * as Types from "../../../Types";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_PRODUCTS:
      console.log("action.payload.data", action.payload.data);
      return {
        ...state,
        products: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default ProductReducer;
