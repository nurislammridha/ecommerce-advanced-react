import * as Types from "../../../Types";
import axios from "axios";

export const fetchCarts = () => async (dispatch) => {
  dispatch({ type: Types.GET_CARTS_LOADING, payload: true });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}business`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_CARTS, payload: payloadData });
};
