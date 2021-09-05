import { ADD_CONTENT, ADD_TO_CART } from "./mutations-types"

export default {
    [ADD_CONTENT](state, payload) {
        payload.count += 1
    },
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    }
}