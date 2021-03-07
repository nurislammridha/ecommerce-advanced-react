import React from "react";
import Rater from "react-rater";
const SuggestionProduct = () => {
  return (
    <>
      <div className="suggestion-product-section card pb-2">
        <div className="container">
          <div className="row">
            <div className="single-suggestion-product">
              <div className="single-suggestion-product-header bg-light py-2">
                <h1 className="card-title pl-2 "> From The Same Store</h1>
              </div>
              <div className="productImg mt-2">
                <img src="/images/default/chair.png" />
              </div>
              <p className="pl-2">This T-Shirt for Men's comfortable and can be worn for regular use. It is a perfect wear for men like you. You will love to wear</p>
              <h5 className="text-warning pl-2"> ৳ 385</h5>
              <Rater total={5} rating={2}  /><br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionProduct;
