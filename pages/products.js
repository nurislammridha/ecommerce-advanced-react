import React from "react";
import MainLayout from "../components/layouts/Layout";

import MultipleProducts from "../components/layouts/page/product/MultipleProducts";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <MultipleProducts />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}
