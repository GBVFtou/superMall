// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'



//  引用外部插件
// import style
// If you use Swiper 6.0.0 or higher
import 'swiper/css/swiper.min.css'  // 根据实际路径和文件修改
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import Toast from '@/components/common/toast'
Vue.use(Toast)

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
/* Vue.use(VueLazyload, {
  preLoad: 1.3,//距离当前dom距离页面底部的高度
  error: '',//加载失败显示的图片
  loading: '',//加载中显示的图片
  attempt: 1 // 图片加载失败，最多重试的次数
}); */

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */

new Vue({
  el:'#app',
  router,
	store,
  render: h => h(App),
})
