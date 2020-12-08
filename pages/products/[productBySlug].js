import React, { useEffect } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import MainLayout from "../../components/layouts/Layout"
import HomeFeaturList from "../../components/layouts/page/home/HomeFeaturList"
import ElegantChair from "../../components/layouts/page/productdetails/ElegantChair"
import ProductDetailsDescrition from "../../components/layouts/page/productdetails/ProductDetailsDescrition"
import ElegentChairRating from "../../components/layouts/page/productdetails/ElegentChairRating"

export default function ProductDetail(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const { productBySlug } = router.query

    useEffect(() => {
        
    }, []);

    return (
        <>
            <MainLayout>
                <ElegantChair />
                <ProductDetailsDescrition />
                <ElegentChairRating />
                <HomeFeaturList />
            </MainLayout>
        </>
    );
}
