import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Rater from "react-rater";


export default function singleproduct(props) {
  return (
    <>
      <MainLayout>

        <div class="singleProduct ">
        <div class="container-fluid ">
          <div className="row">
            <div className="col-12 ">
            <nav aria-label="breadcrumb ">
  <ol class="breadcrumb p-3">
    <li class="breadcrumb-item"><a href="#">Category</a></li>
    <li class="breadcrumb-item"><a href="#">Sub-Category</a></li>
    <li class="breadcrumb-item active" aria-current="page">Product Title</li>
  </ol>
</nav>
            </div>
           
            </div>
            <div className="row">
                <div className="col-xl-1 col-lg-1">
                    <div className="singleGallery bg-white rounded">
                        <p>Gallery</p>

                    </div>

                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="singleGalleryImg bg-white rounded">
                       

                    </div>

                </div>
                <div className="col-xl-4 col-lg-4 bg-white">
                    <div className="singleGalleryProduct bg-white rounded">
                        <h3>Product Tiitle</h3>
                       
                       
                 <Rater total={5} rating={2} /><span>39 Ratings & 174 Reviews</span>
                 
                <h1>৳ 134</h1><span>222</span>
                <div className="galleryProductDetails">
                    <p>Brand: Brand Name</p>
                    <p>Availability: <span>In stock </span> / <sapn>Sold out</sapn></p>
                    <p>Color:<span className="rounded">Red</span></p><span className="rounded">Red</span>

                </div>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
