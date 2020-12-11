import React, { Component, useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rater from "react-rater";
import { Card, Media } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../../../../store/redux/notifications/actions/NotificationAction";
import LoadingSkelleton from "../../../master/skelleton/LoadingSkelleton";

const Notification = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.notification.loading);
  const notifications = useSelector((state) => state.notification.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
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
            <div className="card card-middle">
              <div className="sidebar-card-title">
                <h2>All Notifications</h2>
              </div>
            </div>

            {!loading && notifications.map.length === 0 && (
              <div>No Notification Found !!</div>
            )}

            {loading && (
              <LoadingSkelleton
                alignment="vertical"
                count={1}
                width={820}
                height={120}
              />
            )}

            {notifications.map.length > 0 && (
              <>
                {notifications.map((notification, index) => (
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
                ))}
              </>
            )}
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
    </>
  );
};

export default Notification;
