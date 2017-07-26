
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home.vue'
import Success from './components/success.vue'
import Inviate from './components/inviate.vue'

Vue.use(VueRouter)

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/home', component: Home, name: "Home" },
  { path: '/success', component: Success, name: "Success" },
  // { path: '/inviate', component: Inviate, name: "Invite" },
  { path: '', component: Home },
  { path: '*', redirect: '/home' }
]




// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export const router = new VueRouter({
  mode: 'history',
  routes,// （缩写）相当于 routes: routes
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next(vm => {
      console.log(vm)
    }) // 确保一定要调用 next()
  }
})