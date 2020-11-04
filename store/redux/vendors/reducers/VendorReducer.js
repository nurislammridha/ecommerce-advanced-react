import * as Types from "../../../Types";

const initialState = {
  vendors: [],
  loading: false,
  error: null,
};

const VendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_VENDORS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_VENDORS_LIST:
      return {
        ...state,
        vendors: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default VendorReducer;
