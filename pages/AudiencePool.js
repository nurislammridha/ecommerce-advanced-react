import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card, Media } from 'react-bootstrap';
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
              {/* <PageHeding name="notification" /> */}
              <div className="card card-middle">
                <div className="sidebar-card-title">
                  <h2>Audience Pool</h2>
                </div>
              </div>
              <h2>Which Product do you want</h2>
              <div className="pool-container d-flex flex-row">
                <div className="card p-2 shadow-sm mt-3 align-items-center">
                  <Media>
                    <img
                      width={80}
                      height={80}
                      className="mr-3"
                      src="/images/default/chair.png"
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <h2>Product title (with single page link)</h2>
                      <div>
                        <p>
                          Thank you Placing your order to Gadage Guy for Hot
                          Deal.Our Customer Manager will contact you soon
                        </p>
                        <p>Vote 14 </p>
                      </div>
                    </Media.Body>
                  </Media>
                </div>
                <div className="card p-2 shadow-sm mt-3">
                  <Media>
                    <img
                      width={80}
                      height={80}
                      className="mr-3"
                      src="/images/default/chair.png"
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <p>
                        Thank you Placing your order to Gadage Guy for Hot
                        Deal.Our Customer Manager will contact you soon
                      </p>
                      <p className="text-right small">May,Aug 29 2020</p>
                    </Media.Body>
                  </Media>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
