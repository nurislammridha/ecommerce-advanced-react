import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card, Media } from 'react-bootstrap';
import PageHeding from '../components/pages/sidbarLayout/PageHeding';

export default function giftcard(props) {
  return (
    <>
      <MainLayout>
      {/* <div className="card p-2 shadow-sm ">
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              
              <div className="card card-middle">
                <div className="sidebar-card-title searchtext pl-3 pt-3">
                  <h2>Showing search results for "products"</h2>
                  <p>You can also search from category</p>
                </div>
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
                <div className="card pt-2 shadow-sm mt-3">
                <div className="sidebar-card-title searchtext pl-3 pt-3 border-bottom ">
                  <h2>Showing search results for "products"</h2>
                  <p>You can also search from category</p>
                </div>
                <div className="border-bottom"></div>

                </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-2">
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/default/chair.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   
  </Card.Body>
</Card>
              </div>
            </div>
          </div>
        </div>
        </div> */}
        <div className="card p-2 shadow-sm ">
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/images/default/chair.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  
  </Card.Body>
</Card>
            </div>
            </div>
            </div>
            </div>

      </MainLayout>
    </>
  );
}
