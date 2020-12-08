import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import HomeFeaturList from "../../components/layouts/page/home/HomeFeaturList"
import ProductDetailInfo from "../../components/layouts/page/productdetails/ProductDetailInfo"
import ProductDetailsDescrition from "../../components/layouts/page/productdetails/ProductDetailsDescrition"
import ElegentChairRating from "../../components/layouts/page/productdetails/ElegentChairRating"
import { fetchProductBySlug, fetchProducts } from "../../store/redux/products/actions/ProductAction"
import LoadingSkelleton from "../../components/skelleton/LoadingSkelleton"

export default function ProductDetail(props) {
    const dispatch = useDispatch();
    const router = useRouter();

    const loading = useSelector((state) => state.productDetail.loading);
    const productDetail = useSelector((state) => state.productDetail.productDetail);
    const products = useSelector((state) => state.product.products);

    const { productBySlug } = router.query;

    useEffect(() => {
        // if(loading){
        // dispatch(fetchProductBySlug(productBySlug));
        // dispatch(fetchProducts());
        // console.log('productBySlug', productBySlug);
        // }
    }, [productBySlug]);

    // console.log('products', products);

    return (
        <>
            <MainLayout>
                {
                    typeof productDetail !== 'undefined' && productDetail !== null &&
                    <>
                        <ProductDetail product={productDetail}/>
                        <ProductDetailsDescrition />
                        <ElegentChairRating />
                        <HomeFeaturList />
                    </>
                }

                {
                    loading &&
                    <div className="mb-5">
                        {loading && (
                            <LoadingSkelleton
                                alignment="vertical"
                                count={1}
                                width={730}
                                height={200}
                            />
                        )}
                    </div>
                }

            </MainLayout>
        </>
    );
}
