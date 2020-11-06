import React from 'react';
import MainLayout from '../components/layouts/Layout';
import Sidebar from '../components/layouts/Sidebar/sidebar';
import { Card, Media } from 'react-bootstrap';
import PageHeding from '../components/pages/sidbarLayout/PageHeding';
import Rater from "react-rater";

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
        <div className="searchSection card shadow-sm bg-light pl-5 ">
        <div class="container-fluid">
          <div className="row">
            <div className="col-md-2 ml-2">
              <Sidebar />
            </div>
            <div className="searchCardText bg-white col-md-9 border mt-5 pb-5 mb-5">
              <div className="row">
            <div className="sidebar-card-title searchtext pl-3 pt-3">
                  <h2>Showing search results for "products"</h2>
                  <p>You can also search from category</p>
                </div>
                <div className="searchBorder border-top"></div>
<div class="card mt-3 ml-5" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
  </div>
</div>
<div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-5" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right mb-0">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-5" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right ">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right ">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right ">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right ">
                 <Rater total={5} rating={2} />
                 
                 </div>
                 </div>
  </div>
  <div class="card mt-3 ml-1" style={{width:"18%"}}>
  <img class="card-img-top searchImg" src="/images/default/chair.png" alt="Card image cap"/>
  <div class="searchBody card-body mt-n4">
    <h5 class="card-title text-danger mb-0">৳ 134</h5>
    <p className="text-secondary mb-0">৳ 222 </p>
    <span className="text-warning pl-1">30% off</span>
      <h1 className="mb-0">Product title...</h1>
      <div className="clearfix"></div>
    <p class="card-text mb-0 float-left">Ratings:</p>
    
    <div className=" float-right ">
                 <Rater total={5} rating={2} />
                 
                 </div>
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
