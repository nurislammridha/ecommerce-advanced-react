import * as Types from "../../Types";

const initialState = {
  pollList: [],
  isLoading: false,
  error: null,
};

const AudiencePoll = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_AUDIENCE_POLL:
      return {
        ...state,
        pollList: action.payload.pollList,
        isLoading: action.payload.isLoading,
        errors: null,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default AudiencePoll;
