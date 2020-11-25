import * as Types from "../../../Types";
import axios from "axios";
import { API_URL } from "../../../ApiEndpoint";

export const fetchNotifications = () => async (dispatch) => {
  dispatch({ type: Types.GET_NOTIFICATIONS_LOADING, payload: true });
  const URL = `${API_URL}business`;

  const res = await axios.get(URL);
  const payloadData = {
    data: res.data.data,
  };
  dispatch({ type: Types.GET_NOTIFICATIONS_LIST, payload: payloadData });
};
