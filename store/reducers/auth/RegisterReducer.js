import * as Types from "../../Types";

// Initial state
const initialState = {
    registerInput: {
        first_name: '',
        surname: '',
        last_name: '',
        email: '',
        phone_no: null,
        password: '',
        password_confirmation: '',
        language: "en"
    }
};
const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_REGISTER_INPUT_FIELD:
            const registerInput = { ...state.registerInput };
            registerInput[action.payload.name] = action.payload.value
            return {
                ...state,
                registerInput
            };
            case Types.REGISTER_FIRST_STEP: 
            return {
                ...state,
                registerInput: action.payload
            }
        default:
            break;
    }
    return state;
};

export default RegisterReducer;