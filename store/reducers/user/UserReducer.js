import * as Types from "../../Types";

const initialState = {
  userInputData: {
    first_name: null,
    surname: null,
    last_name: null,
    email: null,
    username: null,
    phone_no: null,
    password: null,
    language: "en",
    avatar: null,
    banner: null
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
    default:
      return {
        ...state,
      };
      break;
  }
};

export default UserReducer;
