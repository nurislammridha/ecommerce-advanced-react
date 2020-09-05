import React from "react";
import MainLayout from "../components/layouts/Layout";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";
import ElegantChair from "../components/layouts/page/productdetails/ElegantChair";
import ProductDetailsDescrition from "../components/layouts/page/productdetails/ProductDetailsDescrition";
import ElegentChairRating from "../components/layouts/page/productdetails/ElegentChairRating";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <ElegantChair />
        <ProductDetailsDescrition />
        <ElegentChairRating />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}
