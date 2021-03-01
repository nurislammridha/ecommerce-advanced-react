import * as Types from "../Types/Types";

// Initial state
const initialState = {

};

const wishListReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case Types.WISHLIST_ADDED:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }

        default:
            break;
    }
    return newState;
};

export default wishListReducer;
