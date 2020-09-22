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
              <div className="p-3">
                <h3 className="referralHeading">
                  Make Money on Maccafe to invite friends and family
                </h3>
                <p>
                  if someone use your invaitation code during Registration you
                  will get 10tk for every single Registration,Remember Register
                  must be from a new number and different device if not then
                  referral will not be counted
                </p>
                <div className="requestingPayment d-flex flex-grow mb-4">
                  <h3>Requesting for Payment:</h3>
                  <input type="text" className="referalInput" />
                  <button>Claim</button>
                </div>

                <div className="row mb-md-3">
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="referalCardBg p-4">
                      <p className="text-center font-weight-bold">
                        Your invaitaion code
                      </p>
                      <p className="text-center shareCode small">
                        Share this code
                      </p>
                      <p className="text-center card-value font-weight-bold codeValue">
                        246789
                      </p>
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
