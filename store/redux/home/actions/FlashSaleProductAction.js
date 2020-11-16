import * as Types from "../../../Types";
import axios from "axios";

export const fetchFlashSaleProducts = async (orderBy = "asc") => {
  let payload = {
    products: [],
    loading: false,
  };
  const URL = `${process.env.NEXT_PUBLIC_API_URL}get-flash-sale-items/${orderBy}`;
  await axios.get(URL).then((res) => {
    payload = res.data;
    payload.loading = false;
    payload.products = res.data.data.products;
  });
  return payload;
};
