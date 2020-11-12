import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Wallet from "../components/layouts/page/wallet/Wallet";

export default function giftcard(props) {
  return (
    <>
      <MainLayout>
        <Wallet />
      </MainLayout>
    </>
  );
}
