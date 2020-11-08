import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Rater from "react-rater";
import FavoriteIcon from '@material-ui/icons/Favorite';

import ShareIcon from '@material-ui/icons/Share';

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
                      <div className="galleryHeading float-left mt-2">
                        <h3>Product Title</h3>
                        </div>
                        <div className="galleryIcon float-right mt-3 ml-2">
                        <ShareIcon/>Share
                       
                       <span className="favIcon border rounded-circle ml-3" >
                       <FavoriteIcon/>
                       </span>
                        </div>
                        <div className="clearfix"></div>
                       
                       
                 <Rater total={5} rating={2} /><span>39 Ratings & 174 Reviews</span>
                 
                
                <div className="galleryProductDetails">
                <h1>৳ 134 <span className="text-warning priceOff">৳ 222</span></h1>
                    <p>Brand: <b>Brand Name</b></p>
                    <p>Availability: <span className="text-green" >In stock </span> / <sapn className="text-danger">Sold out</sapn></p>
                   <p>Color:<span class="colorType border rounded text-dark">Red</span>
                   <span class="colorTypeTwo border rounded text-primary ">Blue</span>
                   <span class="colorType border rounded text-dark">Yellow</span></p>
                   <p>Size:<span class="colorType border rounded text-dark">XS</span>
                   <span class="colorType border rounded text-dark ">S</span>
                   <span class="colorType  border rounded text-dark">M</span>
                   <span class="colorType  border rounded text-dark">L</span>
                   <span class="colorTypeTwo border rounded text-primary ">XL</span>
                   <span class="colorType border rounded text-dark ">XXL</span>
                   </p>
                   <p>Qty:</p>

                </div>
                <div clasNAme="galleryButton">
               <button className="btn btn-light galleryAdd">Add to cart</button>
              
                <button className="btn btn-light galleryBuy">Buy Now</button>
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
