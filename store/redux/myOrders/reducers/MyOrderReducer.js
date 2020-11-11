import * as Types from "../../../Types";

const initialState = {
  myOrders: [],
  loading: false,
  error: null,
};

const MyOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_MY_ORDERS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_MY_ORDERS_LIST:
      return {
        ...state,
        myOrders: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default MyOrderReducer;
