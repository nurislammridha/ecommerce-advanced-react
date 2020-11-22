import * as Types from "../../../Types";

const initialState = {
  notifications: [],
  loading: false,
  error: null,
};

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_NOTIFICATIONS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case Types.GET_NOTIFICATIONS_LIST:
      return {
        ...state,
        notifications: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default NotificationReducer;
