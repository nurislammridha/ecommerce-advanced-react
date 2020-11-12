import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendors } from "../../../../store/redux/vendors/actions/VendorAction";
import LoadingSkelleton from "../../../skelleton/LoadingSkelleton";

const VendorList = ({ router }, props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.vendor.loading);
  const vendors = useSelector((state) => state.vendor.vendors);

  useEffect(() => {
    dispatch(fetchVendors());
  }, []);

  return (
    <>
      <div className="HomeBrand ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionTitle">
                <h2>Shop by Stores</h2>
              </div>
            </div>
            <div className="viewTopRight">
              <button className="viewButton brandbutton">
                View all
                <FaArrowRight />
              </button>
            </div>
          </div>

          {loading && (
            <LoadingSkelleton
              alignment="vertical"
              count={6}
              width={100}
              height={70}
            />
          )}

          <div className="row pt storepadding">
            {!loading && vendors.map.length === 0 && (
              <div>No Store Found !!</div>
            )}

            {vendors.map.length > 0 && (
              <>
                {vendors.map((vendor, index) => (
                  <div className="StoreImg" key={index}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}images/vendors/${vendor.logo}`}
                      alt=""
                    />
                    <p className="text-center font-weight-bold">
                      {vendor.name}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorList;
