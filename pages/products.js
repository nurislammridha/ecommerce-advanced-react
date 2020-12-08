import React from "react";
import MainLayout from "../components/layouts/Layout";

import MultipleProducts from "../components/layouts/page/product/MultipleProducts";
import HomeFeaturList from "../components/layouts/page/home/HomeFeaturList";
import Sidebar from "../components/layouts/Sidebar/Sidebar";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
    <Head>
      <title>
        All Products | Ecommerce Store
      </title>
      <meta name="description" content="All Products | Ecommerce Store" />
    </Head>

      <MainLayout>
        <MultipleProducts />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}
