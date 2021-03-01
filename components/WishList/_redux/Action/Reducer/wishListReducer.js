import * as Types from "../../Types";

// Initial state
const initialState = {

};

const wishListReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.WISHLIST_ADDED:
            console.log('action.payload :>> ', action.payload);
            return {
                ...state,
            }

        default:
            break;
    }
    return newState;
};

export default wishListReducer;
