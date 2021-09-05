import { ADD_CONTENT, ADD_TO_CART } from "./mutations-types"

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                context.commit(ADD_CONTENT, oldProduct)
                resolve('商品加一')
            } else {
                payload.check = true
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resolve('添加商品成功')
            }
        })
    }
}