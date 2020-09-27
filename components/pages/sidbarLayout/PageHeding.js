import React, { Component } from 'react';

const PageHeding = ({ router }, props) => {
  console.log('props', props);
  return (
    <>
      <div className="card card-middle">
        <div className="sidebar-card-title">
          <h2>{props.name}</h2>
        </div>
      </div>
    </>
  );
};

export default PageHeding;
