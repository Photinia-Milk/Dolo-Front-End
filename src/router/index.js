 import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import TeacherMain from "../views/teacher/TeacherMain";
 import Student from "../views/student/Student";
 import CourseSelect from "../views/student/components/CourseSelect";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      children: [
        {
          path: '/',
          redirect: 'course_select'
        },
        {
          path: 'course_select',
          component: CourseSelect
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'SelectCourse',
    //   component: SelectCourse
    // },
    {
      path: '/teacher',
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
