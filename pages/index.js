import React, { useEffect } from 'react';
import MainLayout from '../components/layouts/Layout';
import HomeBanner from '../components/layouts/page/home/HomeBanner';
import HomeFlashSell from '../components/layouts/page/home/HomeFlashSell';
import HomeBrand from '../components/layouts/page/home/HomeBrand';
import HomeStroe from '../components/layouts/page/home/HomeStroe';
import HomeDoubleBanner from '../components/layouts/page/home/HomeDoubleBanner';
import HomeProduct from '../components/layouts/page/home/HomeProduct';
import HomeFeaturList from '../components/layouts/page/home/HomeFeaturList';

export default function Home(props) {
  useEffect(() => {
    if (typeof window === 'undefined') {
      global.window = {};
    }
  }, []);
  return (
    <>
      <MainLayout>
        <img src="/images/slider/slide1.png" />
        <HomeBanner />
        <HomeFlashSell />
        <HomeBrand />
        <HomeStroe />
        <HomeDoubleBanner />
        <HomeProduct />
        <HomeFeaturList />
      </MainLayout>
    </>
  );
}
