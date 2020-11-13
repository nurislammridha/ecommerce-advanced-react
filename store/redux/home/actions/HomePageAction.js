import * as Types from "../../../Types";
import axios from "axios";

export const fetchHomePageProducts = async (no) => {
  let payload = {
    products: [],
    category: null,
    loading: false,
    total: 0,
  };
  const URL = `${process.env.NEXT_PUBLIC_API_URL}get-category-products/${no}`;
  await axios.get(URL).then((res) => {
    payload = res.data;
    payload.loading = false;
    payload.category = res.data.data.category;
    payload.products = res.data.data.products;
  });
  return payload;
};
