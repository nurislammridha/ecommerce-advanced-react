import React from 'react';
import MainLayout from '../components/layouts/Layout';
import VendorLogin from '../components/layouts/page/login/VendorLogin';

const vendorLogin = () => {
    return (
        <MainLayout>
            <VendorLogin />
        </MainLayout>
    );
};

export default vendorLogin;