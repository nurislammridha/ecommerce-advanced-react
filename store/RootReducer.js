import { combineReducers } from "redux";
import VendorReducer from "./redux/vendors/reducers/VendorReducer";
import ProductReducer from "./redux/products/reducers/ProductReducer";
import ProductDetailReducer from "./redux/products/reducers/ProductDetailReducer";
import BrandReducer from "./redux/brands/reducers/BrandReducer";
import ProductWish from "./redux/productWishes/reducers/ProductWishReducer";
import MyOrder from "./redux/myOrders/reducers/MyOrderReducer";
import Wallet from "./redux/wallets/reducers/WalletReducer";
// import SliderReducer from "./sliders/SliderReducer";
import CartReducer from "./redux/carts/reducers/CartReducer";
// import AuthReducer from "./auth/AuthReducer";
import Notification from "./redux/notifications/reducers/NotificationReducer";

export default combineReducers({
  product: ProductReducer,
  productDetail: ProductDetailReducer,
  // slider: SliderReducer,
  cart: CartReducer,
  // auth: AuthReducer,
  vendor: VendorReducer,
  brand: BrandReducer,
  productWish: ProductWish,
  myOrder: MyOrder,
  wallet: Wallet,
  notification: Notification,
});
