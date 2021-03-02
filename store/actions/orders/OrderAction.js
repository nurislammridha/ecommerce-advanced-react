import * as Types from "../../Types";
import moment from "moment";
import Axios from "axios";
import { showToast } from "../../../components/master/Helper/ToastHelper";
import { getCartsAction } from "./CartAction";
export const orderInputChange = (name, value) => (dispatch) => {
    const formData = {
        name: name,
        value: value
    }
    dispatch({ type: Types.ORDER_INPUT_CHANGE, payload: formData });
}
export const getOrderInfo = (orderInputData, carts, totalQuantity, shippingCost, totalPrice) => (dispatch) => {
}

export const storeSells = (orderInputData, carts, totalQuantity, shippingCost, totalPrice) => (dispatch) => {
    const getUserData = JSON.parse(localStorage.getItem('loginData'))
    const { userData } = getUserData;
    let sale_lines = [];
    carts.forEach((item) => {
        const singleItem = {
            item_id: item.productID,
            quantity: item.quantity,
            unit_price: item.price,
            unit_price_inc_tax: item.price,
            discount_amount: 0,
            item_tax: 0
        }
        sale_lines.push(singleItem)
    })

    const orderPlaceData = {
        business_id: userData.business_id,
        created_by: 1,
        type: "sell",
        status: true,
        delivery_status: 'not_delivered',
        payment_status: 'due',
        title: 'Ecommerce Sale',
        invoice_no: null,
        ref_no: null,
        transaction_date: moment().format("YYYY-MM-DD"),
        total_before_tax: totalPrice,
        tax_amount: 0,
        discount_type_id: 1,
        tax_id: 1,
        discount_amount: 0,
        shipping_details: '', //this is shipping address
        order_quantity: totalQuantity,
        shipping_charges: shippingCost,
        additional_notes: '',
        staff_note: '',
        paid_total: 0,
        due_total: shippingCost + totalPrice,
        final_total: shippingCost + totalPrice,
        sale_lines: sale_lines,
    }
    let response = {
        status: false,
        isLoading: true,
        orderData: {}
    }
    dispatch({ type: Types.ORDER_SUBMIT, payload: response })
    Axios.post(`${process.env.NEXT_PUBLIC_API_URL}sales`, orderPlaceData)
        .then((res) => {
            if (res.data.status) {
                response.status = res.data.status;
                response.orderData = res.data.data;
                response.isLoading = false;
                localStorage.removeItem("carts");
                dispatch(getCartsAction());
                showToast('success', res.data.message);
                dispatch({ type: Types.ORDER_SUBMIT, payload: response });
            }
        }).catch((err) => {
            const responseLog = err.response;
            response.isLoading = false;
            if (typeof responseLog !== 'undefined') {
                const { request, ...errorObject } = responseLog;
                showToast('error', responseLog.data.message);
                dispatch({ type: Types.ORDER_SUBMIT, payload: response })
            }
        })

}