import * as Types from "../../../Types";

const initialState = {
  products: [],
  loading: false,
  error: null,
  filterProduct: {
    category: null,
    brand: null,
    min_price: null,
    max_price: null,
  },
  category: [],
  brands: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.GET_PRODUCTS:
      return {
        ...state,
        products: (action.payload.data !== null && typeof action.payload.data !== 'undefined') ? action.payload.data : [],
        loading: false,
      };
    //get category list data 
    case Types.GET_CATEGORIES_LIST:
      return {
        ...state,
        category: action.payload.data
      }
    case Types.GET_BRANDS_LIST_DATA:
      return {
        ...state,
        brands: action.payload.data
      }
    case Types.CHANGE_PRODUCT_FILTER:
      const filterProduct = { ...state.filterProduct }
      filterProduct[action.payload.name] = action.payload.value;
      return {
        ...state,
        filterProduct,
      }
    default:
      return {
        ...state,
      };
      break;
  }
};

export default ProductReducer;
