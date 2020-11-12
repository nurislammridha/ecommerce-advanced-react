import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { Card, Media } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchWallets } from "../../../../store/redux/wallets/actions/WalletAction";
import LoadingSkelleton from "../../../skelleton/LoadingSkelleton";

const Wallet = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.wallet.loading);
  const wallets = useSelector((state) => state.wallet.wallets);

  useEffect(() => {
    dispatch(fetchWallets());
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar card">
              <ul>
                <li>
                  <a href="">My Profile</a>
                </li>
                <li>
                  <a href="">Account Setting</a>
                </li>
                <li>
                  <a href="">My Card</a>
                </li>
                <li>
                  <a href="">My Wish list</a>
                </li>
                <li>
                  <a href="">My Orders</a>
                </li>
                <li>
                  <a href="">My Wallet</a>
                </li>
                <li>
                  <a href="">My Gift card</a>
                </li>
                <li>
                  <a href="">My Vouchar</a>
                </li>
                <li>
                  <a href="">Notifications</a>
                </li>
                <li>
                  <a href="">Audience Pool</a>
                </li>
                <li>
                  <a href="">My Reviews</a>
                </li>
                <li>
                  <a href="">Refferal Programme</a>
                </li>
              </ul>
            </div>
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

                  {loading && (
                    <LoadingSkelleton
                      alignment="vertical"
                      count={1}
                      width={170}
                      height={80}
                    />
                  )}
                  
                  {wallets.map.length > 0 && (
                    <>
                      {wallets.map((wallet, index) => (
                        <div className="singleWallet card mt-2 ">
                          <p className="text-center lineheight">3225</p>
                          <p className="text-center">Wallet Balance</p>
                        </div>
                      ))}
                    </>
                  )}
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

                  {!loading && wallets.map.length === 0 && (
                    <div>No Transaction Found !!</div>
                  )}

                  {loading && (
                    <LoadingSkelleton
                      alignment="vertical"
                      count={1}
                      width={590}
                      height={100}
                    />
                  )}

                  {wallets.map.length > 0 && (
                    <>
                      {wallets.map((wallet, index) => (
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
                      ))}
                    </>
                  )}

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
    </>
  );
};

export default Wallet;
