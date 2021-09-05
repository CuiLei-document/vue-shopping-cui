import Toast from './Toast.vue'
const obj = {}

obj.install = function (Vue) {
    // 创建 组件构造器
    const toastConstructor = Vue.extend(Toast)
    // 创建 组件对象
    const toast = new toastConstructor()
    // 将组件挂载到某个 div上
    toast.$mount(document.createElement('div'))
    //toast.$el 对应的就是 这个div 我们把div挂载到 body 上
    document.body.appendChild(toast.$el) 
    Vue.prototype.$toast = toast
}

export default obj