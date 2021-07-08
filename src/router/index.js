import Vue from 'vue'
import VueRouter from 'vue-router'
import goodPageRouter from '@/router/good/good.js'


const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Profile = () => import('@/views/profile/Profile.vue')


Vue.use(VueRouter)

let mainPageRouter = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]
//  主路由增加增路由
mainPageRouter=mainPageRouter.concat(goodPageRouter)



export default new VueRouter({
  routes:mainPageRouter,
  mode:'history'
})
