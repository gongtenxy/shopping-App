import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/home/Home.vue'
// import Login from '../views/login/Login.vue'
// import Register from '../views/register/Register.vue'
// import Shop from '../views/shop/Shop.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    // 在已登录情况，点登录到首页
    beforeEnter: (to, from, next) => {
      if (localStorage.isLogin === 'true') {
        // 登录成功，跳转首页
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    beforeEnter: (to, from, next) => {
      // 如果已经登录, 跳到注册页面会跳回首页
      if (localStorage.isLogin === 'true') {
        next({ name: 'Home' })
      } else {
        // 如果没有登录, 可以正常跳转到注册页
        next()
      }
    }
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('../views/shop/Shop')
  },
  {
    path: '/order-confirmation/:shopId',
    name: 'OrderConfirmation',
    component: () => import('../views/order/OrderConfirmation')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (
    localStorage.isLogin === 'true' ||
    to.name === 'Login' ||
    to.name === 'Register'
  ) {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
