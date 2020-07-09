 import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import TeacherMain from "../views/teacher/TeacherMain";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: 'Teacher',
      name: 'TeacherMain',
      component: TeacherMain
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
