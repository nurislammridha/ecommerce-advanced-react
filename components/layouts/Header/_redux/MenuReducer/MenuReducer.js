import * as Types from "../Type/Type";

// Initial state
const initialState = {
    isLoading: false,
    categoriesMenuList : []
   
};
const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CATEGORY_LIST: 
        console.log('action.payload :>> ', action.payload);
        return{

        }
   
        default:
            break;
    }
    return {...state}
};

export default MenuReducer;