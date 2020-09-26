import React from "react";
import MainLayout from "../components/layouts/Layout";

import MyCart from "../components/layouts/page/card/MyCart";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <MyCart />
      </MainLayout>
    </>
  );
}
