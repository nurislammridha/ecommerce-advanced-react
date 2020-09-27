import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card, Media } from 'react-bootstrap';
import PageHeding from '../components/pages/sidbarLayout/PageHeding';

export default function giftcard(props) {
  return (
    <>
      <MainLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 ">
              {/* <PageHeding name="notification" /> */}
              <div className="card card-middle">
                <div className="sidebar-card-title">
                  <h2>Wallet</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="wallertbalanceContainer bg-white p-2 mt-2">
                    <div className="singleWallet card mt-2 ">
                      <p className="text-center lineheight">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2">
                      <p className="text-center">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2 ">
                      <p className="text-center lineheight">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2">
                      <p className="text-center">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2 ">
                      <p className="text-center lineheight">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2">
                      <p className="text-center">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                    <div className="singleWallet card mt-2 ">
                      <p className="text-center lineheight">3225</p>
                      <p className="text-center">Wallet Balance</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card p-2 shadow-sm mt-3 walletMedia">
                    <h3>Transaction History</h3>
                    <div className="singleTransaction">
                      <Media className="mt-3">
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
                          <p className="text-right giftCard-taka text-primary font-weight-bold">
                            + &#x9f3; 1229
                          </p>
                          <p className="waletDate">6 Aug 2113</p>
                        </Media.Body>
                      </Media>
                    </div>
                    <div className="singleTransaction">
                      <Media className="mt-3">
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
                          <p className="text-right giftCard-taka text-primary font-weight-bold">
                            + &#x9f3; 1229
                          </p>
                          <p className="waletDate">6 Aug 2113</p>
                        </Media.Body>
                      </Media>
                    </div>
                    <div className="singleTransaction">
                      <Media className="mt-3">
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
                          <p className="text-right giftCard-taka text-primary font-weight-bold">
                            + &#x9f3; 1229
                          </p>
                          <p className="waletDate">6 Aug 2113</p>
                        </Media.Body>
                      </Media>
                    </div>
                    <div className="singleTransaction">
                      <Media className="mt-3">
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
                          <p className="text-right giftCard-taka text-primary font-weight-bold">
                            + &#x9f3; 1229
                          </p>
                          <p className="waletDate">6 Aug 2113</p>
                        </Media.Body>
                      </Media>
                    </div>
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
