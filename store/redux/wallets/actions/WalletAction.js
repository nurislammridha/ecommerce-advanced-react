import * as Types from "../../../Types";
import axios from "axios";
import { API_URL } from "../../../ApiEndpoint";

export const fetchWallets = () => async (dispatch) => {
  dispatch({ type: Types.GET_WALLETS_LOADING, payload: true });
  const URL = `${API_URL}business`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_WALLETS_LIST, payload: payloadData });
};
