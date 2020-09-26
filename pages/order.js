import React from "react";
import MainLayout from "../components/layouts/Layout";

import MyOrder from "../components/layouts/page/order/MyOrder";
import Sidebar from "../components/layouts/Sidebar/Sidebar";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <MyOrder />
        {/* <Sidebar /> */}
      </MainLayout>
    </>
  );
}
