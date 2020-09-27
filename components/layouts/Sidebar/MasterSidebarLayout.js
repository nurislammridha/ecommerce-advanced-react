import React, { Component } from 'react';
import MainLayout from '../Layout';
import Sidebar from './sidebar';

const MasterSidebarLayout = ({ router }, props) => {
  console.log('props', props.children);
  return (
    <>
      <MainLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">{props.children}</div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default MasterSidebarLayout;
