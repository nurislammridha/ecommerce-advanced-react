import * as Types from "../Types/Types";

const initialState = {
  userData: null,
  access_token: null,
};

const UserDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_STORAGE_DATA:
      return {
        ...state,
        userData: action.payload.userData,
        access_token: action.payload.access_token,
      };
  
    default:
      return {
        ...state,
      };
      break;
  }
};
export default UserDataReducer;
