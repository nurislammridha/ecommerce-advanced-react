import React, { Component } from "react";
import { MdThumbUp } from "react-icons/md";
import Rater from "react-rater";

const singleProductRating = ({ router }, props) => {
  return (
    <>
      <div className="ratingbanner pb mt-3">
        <div className="container-fluid">
          <div className="elegentratingsection">
            <div className="row">
              <div className="col-12">
                <div className="elegentratingreview">
                  <h1>Ratings & Reviews</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="elegentratingreview one">
                  <p>4.5/5</p>
                  <div className="review two">
                    <Rater total={5} rating={2} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
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
                  <p>
                    {" "}
                    <MdThumbUp /> 02
                  </p>
                  <input type="text" placeholder="Write your review" className="review-input"></input>
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
                  <p>
                    {" "}
                    <MdThumbUp /> 02
                  </p>
                  <input type="text" placeholder="Write your review" className="review-input"></input>
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
                  <p>
                    {" "}
                    <MdThumbUp /> 02
                  </p>
                  <input type="text" placeholder="Write your review" className="review-input"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default singleProductRating;
