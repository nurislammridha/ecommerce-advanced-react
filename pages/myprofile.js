import React from "react";
import MainLayout from "../components/layouts/Layout";

import ProductProfile from "../components/layouts/page/myprofile/ProductProfile";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <ProductProfile />
      </MainLayout>
    </>
  );
}
