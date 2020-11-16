import React, { Component, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import Slider from "react-slick";
import { Col, Card } from "react-bootstrap";

const HomeFlashSell = ({ router }, props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const item = [
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
    {
      id: 1,
      name: "farid",
    },
  ];

  return (
    <>
      <Card className="sliderCard">
        <div className="sliderCard-header">
          <div className="container-fluid">
            <div className="row flashSellButtonArea">
              <div className="col-lg-4">
                <div className="flashtitle">
                  <h2>Section Name</h2>
                  <p>Section Slogan(It's nullable)</p>
                </div>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <button className="viewButton">
                  View all
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {item.map((itemSingle, index) => (
            <Col className="align-items-center" key={index}>
              <div className=" card ">
                <div className="productImg">
                  <img src="/images/default/chair.png" />
                </div>
                <div className="productDetails">
                  <div className="productTitle">
                    <h3>Elegant Chair</h3>
                  </div>
                  <div className="productPrice">
                    <h4 className="pt-2">
                      ৳ 590.00 <span className="product-discount">50% off</span>
                    </h4>
                    <p className="pt-2">Brand name,Slogan</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Slider>
      </Card>
    </>
  );
};

export default HomeFlashSell;
