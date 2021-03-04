import * as Types from "../../Types";
import moment from "moment";
const initialState = {
    isLoading: false,
    orderInputData: {
        Receiveremail: '',
        contactNumber: '',
        shipping_details: '',
        optionaEmail: ''
    },
    placeOrder: {
        business_id: 1,
        created_by: 1,
        type: 'sell',
        status: true,
        delivery_status: 'not_delivered',
        payment_status: 'due',
        title: 'Ecommerce Sale',
        invoice_no: null,
        ref_no: null,
        transaction_date: moment().format("YYYY-MM-DD"),
        total_before_tax: 0,
        tax_amount: 0,
        discount_type_id: 1,
        tax_id: 1,
        discount_amount: 0,
        shipping_details: '', //this is shipping address
        order_quantity: null,
        shipping_charges: null,
        additional_notes: '',
        staff_note: '',
        paid_total: 0,
        due_total: null,
        final_total: null,
        sale_lines: [
            {
                item_id: null,
                quantity: null,
                unit_price: null,
                unit_price_inc_tax: 120,
                discount_amount: 0,
                item_tax: 0
            }
        ]
    },
    isLoading: false,
};

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ORDER_INPUT_CHANGE:
            const orderInputData = { ...state.orderInputData };
            orderInputData[action.payload.name] = action.payload.value;
            return {
                ...state,
                orderInputData: orderInputData,
            };
        case Types.ORDER_SUBMIT:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                orderInputData: initialState.orderInputData
            }
        default:
            return {
                ...state,
            };
            break;
    }
};

const calculateTotalQtyAndPrices = (carts) => {
    const response = {
        totalQuantity: 0,
        totalPrice: 0,
    }
    for (let i = 0; i < carts.length; i++) {
        response.totalQuantity += carts[i].quantity;
        response.totalPrice += (carts[i].offerPrice !== null && carts[i].price !== "" ? carts[i].quantity * carts[i].offerPrice : carts[i].quantity * carts[i].price);
        response.shippingCost = (response.totalPrice / 100) * 5;
    }
    return response;
}

export default OrderReducer;
