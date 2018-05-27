import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import Product from './views/Product.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: Product
    }
  ]
})
