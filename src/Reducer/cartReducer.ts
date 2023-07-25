import { produce } from "immer";

const intialState = {
    items: []
} as { items: any[] }

const cartReducers = (state = intialState, action: any) => {
        return produce(state, draftState => {
        switch (action.type) {
            case "CART/ADD":
                const existProduct = draftState.items.findIndex((item: any) => item.id === action.payload.id)
                // -1
                if (existProduct === -1) {
                    draftState.items.push(action.payload)
                } else {
                    draftState.items[existProduct].quantity++;
                }
                break;
            case "CART/INCREASE":
                draftState.items.find(item => item.id == action.payload).quantity++
                break;
            case "CART/DECREASE":
                const product = draftState.items.find(item => item.id == action.payload);
                product.quantity--;
                if (product.quantity < 1) {
                    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
                    if (confirm) draftState.items = draftState.items.filter(item => item.id !== product.id);
                    product.quantity = 1;
                }
                break;
            default:
                return state;
        }
    })
}
export default cartReducers;