import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import HomeFeaturList from "../../components/layouts/page/home/HomeFeaturList"
import ProductDetailInfo from "../../components/layouts/page/productdetails/ProductDetailInfo"
import ProductDetailsDescrition from "../../components/layouts/page/productdetails/ProductDetailsDescrition"
import ElegentChairRating from "../../components/layouts/page/productdetails/ElegentChairRating"
import { fetchProductBySlug, fetchProducts } from "../../store/redux/products/actions/ProductAction"
import LoadingSkelleton from "../../components/skelleton/LoadingSkelleton"
import Head from 'next/head'

export default function ProductBySlug({ product }) {
    // const [product, setProduct] = useState(null)
    // const dispatch = useDispatch();
    const router = useRouter();
    const loading = false;

    // const loading = useSelector((state) => state.productDetail.loading);
    // const productDetail = useSelector((state) => state.productDetail.productDetail);
    // const products = useSelector((state) => state.product.products);

    // const { productBySlug } = router.query;

    useEffect(() => {
        // if(loading){
        // dispatch(fetchProductBySlug(productBySlug));
        // dispatch(fetchProducts());
        // console.log('productBySlug', productBySlug);
        // }
        // initializeData();
    }, []);

    const initializeData = async () => {
        // const product = await fetchProductBySlug(productBySlug);
        // setProduct(product);
    }

    // console.log('products', products);

    if (router.isFallback) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>
                    Product Information - {product.title} || Maccaf
                </title>
            </Head>
            <MainLayout>
                <>
                    <ProductDetailInfo product={product} />
                    <ProductDetailsDescrition />
                    <ElegentChairRating />
                    <HomeFeaturList />
                </>
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

export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${params.productBySlug}`)
    const dataJSON = await res.json();
    const data = dataJSON.data;
    return { props: { product: data } }
}

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}get-items`);
    const dataJSON = await res.json();
    const products = dataJSON.data.data;

    const paths = products.map((product) => ({
        params: { productBySlug: product.sku }
    }));
    return { paths, fallback: true }
}