import * as Types from "../../Types";

const initialState = {
  userInputData: {
    first_name: null,
    surname: null,
    last_name: null,
    email: null,
    username: null,
    phone_no: null,
    password: '123456',
    language: "en",
    avatar: null,
    banner: null,
    address: null
  },
  loading: false,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_USER_INPUT_DATA:
      const userInputData = { ...state.userInputData };
      userInputData[action.payload.name] = action.payload.value;
      return {
        ...state,
        userInputData
      };
    case Types.UPDATED_USER_DATA:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case Types.GET_USER_UPDATED_DATA:
      let getUserInput = { ...state.userInputData };
      getUserInput = action.payload;
      return {
        ...state,
        userInputData: getUserInput,
      }
    default:
      return {
        ...state,
      };
      break;
  }
};

export default UserReducer;
