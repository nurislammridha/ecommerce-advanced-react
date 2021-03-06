import React, { Component, useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { fetchHomePageProducts } from "../../../../store/redux/home/actions/HomePageAction";
import "react-multi-carousel/lib/styles.css";
import ProductMiniCard from "../product/ProductMiniCard";

const HomeCategoryWiseProduct = (props) => {
  const [settings, setSettings] = useState();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    initializeProductAndCategory();
  }, [props]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
     
     
    }
  };

  const initializeProductAndCategory = async () => {
    const response = await fetchHomePageProducts(props.no);
    setCategory(response.category);
    setProducts(response.products.data);
  };

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
                    <Link href="products">
                      <button className="viewButton">
                        View all 
                        <FaArrowRight />
                      </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Carousel
            // partialVisbile
            // deviceType={deviceType}
            itemClass="image-item"
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
          >
            {products.length > 0 &&
              products.map((product, index) => (
                <Col className="align-items-center" key={index}>
                  <ProductMiniCard product={product} />
                </Col>
              ))}
          </Carousel>
        </Card>
      )}
    </>
  );
};

export default HomeCategoryWiseProduct;
