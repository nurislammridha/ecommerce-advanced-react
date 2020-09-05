import React, { Component } from 'react'
import { FaArrowRight } from "react-icons/fa";
import Rater from 'react-rater'
 

const HomeFeaturList = ({ router }, props) => {
  
    

  return (
    <>
     
        <div className="HomeProduct pb">
            <div className="container">
                
                <div className="row">
  
                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f1.png" />
                             </div>
                             <h3> Money Back Guarantee </h3>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f2.png" />
                             </div>
                             <h3> Top-Rated Sellers </h3>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f3.png" />
                             </div>
                             <h3> Safe Payment </h3>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f4.png" />
                             </div>
                             <h3> Shop with Confidence </h3>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f5.png" />
                             </div>
                             <h3> 24/7 Help Center </h3>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3">
                        <div className="featureList">
                             <div className="iconname">
                                 <img src="/images/default/f6.png" />
                             </div>
                             <h3> Check Shipping Status  </h3>
                        </div>
                    </div>

                   

                    
                </div>
            </div>
        </div>
         
    </>
  );
};

export default HomeFeaturList;
 

