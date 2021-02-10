import * as Types from "../../../Types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  let payload = {
    data: [],
    loading: false,
    total: 0,
  };
  dispatch({ type: Types.GET_PRODUCTS_LOADING, payload: payload });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}get-items`;
  await axios.get(URL).then((res) => {
    console.log('URL', URL);
    console.log('products', res.data);
    
    payload = res.data;
    payload.data = res.data.data.data;
    dispatch({ type: Types.GET_PRODUCTS, payload: payload });
  });
};

export const fetchProductBySlug = (slug) => async (dispatch) => {
  let payload = {
    data: {},
    loading: false
  };
  // dispatch({ type: Types.GET_PRODUCTS_DETAILS_LOADING, payload: payload });
  const URL = `${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${slug}`;

  return await axios.get(URL).then((res) => {
    payload = res.data;
    payload.data = res.data.data;
    return payload;
    dispatch({ type: Types.GET_PRODUCTS_BY_SLUG, payload: payload });
  });
};
