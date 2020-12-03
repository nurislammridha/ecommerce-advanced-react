import React, { Component } from "react";
import { FaCartPlus, FaGooglePlay, FaUser } from "react-icons/fa";
import Rater from "react-rater";

const ElegentChairRating = ({ router }, props) => {
  return (
    <>
      <div className="ratingbanner pb">
        <div className="container">
          <div className="elegentratingsection">
            <div className="row">
              <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                <div className="elegentratingreview">
                  <h1>Ratings & Reviews</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="elegentratingreview one">
                  <p>4.5/5</p>
                  <div className="review two">
                    <Rater total={5} rating={2} />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                <div className="elegentratingreview two">
                  <span>58 Ratings</span>
                  <div className="review">
                    <Rater total={5} rating={2} />
                    <span>56</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>02</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                    <br></br>
                    <Rater total={5} rating={2} />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="chairreview">
                  <div className="chairreview one">
                    <h1>Product Reviews</h1>
                  </div>
                  <div className="chairreview two">
                    <p>Sort by default</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="chairreview comment">
                <div className="chairreviewcomment one">
                  <img src="/images/default/departemntteamimg.png" />
                </div>

                <div className="chairreviewcomment two">
                  <h1>by Faruk U.</h1>
                  <div className="review comment">
                    <Rater total={5} rating={2} />
                    <br></br>
                  </div>
                  <p>02</p>
                  <h1>" Great Product!!!"</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="chairreview comment borderless">
                <div className="chairreviewcomment one">
                  <img src="/images/default/departemntteamimg.png" />
                </div>

                <div className="chairreviewcomment two">
                  <h1>by Faruk U.</h1>
                  <div className="review comment">
                    <Rater total={5} rating={2} />
                    <br></br>
                  </div>
                  <p>02</p>
                  <h1>" Great Product!!!"</h1>
                </div>
              </div>
            </div>
            <div className="row ratingborder">
              <div className="chairreview comment borderless">
                <div className="chairreviewcomment one">
                  <img src="/images/default/departemntteamimg.png" />
                </div>

                <div className="chairreviewcomment two">
                  <h1>by Faruk U.</h1>
                  <div className="review comment">
                    <Rater total={5} rating={2} />
                    <br></br>
                  </div>
                  <p>02</p>
                  <h1>" Great Product!!!"</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElegentChairRating;
