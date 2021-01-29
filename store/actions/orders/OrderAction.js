import * as Types from "../../Types";

export const orderInputChange = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.ORDER_INPUT_CHANGE, payload: formData });
}