import React from "react";
import MainLayout from "../components/layouts/Layout";
import VendorRegister from "../components/layouts/page/register/VendorRegister";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <VendorRegister />
      </MainLayout>
    </>
  );
}