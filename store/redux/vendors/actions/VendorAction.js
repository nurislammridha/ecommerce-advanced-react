import * as Types from "../../../Types";
import axios from "axios";
import { API_URL } from "../../../ApiEndpoint";

export const fetchVendors = () => async (dispatch) => {
  dispatch({ type: Types.GET_VENDORS_LOADING, payload: true });
  const URL = `${API_URL}business`;
  console.log("URL", URL);

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_VENDORS_LIST, payload: payloadData });
};
