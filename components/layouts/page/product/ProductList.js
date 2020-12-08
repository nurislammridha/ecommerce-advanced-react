import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../../../store/redux/products/actions/ProductAction';
import LoadingSkelleton from '../../../skelleton/LoadingSkelleton';
import ProductMiniCard from './ProductMiniCard';

const ProductList = () => {

    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading);
    const products = useSelector((state) => state.product.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return ( 
        <>
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
              <div>No Product Found !!</div>
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