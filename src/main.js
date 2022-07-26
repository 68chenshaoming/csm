import Vue from 'vue'
import App from './App.vue'

//引入饿了么组件
import {
  Icon
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//三级联动组件   --全局组件
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from '@/components/Pagination'
//第一个参数：全局组件的名字  第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
Vue.config.productionTip = false
//引入MockSever.js---mock数据
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
Vue.use(Icon);
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  router,
  //注册组件，组件实例的身上会对出一个属性&store属性
  store

}).$mount('#app')