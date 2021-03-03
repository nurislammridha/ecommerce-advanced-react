import React from "react";
import FooterMain from "./Footer/Footer";

import Header from "./Header/Header";

const ProfileLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <FooterMain />
    </>
  );
};

export default ProfileLayout;
