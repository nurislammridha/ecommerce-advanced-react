import * as Types from "../../../Types";

const initialState = {
  productWishes: [],
  loading: false,
  error: null,
};

const ProductWishReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_WISHES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_PRODUCT_WISHES_LIST:
      return {
        ...state,
        productWishes: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default ProductWishReducer;
