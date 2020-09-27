import React from "react";
import MainLayout from "../components/layouts/Layout";

import Login from "../components/layouts/page/login/Login";

export default function Home(props) {
  return (
    <>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}
