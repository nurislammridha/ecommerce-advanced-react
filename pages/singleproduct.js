import React from "react";
import MainLayout from "../components/layouts/Layout";
import SingleProductRating from "../components/layouts/page/productdetails/SingleProductRating";
import Rater from "react-rater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";
import { ExpandLess } from "@material-ui/icons";
import { ExpandMore } from "@material-ui/icons";
import HomeFlashSell from "../components/layouts/page/home/HomeFlashSell";
import AnswerQuestion from "../components/layouts/page/productdetails/AnswerQuestion";

export default function singleproduct(props) {
  return (
    <>
      <MainLayout>
        <div class="singleProduct ">
          <div class="container-fluid ">
            <div className="row">
              <div className="col-12 ">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb p-3 single-product-breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Category</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">Sub-Category</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Product Title
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-1 col-lg-1 bg-white">
                <div className="singleGallery mt-2 rounded">
                  <p className="border rounded text-center">
                  <ExpandLess/>
                  </p>
                  <p className="p-3 border rounded">Gallery</p>
                  <p className="p-3 border rounded">Gallery</p>
                  <p className="p-3 border rounded">Gallery</p>
                  <p className="p-3 border rounded">Gallery</p>
                  <p className="p-3 border rounded">Gallery</p>
                  <p className="border rounded text-center">
                  <ExpandMore/></p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="singleGalleryImg bg-white rounded border"></div>
              </div>

              <div className="col-xl-4 col-lg-4 bg-white border rounded">
                <div className="singleGalleryProduct bg-white rounded">
                  <div className="galleryHeading float-left mt-4 mb-2">
                    <h3>Product Title</h3>
                  </div>
                  <div className="galleryIcon float-right mt-3 ml-2">
                    <ShareIcon />
                    Share
                    <span className="favIcon border rounded-circle ml-3">
                      <FavoriteIcon />
                    </span>
                  </div>
                  <div className="clearfix"></div>

                  <Rater total={5} rating={2} />
                  <span>39 Ratings & 174 Reviews</span>

                  <div className="galleryProductDetails mt-1">
                    <h1 className="mb-3 mt-3">
                      ৳ 134 <span className="text-warning priceOff">৳ 222</span>
                    </h1>
                    <p className="mt-3">
                      Brand: <b>Brand Name</b>
                    </p>
                    <p className="mt-3 mb-3">
                      Availability:{" "}
                      <span className="text-green font-weight-bold">
                        In stock{" "}
                      </span>{" "}
                      /{" "}
                      <sapn className="text-danger font-weight-bold">
                        Sold out
                      </sapn>
                    </p>
                    <p className="mb-5">
                      Color:
                      <span className="colorType border rounded text-dark">
                        Red
                      </span>
                      <span className="colorTypeTwo border rounded text-primary ">
                        Blue
                      </span>
                      <span className="colorType border rounded text-dark">
                        Yellow
                      </span>
                    </p>
                    <p className="mb-5">
                      Size:
                      <span class="colorType border rounded text-dark">XS</span>
                      <span className="colorType border rounded text-dark ">
                        S
                      </span>
                      <span className="colorType  border rounded text-dark">
                        M
                      </span>
                      <span className="colorType  border rounded text-dark">
                        L
                      </span>
                      <span className="colorTypeTwo border rounded text-primary ">
                        XL
                      </span>
                      <span className="colorType border rounded text-dark ">
                        XXL
                      </span>
                    </p>
                    <p className="mb-5">
                      {" "}
                      Qty:
                      <button className="btn btn-light quantity-btn decrement bg-light border rounded-circle text-dark ml-3">
                        <Remove />
                      </button>
                      <span className="colorType border rounded text-dark">
                        1
                      </span>
                      <button className="btn btn-light quantity-btn  increment bg-light border rounded-circle text-dark ml-2">
                        <AddIcon />
                      </button>
                    </p>
                  </div>
                  <div clasNAme="galleryButton mt-5">
                    <button className="btn btn-light galleryAdd">
                      Add to cart
                    </button>

                    <button className="btn btn-light galleryBuy">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="galleryStore bg-white p-3">
                  <h1>Store Name</h1>
                  <p>
                   70% Positive feedback
                  </p>
                  <p className="pb-2">
                   107 Followers
                  </p>
                  <div className="storeButton mt-2">
                    <button className="border border-success rounded-pill text-success bg-white">
                      Chat
                    </button>
                    <button className="border border-danger rounded-pill text-danger bg-white ml-3">
                      Follow
                    </button>
                  </div>
                  <div className="galleryView mt-2 text-center">
                    <a className="text-primary" href="">
                      View Store
                    </a>
                  </div>
                </div>
                <div className="galleryPrice bg-white mt-2 px-3 pt-3 pb-1">
                  <span className="">Best Price :৳134 </span>
                  <span className="text-warning"> (30% OFF)</span>
                  <div className="galleryPayment mt-1">
                    <p className="mb-0 ">
                      <img
                        src="/images/default/tag.png"
                        className="d-inline mr-1 tag-img"
                      ></img>
                      Partial Payment:
                      <span className="text-success font-weight-bold ml-2">
                        Accepted
                      </span>
                    </p>
                    <p>
                      <img
                        src="/images/default/tag.png"
                        className="d-inline mr-1 tag-img"
                      ></img>{" "}
                      Cash on Delivery:
                      <span className="text-danger font-weight-bold ml-2">
                        Not Availabe
                      </span>
                    </p>
                  </div>
                </div>
                <div className="galleryDescription bg-white mt-2 p-3 pl-3">
                  <p className="mb-2">
                    {" "}
                    <img
                      src="/images/default/return.png"
                      className="d-inline mr-1 return-img"
                    ></img>
                    15 days easy return{" "}
                  </p>
                  <p className="mb-2">
                    {" "}
                    <img
                      src="/images/default/delivery.png"
                      className="d-inline mr-1 return-img"
                    ></img>
                    Delivery Policy
                  </p>
                  <p className="mb-2">
                    {" "}
                    <img
                      src="/images/default/warranty.png"
                      className="d-inline mr-1 return-img"
                    ></img>
                    1 year Warranty
                  </p>
                  <p className="mb-2">
                    {" "}
                    <img
                      src="/images/default/authentic.png"
                      className="d-inline mr-1 return-img"
                    ></img>
                    Authentic Product
                  </p>
                </div>
                <div className="galleryDescription bg-white mt-2 p-3 pl-3">
                  <p className="mb-1 font-weight-bold">To get this product </p>
                  <button className="btn btn-warning text-white login-gradient-color mt-3">
                    Login Now
                  </button>
                  <p className="single-product-text">or</p>
                  <button className="btn btn-primary bg-white border-primary text-primary sign-up-btn">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 bg-white mt-3 border">
                <div className="singleProductDetails ">
                  <div className="singleProductHeader pt-3">
                    <h1>Product Details</h1>
                  </div>

                  <div className="detailsTitle border-right pb-3 pt-3">
                    <div className="singleDetail">
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                    </div>
                    <div className="singleDetailOne">
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                    </div>
                  </div>
                  <div className="detailsTitle one pb-3 pt-3">
                    <div className="singleDetail pl-3">
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                    </div>
                    <div className="singleDetailOne">
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                      <p>Detail Title:</p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="border-bottom productDescription"></div>
                <div className="productDescription pt-3 pb-2">
                  <h5>Product description</h5>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <SingleProductRating />
                <AnswerQuestion/>
              </div>
            </div>
          </div>
        </div>
        <HomeFlashSell />
      </MainLayout>
    </>
  );
}
