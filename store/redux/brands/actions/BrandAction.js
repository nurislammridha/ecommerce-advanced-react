import * as Types from "../../../Types";
import axios from "axios";

export const fetchBrands = () => async (dispatch) => {
  dispatch({ type: Types.GET_BRANDS_LOADING, payload: true });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}brands`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_BRANDS_LIST, payload: payloadData });
};
