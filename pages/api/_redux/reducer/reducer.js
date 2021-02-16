import * as Types from "../Types/Types";

const initialState = {
    sliderList: [],
    isLoading: false
}

const HomeCarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_HOME_CAROUSEL_LIST:
            return {
                ...state,
                sliderList: action.payload,
            }
        default:
            return {
                ...state,
            };
            break;
    }
};


export default HomeCarouselReducer;
