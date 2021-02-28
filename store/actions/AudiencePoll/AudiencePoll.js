import * as Types from "../../Types";
import Axios from "axios";

export const getAudienceData = () => (dispatch) => {
  const responseList = {
    status: false,
    isLoading: true,
    pollList: []
  }
  dispatch({ type: Types.GET_AUDIENCE_POLL, payload: responseList });
  Axios.get(`${process.env.NEXT_PUBLIC_API_URL}polls`)
    .then((res) => {
      if (res.data.status) {
        responseList.status = res.data.status;
        responseList.pollList = res.data.data;
        responseList.isLoading = false;
        dispatch({ type: Types.GET_AUDIENCE_POLL, payload: responseList })
      }
    })
}