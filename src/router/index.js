 import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import CourseTable from "../components/CourseTable";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: CourseTable
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
