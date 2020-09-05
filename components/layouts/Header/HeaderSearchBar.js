import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "next/router";
import { FaCartPlus , FaGooglePlay , FaUser } from "react-icons/fa";
 

 


const HeaderSearchBar = ({ router }, props) => {
  

  return (
    <>
       
       <div className="headerSearchBar">
           <div className="container">
              <div className="row">

                  <div className="col-xl-2">
                      <div className="logoHere">
                          <h2>Ecommerce</h2>
                      </div>
                  </div>

                  <div className="col-xl-7">

                  </div>

                  <div className="col-xl-3">
                      <div className="cartOption">
                          <div className="cart">
                              <FaCartPlus/>
                          </div>
                          <div className="userSetting">
                              <FaUser/>
                          </div>
                      </div>
                      <div className="googlePlay">
                          <a href=""><img src="/images/default/playstore.png" /></a>
                      </div>
                  </div>

              </div>
           </div>
       </div>

    </>
  );
};

export default withRouter(HeaderSearchBar);
