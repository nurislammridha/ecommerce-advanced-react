import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Rater from "react-rater";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Link from "next/link";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ChatIcon from "@material-ui/icons/Chat";
import ReactImageFallback from "react-image-fallback";
import AddIcon from "@material-ui/icons/Add";
import { Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartsAction, addToCartAction, updateCartQtyAction } from "../../../../store/actions/orders/CartAction";

const ProductDetailInfo = (props) => {
    const { product } = props;
    // console.log('product :>> ', product);
    //product quantity set
    const [quantity, setQuantity] = useState(1);
    const [idAdded, setIsAdded] = useState(false)

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.cart.loading);
    const Getcarts = useSelector((state) => state.cart.carts);
    const cartState = useSelector((state) => state.cart);
    const carts = useSelector((state) => state.cart.carts);
    const findCurrentCart = carts.find(id => id.productID === product.id);
    useEffect(() => {
        dispatch(getCartsAction());
    }, []);

    // // manage product price with current quantity
    // if (product.is_offer_enable !== true) {
    //     const newPrice = product.default_selling_price * quantity;
    //     product.price = newPrice;
    //     product.quantity = quantity;
    // } else {
    //     const TotalPrice = product.offer_selling_price * quantity;
    //     product.price = TotalPrice;
    //     product.quantity = quantity;
    // }

    const cartProduct = {
        productID: product.id,
        productName: product.name,
        quantity: quantity,
        price: product.default_selling_price,
        offerPrice: product.offer_selling_price,
        productImage: `${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`,
        business: {
            businessID: product.business_id,
            businessName: product.business.name,
            businessLogo: `${process.env.NEXT_PUBLIC_URL}images/vendors/${product.business.logo_url}`,
        },
    }
    // increase quantity 
    const increaseQuantity = (id, quantity) => {
        carts.find((item) => item.productID === id && setQuantity((item.quantity += 1)));
        dispatch(updateCartQtyAction(id, (quantity += 1)));
    };
    //decrease quantity
    const decrementQunatity = (id, quantity) => {
        carts.find((item) => item.productID === id && item.quantity > 1 && setQuantity((item.quantity -= 1)))
        if (quantity > 1) {
            dispatch(updateCartQtyAction(id, (quantity -= 1)));
        }
    };

    const addToCart = (cartProduct, id) => {
        dispatch(addToCartAction(cartProduct, id))
    }
    return (
        <>
            {
                product != null &&
                <div className="homebanner bp">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="elegentchairmenu">
                                    {/* <ul>
                                <li> Akij Plastics</li>
                                <li>Chair </li>
                                <li> Chair Elegant Chair wave rose wood</li>
                                </ul> */}
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/"> {typeof product.category != 'undefined' ? product.category.name : ''}</Breadcrumb.Item>
                                        <Breadcrumb.Item href="/">
                                            {typeof product.sub_category != 'undefined' ? product.sub_category.name : ''}
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active>
                                            {product.name}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </div>
                        </div>
                        <div className="row single-product-box">
                            <div className="col-lg-4">
                                <div className="singlechair">
                                    {/* <img src="/images/default/singlechair.png" /> */}
                                    <ReactImageFallback
                                        src={`${process.env.NEXT_PUBLIC_URL}images/products/${product.featured_image}`}
                                        fallbackImage="/images/default/fallback-image.png"
                                        initialImage="/images/default/fallback-image.png"
                                        alt={product.name}
                                        className=""
                                    />
                                </div>
                                {/* <div className="elegentsinglechair">
                                    <img src="/images/default/chair.png" />
                                </div>
                                <div className="elegentsinglechair two">
                                    <img src="/images/default/chair2.png" />
                                </div> */}
                            </div>

                            <div className="col-lg-4">
                                <div className="chairdetails">
                                    <h1>{product.name}</h1>
                                    <div className="review">
                                        <Rater total={5} rating={2} /> <span> 58 Ratings </span>
                                        <span className="float-right">
                                            {/* <Link href="/"> */}
                                            <ShareIcon />Share
                                         
                                            {/* </Link>  */}
                                            {/* <Link href="/"> */}
                                            <span className="favoriteicon-border"> <FavoriteIcon /></span>
                                           

                                            {/* </Link>  */}
                                        </span>
                                    </div>

                                    <div className="stock">
                                        <span>Brand:
                                            {(typeof product.brand != 'undefined' && product.brand != null) ? product.brand.name : ''}
                                        </span>
                                    </div>
                                    <div className="Chairinstock">
                                        <span>In Stock</span>
                                    </div>
                                    <div className="Chairinstock icon">
                                        <FaCartPlus />
                                        <FaCartPlus />
                                    </div>

                                    <div className="chairdetailstext">

                                        {product.is_offer_enable != true && (
                                            <h2 className="text-warning">৳ {
                                                product.price ? product.price : product.default_selling_price
                                            } </h2>
                                        )}

                                        {product.is_offer_enable != false && (
                                            <>
                                                <h2 className="text-warning">৳ {
                                                    product.price ? product.price : product.offer_selling_price
                                                } </h2>
                                                {/* <p>
                                            <del>৳ {product.default_selling_price}</del>
                                        </p> */}
                                                <h4 className="text-danger">৳ {product.default_selling_price}</h4>
                                            </>
                                        )}

                                        {/* <h4 className="text-danger">৳ 1200</h4>
                                        <span className="text-dark">-38%</span> */}
                                    </div>
                                    {/* <div className="Promotion">
                                        <h6 className="float-left">Promotions</h6>
                                        <h6 className="float-right">Spend ৳ 2000 get ৳ 200 off
                                        <DropdownButton  title="Dropdown button">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                            </h6>
                                        </div> */}

                                    <div className="chaircolor">
                                        <h2>Color:</h2>
                                        <h2>
                                            Quantity :
                                            <button className="btn btn-light quantity-btn decrement bg-light border rounded-circle text-dark ml-3" onClick={(id, quantity) => decrementQunatity(cartProduct.productID, cartProduct.quantity)}> <Remove /></button>

                                            <span className="colorType border rounded text-dark">{findCurrentCart && findCurrentCart.quantity ? findCurrentCart.quantity : quantity}</span>

                                            <button className="btn btn-light quantity-btn  increment bg-light border rounded-circle text-dark ml-2" onClick={(id, quantity) => increaseQuantity(cartProduct.productID, cartProduct.quantity)}><AddIcon /></button>
                                        </h2>
                                    </div>
                                    <div className="stock cart two">
                                        <span onClick={() => addToCart(cartProduct, product.id)}>Add to cart</span>
                                    </div>
                                    <div className="stock cart">
                                        <span>Buy Now</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 deliverysection">
                                <div className="chairDeliverydetails bg-light p-3">
                                    <h2>Delivery Options</h2>
                                    <div className="chairDeliveryoption three"></div>
                                    <div className="chairDeliveryoption productDetailsFloating">
                                        <p>
                                            <PinDropIcon />
                                            Dhaka,Dhaka - South,Wari
                                        </p>
                                        <br></br>
                                        <img src="/images/default/homedelivery.png" alt="" />
                                        <p>Home Delivery</p>
                                        <br></br>
                                        <p className="mt-n3 deliveryDays pl-4">3-5 days</p>
                                        <br></br>
                                        <img src="/images/default/cashdelivery.png" alt="" />{" "}
                                        <p>Cash on Delivery Available</p>
                                    </div>
                                    {/* <div className="chairDeliveryoption two">
                                    <p>Edit</p>
                                    <p>৳ 245</p>
                                    </div>
                                    <div className="elegentchairestore">
                                    <h3>Store by</h3>
                                    <div className="elegentstoreImg">
                                        <img src="/images/default/store1.png" />
                                    </div>
                                    <div className="elegentstoreImg two">
                                        <h5>Akij Plastics Ltd</h5>
                                        <p>Flagship Store</p>
                                        <Rater total={5} rating={2} />
                                    </div>
                                    <div className="elegentstoreImg three">
                                        <img src="/images/default/playstore.png" />
                                    </div>
                                    </div> */}
                                    <div className="clearfix"></div>
                                    <div className="border-bottom"></div>
                                    <div className="clearfix"></div>
                                    <div className="chairDeliveryoption productDetailsFloating returnWarranty mt-2">
                                        <h6>Return & Warranty</h6>
                                        <img src="/images/default/7days.png" alt="" />
                                        <p>7 Days Returns</p>
                                        <p className="mt-n3 deliveryDays pl-4">
                                            Change of mind is not applicable
                                        </p>
                                        <br></br>
                                        <img src="/images/default/nowarranty.png" alt="" />
                                        <p>Warranty not available</p>
                                        <br></br>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="clearfix"></div>
                                    <div className="mt-2 bg-light soldText">
                                        <h6>Sold by</h6>
                                        <div className="soldAgency">
                                            <h2 className="float-left">Akij plastic</h2>
                                            <p className="float-right text-right font-weight-bold">
                                                <ChatIcon />
                                                Chat Now
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="elegentrating">
                                        <div className="elegentsinglerating">
                                            <h6>88%</h6>
                                            <p>Positive Seller Ratings</p>
                                        </div>
                                        <div className="elegentsinglerating two">
                                            <h6>41%</h6>
                                            <p>Ship on Time</p>
                                        </div>
                                        <div className="elegentsinglerating">
                                            <h6>43%</h6>
                                            <p>Chat Response Rate</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="goStore text-center font-weight-bold">
                                            <Link href="/"> GO TO STORE</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix"></div>
                                <div className="elegentpayment mt-2">
                                    <div className="elegentpaymenttext">
                                        <p>Payment:</p>
                                    </div>
                                    <div className="elegentpaymenttext one">
                                        <img src="/images/default/payment-gateway.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductDetailInfo;
