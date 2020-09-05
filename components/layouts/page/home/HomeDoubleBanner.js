import React, { Component } from 'react'
import { FaArrowRight } from "react-icons/fa";


const HomeDoubleBanner = ({ router }, props) => {
  
  return (
    <>
     
        <div className="HomeDoubleBanner bp">
            <div className="container">

                <div className="row">
                     <div className="col-lg-6">
                         <div className="bannerwrapper">
                             <img src="/images/default/banner-1.png" alt=""/>
                         </div>
                     </div>
                     <div className="col-lg-6">
                         <div className="bannerwrapper">
                             <img src="/images/default/banner-2.png" alt=""/>
                         </div>
                     </div>
                </div>

            </div>
        </div>
         
    </>
  );
};

export default HomeDoubleBanner;
 

