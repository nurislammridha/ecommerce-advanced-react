import * as Types from "../../../Types";

const initialState = {
  loading: false,
  productDetail: null
};

const ProductDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_DETAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_PRODUCTS_BY_SLUG:
      return {
        ...state,
        productDetail: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default ProductDetailReducer;
