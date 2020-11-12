import * as Types from "../../../Types";
import axios from "axios";
import { API_URL } from "../../../ApiEndpoint";

export const fetchProducts = () => async (dispatch) => {
  let payload = {
    data: [],
    loading: false,
    total: 0,
  };
  dispatch({ type: Types.GET_PRODUCTS_LOADING, payload: payload });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}get-items`;
  await axios.get(URL).then((res) => {
    payload = res.data;
    payload.data = res.data.data.data;
    dispatch({ type: Types.GET_PRODUCTS, payload: payload });
  });
};
