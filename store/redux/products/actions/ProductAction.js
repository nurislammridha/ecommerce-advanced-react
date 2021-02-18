import * as Types from "../../../Types";
import axios from "axios";
import store from "../../../Store";

export const fetchProducts = () => async (dispatch) => {
  let payload = {
    data: [],
    loading: false,
    total: 0,
  };
  dispatch({ type: Types.GET_PRODUCTS_LOADING, payload: payload });
  let URL = `${process.env.NEXT_PUBLIC_API_URL}get-items?search=`;
  
  const filterProduct = store.getState().product.filterProduct;
  const { category, brand, min_price, max_price } = filterProduct;
  
  if(category !== null){
    URL +=  `&category=${category.id}`
  }
  
  if(brand !== null){
    URL +=  `&brand=${brand.id}`
  }
  if(min_price !== null){
    URL +=  `&min_price=${min_price}`
  }
  if(max_price !== null){
    URL +=  `&max_price=${max_price}`
  }
  await axios.get(URL).then((res) => {
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


// get category list 
export const GetCategoryList = () => async (dispatch) => {
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}categories`)
    .then((res) => {
      let data = res.data;
      dispatch({ type: Types.GET_CATEGORIES_LIST, payload: data });
    });
};
// get brands list 
export const getBrandList = () => async (dispatch) => {
  axios.get(`${process.env.NEXT_PUBLIC_API_URL}brands`)
    .then((res) => {
      let data = res.data;
      dispatch({ type: Types.GET_BRANDS_LIST_DATA, payload: data });
    });
};
//handle change product list change
export const handleChangeCategoryFilter = (name, value) => async (dispatch) => {
  const filterProduct = {
    name: name,
    value: value,
  }
  if (name === "category") {
    filterProduct.name = "category",
    filterProduct.value = value
  }
  if (name === "brand") {
    filterProduct.name = "brand",
    filterProduct.value = value
  }
  dispatch({ type: Types.CHANGE_PRODUCT_FILTER, payload: filterProduct });
  dispatch(fetchProducts());
}