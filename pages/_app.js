import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import Store from "../store/Store";

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "../assets/scss/library/slick-carousel/slick-theme.min.css";
// import "../assets/scss/library/slick-carousel/slick.min.css";

import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";

import "../assets/scss/main.css";
import "../assets/scss/responsive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={Store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
