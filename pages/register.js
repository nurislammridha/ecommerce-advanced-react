import React from "react";
import MainLayout from "../components/layouts/Layout";

import Register from "../components/layouts/page/register/Register";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <Register />
      </MainLayout>
    </>
  );
}
