import React from "react";
import MainLayout from "../components/layouts/Layout";

import ProductAccountSetting from "../components/layouts/page/accountsetting/ProductAccountSetting";

export default function Home(props) {
  console.log('object :>> ');
  return (
    <>
      <MainLayout>
        <ProductAccountSetting />
      </MainLayout>
    </>
  );
}
