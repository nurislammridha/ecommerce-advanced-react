
import React from "react";
import Rater from "react-rater";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import ReactImageFallback from "react-image-fallback";
import WishList from "../../../WishList/WishList";

const ProductMiniCard = (props) => {
  const { product } = props;

  return (
    <>
      {typeof product != "undefined" && (

        <div className="singleProduct singleproductborder">
          <Link href={`/products/${product.sku}`}>
            <div className="productImg">
              <LazyLoad height={200} once>
                <ReactImageFallback
                  src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                  fallbackImage="/images/default/fallback-image.png"
                  initialImage="/images/default/fallback-image.png"
                  alt={product.name}
                  className="pointer" />
              </LazyLoad>
            </div>
          </Link>
          <Link href="">
            <a>
              <div className="product-review">
                <WishList product={product} />
              </div>
            </a>
          </Link>
          <div className="productDetails ">
            <Link href={`/products/${product.sku}`}>
              <a>
                <div className="productTitle">
                  <h3>{product.name}</h3>
                  <p>{product.category ? product.category.name : ''}</p>
                </div>
              </a>
            </Link>


            <div className="productPrice pt-2 float-left">
              {product.is_offer_enable != true && (
                <h4>৳ {product.default_selling_price}</h4>
              )}

              {product.is_offer_enable != false && (
                <>
                  <h4>৳ {product.offer_selling_price}</h4>
                  <p>
                    <del>৳ {product.default_selling_price}</del>
                  </p>
                </>
              )}
            </div>
            <Link href="">
              <a>
                <div className="float-right product-cart">

                  <img src="/images/default/cart.png" className=" p-2" alt="" />

                </div>
              </a>
            </Link>

            <div className="ratepoint ">
              <Rater total={5} rating={parseFloat(product.average_rating)} />{" "}
              <span> ({parseFloat(product.average_rating).toFixed(1)}) </span>
            </div>

          </div>


        </div>


      )}

    </>
  );
};

export default ProductMiniCard;
