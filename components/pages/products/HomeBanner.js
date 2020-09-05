import React, { Component } from "react";

const HomeBanner = ({ router }, props) => {
  return (
    <>
      <div className="homebanner bp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="/images/default/banner.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
