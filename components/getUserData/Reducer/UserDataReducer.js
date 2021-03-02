import * as Types from "../Types/Types";

const initialState = {
  userData: {},
  access_token: null,
};

const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_STORAGE_DATA:
        console.log('action.payload :>> ', action.payload);
      return {
        ...state,
        // userData: action.payload.userData,
        // access_token: action.payload.tokenData,
        // loading: action.payload,
      };
  
    default:
      return {
        ...state,
      };
      break;
  }
};
export default UserDataReducer;
