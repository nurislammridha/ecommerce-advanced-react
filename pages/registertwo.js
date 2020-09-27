import React from "react";
import MainLayout from "../components/layouts/Layout";

import RegisterTwo from "../components/layouts/page/register/RegisterTwo";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <RegisterTwo />
      </MainLayout>
    </>
  );
}
