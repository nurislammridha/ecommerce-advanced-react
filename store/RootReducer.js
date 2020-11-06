import { combineReducers } from "redux";
import VendorReducer from "./redux/vendors/reducers/VendorReducer";
import ProductReducer from "./redux/products/reducers/ProductReducer";
// import SliderReducer from "./sliders/SliderReducer";
// import CartReducer from "./orders/CartReducer";
// import AuthReducer from "./auth/AuthReducer";

export default combineReducers({
  product: ProductReducer,
  // slider: SliderReducer,
  // cart: CartReducer,
  // auth: AuthReducer,
  vendor: VendorReducer,
});
