import React from "react";
import MainLayout from "../components/layouts/Layout";

import Ecart from "../components/layouts/page/ecommercecart/Ecart";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <Ecart />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}
