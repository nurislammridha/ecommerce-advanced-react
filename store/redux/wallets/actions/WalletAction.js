import * as Types from "../../../Types";
import axios from "axios";

export const fetchWallets = () => async (dispatch) => {
  dispatch({ type: Types.GET_WALLETS_LOADING, payload: true });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}business`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_WALLETS_LIST, payload: payloadData });
};
