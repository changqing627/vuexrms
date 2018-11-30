import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import  Login from '@/components/login'
// import Index from '@/components/index'
Vue.use(Router)
const Login=()=>import('@/components/login')
const Index=()=>import('@/components/index')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    }
  ]
})
