import React, { Component, useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Rater from "react-rater";
import Slider from "react-slick";
import { Col, Card } from "react-bootstrap";
import { fetchHomePageProducts } from "../../../../store/redux/home/actions/HomePageAction";
import ProductMiniCard from "../product/ProductMiniCard";

const HomeCategoryWiseProduct = (props) => {
  const [settings, setSettings] = useState();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    initializeSlickSettings();
    initializeProductAndCategory();
  }, [props]);

  const initializeSlickSettings = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
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
    // window.slickSettings(settings);
    setSettings(settings);
  };

  const initializeProductAndCategory = async () => {
    const response = await fetchHomePageProducts(props.no);
    setCategory(response.category);
    setProducts(response.products);
  };

  // const item = [
  //   {
  //     id: 1,
  //     name: "farid",
  //   },
  // ];

  console.log("products", products);
  // console.log("items", item);

  return (
    <>
      {category != null && (
        <Card className="sliderCard">
          <div className="sliderCard-header">
            <div className="container-fluid">
              <div className="row flashSellButtonArea">
                <div className="col-lg-4">
                  <div className="flashtitle">
                    <h2>{category.name}</h2>
                    <p>{category.short_description}</p>
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
            {products.length > 0 &&
              products.map((product, index) => (
                <Col className="align-items-center" key={index}>
                  <ProductMiniCard product={product} />
                </Col>
              ))}
          </Slider>
        </Card>
      )}
    </>
  );
};

export default HomeCategoryWiseProduct;
