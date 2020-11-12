import React from "react";
import Rater from "react-rater";

const ProductMiniCard = (props) => {
  const { product } = props;

  return (
    <>
      {typeof product != "undefined" && (
        <div className="singleProduct singleproductborder">
          <div className="productImg">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
            />
          </div>
          <div className="productDetails">
            <div className="productTitle">
              <h3>{product.name}</h3>
              <p>{product.category.name}</p>
            </div>
            <div className="productPrice pt-2">
              <h4>৳ 590.00</h4>
              <p>৳ 590.00</p>
            </div>
            <div className="ratepoint">
              <Rater total={5} rating={2} /> <span> (1) </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductMiniCard;
