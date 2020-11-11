import * as Types from "../../../Types";

const initialState = {
  brands: [],
  loading: false,
  error: null,
};

const BrandReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_BRANDS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_BRANDS_LIST:
      return {
        ...state,
        brands: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default BrandReducer;
