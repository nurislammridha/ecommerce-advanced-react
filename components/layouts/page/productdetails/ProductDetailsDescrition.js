import React, { Component } from "react";

const ProductDetailsDescrition = ({ router }, props) => {
  return (
    <>
      <div className="homebanner pb">
        <div className="container ">
          <div className="productdescriptiondetails">
            <div className="row">
              <div className="col-12">
                <div className="productdescriptiontext">
                  <h1>Description</h1>
                  <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                    sem. Vivamus suscipit tortor eget felis porttitor volutpat.
                    Cras ultricies ligula sed magna dictum porta. Praesent
                    sapien massa, convallis a pellentesque nec, egestas non
                    nisi. Curabitur non nulla sit amet nisl tempus convallis
                    quis ac lectus. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet
                    ligula. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur
                    non nulla sit amet nisl tempus convallis quis ac lectus.
                    Pellentesque in ipsum id orci porta dapibus. Quisque velit
                    nisi, pretium ut lacinia in, elementum id enim. Nulla quis
                    lorem ut libero malesuada feugiat. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Cras ultricies ligula sed
                    magna dictum porta. Pellentesque in ipsum id orci porta
                    dapibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="productdescription">
                <img src="/images/default/table.png" />
              </div>

              <div className="productdescription two">
                <img src="/images/default/fournitureimg.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDescrition;
