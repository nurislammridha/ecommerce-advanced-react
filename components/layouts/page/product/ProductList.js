import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, GetCategoryList } from '../../../../store/redux/products/actions/ProductAction';
import LoadingSkelleton from '../../../master/skelleton/LoadingSkelleton';
import ProductMiniCard from './ProductMiniCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ProductList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const filterProduct = useSelector((state) => state.product.filterProduct);
  const { category, brand, min_price, max_price } = filterProduct;
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(GetCategoryList())
  }, []);

  return (
    <>
      {
        (category !== null || brand !== null || min_price !== null || max_price !== null) && (
          <div className={classes.root}>
            <p>
              Filtered By:
              {
                category != null &&
                <Button className="filterClass ml-2">
                  Category: {(category !== null ? category.name : '')}
                  <span className="ml-2 cursor-pointer"><FontAwesomeIcon icon={faTimesCircle} /></span>
                </Button>
              }
              {
                brand != null &&
                <Button className="filterClass ml-2">
                  Brand: {(brand !== null ? brand.name : '')}
                  <span className="ml-2 cursor-pointer"><FontAwesomeIcon icon={faTimesCircle} /></span>
                </Button>
              }

              {
                min_price != null &&
                <Button className="filterClass ml-2">
                  Min Price: {(min_price !== null ? min_price : '')}
                  <span className="ml-2 cursor-pointer"><FontAwesomeIcon icon={faTimesCircle} /></span>
                </Button>
              }

              {
                max_price != null &&
                <Button className="filterClass ml-2">
                  Max Price: {(max_price !== null ? max_price : '')}
                  <span className="ml-2 cursor-pointer"><FontAwesomeIcon icon={faTimesCircle} /></span>
                </Button>
              }

            </p>
          </div>
        )
      }

      {loading && (
        <LoadingSkelleton
          alignment="vertical"
          count={5}
          width={220}
          height={250}
        />
      )}

      <div className="row">
        {!loading && products.length === 0 && (

          <div className="col-md-10 text-center">
            <h1>Search Product Not Found</h1>
            <h6>We're sorry. We cannot find any matches for your search term.</h6>
            <h5 style={{ fontSize: "70px", marginTop: "10px" }}><FontAwesomeIcon icon={faSearch} /></h5>
          </div>
        )}
        {products.length > 0 &&
          products.map((product, index) => (
            <div className="col-xl-2 col-lg-3 col-6" key={index}>
              <ProductMiniCard product={product} />
            </div>
          ))}
      </div>
    
    </>
  );
}

export default ProductList;