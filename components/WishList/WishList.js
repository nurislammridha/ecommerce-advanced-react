import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WishListAdded } from './_redux/Action/wishListAction'
const WishList = ({ product }) => {
    const dispatch = useDispatch()
    const [isWishList, setIsWishList] = useState(false)
    const isLoading = ((state) => state.wishListReducer.isLoading)
    const handleAddedWishList = (product) => {
        setIsWishList(true);
        dispatch(WishListAdded(product.id))
    }
    return (
        <i onClick={() => handleAddedWishList(product)} className={`fas fa-heart ${isWishList === true && 'text-danger'}`}></i>
    );
};

export default WishList;