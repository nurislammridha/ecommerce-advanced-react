import React, { useEffect } from 'react';
import MainLayout from '../components/layouts/Layout';
import HomeFlashSell from '../components/layouts/page/home/HomeFlashSell';
import HomeBrand from '../components/layouts/page/home/HomeBrand';
import HomeStroe from '../components/layouts/page/home/HomeStroe';
import HomeProduct from '../components/layouts/page/home/HomeProduct';
import HomeFeaturList from '../components/layouts/page/home/HomeFeaturList';
import { Container } from 'react-bootstrap';

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
        <Container fluid>
          <HomeFlashSell />
          <HomeFlashSell />
          <HomeFlashSell />
          <HomeBrand />
          <HomeStroe />
          <HomeProduct />
          <HomeFeaturList />
        </Container>
      </MainLayout>
    </>
  );
}
