import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card, Media } from 'react-bootstrap';
import PageHeding from '../components/pages/sidbarLayout/PageHeding';
import { FaThumbsUp } from 'react-icons/fa';

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
              <div className="card audienceContainer mt-3">
                <h2>Which Product do you want</h2>
                <div className="pool-container d-flex flex-row">
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
                  </div>
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
                  </div>
                </div>
              </div>
              <div className="card audienceContainer mt-3">
                <h2>Which Product do you want</h2>
                <div className="pool-container d-flex flex-row">
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
                  </div>
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
                  </div>
                </div>
              </div>
              <div className="card audienceContainer mt-3">
                <h2>Which Product do you want</h2>
                <div className="pool-container d-flex flex-row">
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
                  </div>
                  <div className="p-2 shadow-sm mt-3 align-items-center media-container">
                    <Media className="audienceMedia">
                      <img
                        width={80}
                        height={80}
                        className="mr-3"
                        src="/images/default/chair.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body className="audienceMediaBody">
                        <h3>Product title (with single page link)</h3>
                        <div>
                          <div className="text-left thumbsFont">
                            <FaThumbsUp />
                          </div>

                          <p className="text-right vote">Vote 14 </p>
                        </div>
                      </Media.Body>
                    </Media>
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
