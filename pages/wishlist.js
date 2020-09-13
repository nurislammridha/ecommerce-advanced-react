import React from "react";
import MainLayout from "../components/layouts/Layout";

import ProductWishList from "../components/layouts/page/wishlist/ProductWishList";
import Sidebar from "../components/layouts/Sidebar/Sidebar";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <ProductWishList />
        {/* <Sidebar /> */}
      </MainLayout>
    </>
  );
}
