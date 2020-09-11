import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card } from 'react-bootstrap';

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
                  <h2>My Gift Cards</h2>
                </div>
              </div>
              <div className="card p-3">
                <div className="row">
                  <div className="col-md-6">
                    <p>Your Purchase gift card</p>
                  </div>
                  <div className="col-md-6">
                    <p className="text-right">Gift Card Balance</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p>Your Purchase gift card</p>
                  </div>
                  <div className="col-md-3">
                    <p className="text-right">Gift Card Balance</p>
                  </div>
                  <div className="col-md-3">
                    <p>Your Purchase gift card</p>
                  </div>
                  <div className="col-md-3">
                    <p className="text-right">Gift Card Balance</p>
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
