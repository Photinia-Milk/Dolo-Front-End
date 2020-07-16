
import Vue from 'vue'
import VueRouter from 'vue-router'
import TeacherMain from "../views/teacher/TeacherMain";
import PublishCourse from "../views/teacher/components/publish/PublishCourse";
import Student from "../views/student/Student";
import Login2 from "../views/login/Login2";
import home from "../views/student/components/home/home";
import courseSelect from "../views/student/components/CourseSelect/courseSelect";
import courseTable from "../views/student/components/courseTable/courseTable";

 //import CourseTable from "../components/CourseTable";
Vue.use(VueRouter)
 // const ti import(/* webpackChunkName: "timeTable" */ '../components/CourseTable')
  const routes = [
    {
      path:'/',
      name:'Login2',
      component:Login2
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      children: [
        {
          path: '/',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'courseSelect',
          component: courseSelect
        },
        {
          path: 'courseTable',
          component: courseTable
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
      component: TeacherMain,
      children: [
        {
          path: '/publish',
          name: 'PublishCourse',
          component: PublishCourse,
        }
      ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
