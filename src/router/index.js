 import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import TeacherMain from "../views/teacher/TeacherMain";
 import PublishCourse from "../views/teacher/PublishCourse";

 //import CourseTable from "../components/CourseTable";
Vue.use(VueRouter)
 // const ti import(/* webpackChunkName: "timeTable" */ '../components/CourseTable')
  const routes = [
    {
      path: '/',
      name: 'Login',
      // component: timeTable()
      component: Login
    },
    {
      path: '/teacher',
      name: 'TeacherMain',
      component: TeacherMain,
      children: [
        {
          path: '/publish',
          name: 'PublishCourse',
          component: PublishCourse,
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
