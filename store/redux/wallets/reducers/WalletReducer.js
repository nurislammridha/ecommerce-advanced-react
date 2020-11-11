import * as Types from "../../../Types";

const initialState = {
  wallets: [],
  loading: false,
  error: null,
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_WALLETS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_WALLETS_LIST:
      return {
        ...state,
        wallets: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default WalletReducer;
