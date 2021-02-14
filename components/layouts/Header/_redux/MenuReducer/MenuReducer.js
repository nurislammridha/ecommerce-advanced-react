import * as Types from "../Type/Types";

// Initial state
const initialState = {
    isLoading: false,
    categoriesMenuList: []

};
const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CATEGORY_LIST:
            return {
                categoriesMenuList: action.payload,
            }
        default:
            break;
    }
    return { ...state }
};

export default MenuReducer;