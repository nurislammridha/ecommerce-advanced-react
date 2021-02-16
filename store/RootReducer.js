import { combineReducers } from "redux";
import VendorReducer from "./redux/vendors/reducers/VendorReducer";
import ProductReducer from "./redux/products/reducers/ProductReducer";
import ProductDetailReducer from "./redux/products/reducers/ProductDetailReducer";
import BrandReducer from "./redux/brands/reducers/BrandReducer";
import ProductWish from "./redux/productWishes/reducers/ProductWishReducer";
import MyOrder from "./redux/myOrders/reducers/MyOrderReducer";
import Wallet from "./redux/wallets/reducers/WalletReducer";
// import SliderReducer from "./sliders/SliderReducer";
// import AuthReducer from "./auth/AuthReducer";
import Notification from "./redux/notifications/reducers/NotificationReducer";
import RegisterReducer from "./reducers/auth/RegisterReducer";
import CartReducer from "./reducers/orders/CartReducer";
import OrderReducer from "./reducers/orders/OrderReducer";
import AuthReducer from "./reducers/auth/AuthReducer";
import VendorRegisterReducer from "./reducers/auth/VendorRegisterReducer";
import MenuReducer from "../components/layouts/Header/_redux/MenuReducer/MenuReducer";
import HomeCarouselReducer from "../pages/api/_redux/reducer/reducer";

export default combineReducers({
  product: ProductReducer,
  productDetail: ProductDetailReducer,
  // slider: SliderReducer,
  cart: CartReducer,
  OrderReducer: OrderReducer,
  authReducer: AuthReducer,
  vendor: VendorReducer,
  brand: BrandReducer,
  productWish: ProductWish,
  myOrder: MyOrder,
  wallet: Wallet,
  notification: Notification,
  registerReducer: RegisterReducer,
  VendorRegisterReducer: VendorRegisterReducer,
  MenuReducer: MenuReducer,
  HomeCarouselReducer: HomeCarouselReducer,
});
