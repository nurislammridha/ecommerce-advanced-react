import { combineReducers } from "redux";
import VendorReducer from "./redux/vendors/reducers/VendorReducer";
import ProductReducer from "./redux/products/reducers/ProductReducer";
import BrandReducer from "./redux/brands/reducers/BrandReducer";
import ProductWish from "./redux/productWishes/reducers/ProductWishReducer";
import MyOrder from "./redux/myOrders/reducers/MyOrderReducer";
// import SliderReducer from "./sliders/SliderReducer";
// import CartReducer from "./orders/CartReducer";
// import AuthReducer from "./auth/AuthReducer";

export default combineReducers({
  product: ProductReducer,
  // slider: SliderReducer,
  // cart: CartReducer,
  // auth: AuthReducer,
  vendor: VendorReducer,
  brand: BrandReducer,
  productWish: ProductWish,
  myOrder: MyOrder,
});
