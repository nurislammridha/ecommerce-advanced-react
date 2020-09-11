import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card } from 'react-bootstrap';
import PageHeding from '../components/pages/sidbarLayout/PageHeding';

export default function giftcard(props) {
  return (
    <>
      <MainLayout>
        <div class="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <div className="card card-middle">
                <div className="sidebar-card-title">
                  <h2>MY gift card</h2>
                </div>
              </div>
              <div className="card p-3">
                <div className="row">
                  <div className="col-md-6">
                    <p className="font-weight-bold">Your Purchase gift card</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-right font-weight-bold">
                      Gift Card Balance
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor1">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">&#x9f3; 1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3; 1500
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor2">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">&#x9f3; 1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3;1500
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor3">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3; 1500
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor4">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">&#x9f3; 1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3; 1500
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="font-weight-bold">Your Purchase gift card</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-right font-weight-bold">
                      Gift Card Balance
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor1">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">&#x9f3; 1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3; 1500
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="gift-card gift-card-bgColor2">
                      <p>Your gift card</p>
                      <p className="text-right giftCard-taka">&#x9f3; 1500</p>
                    </div>
                    <p className="text-center card-value">
                      Card Value &#x9f3; 1500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
