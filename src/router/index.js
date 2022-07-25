import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from "@/pages/Detail"
//先把VueRouter的原型对象push 保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
//重写push|replace
//第一个参数：告诉原来的push方法 你往哪里跳转（传递那些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
// 配置路由
export default new VueRouter({
    routes: [{
            path: '/detail/:skuid',
            component: Detail,
            meta: {
                show: true
            }
        }, {
            path: '/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            meta: {
                show: true
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            },

        },
        //重定向 在项目跑起来的时候 访问/ 立马定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {
            y: 0
        }
    }
})