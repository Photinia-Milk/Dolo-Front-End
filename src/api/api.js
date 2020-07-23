import axios from 'axios';

//本地测试环境
let local_host = 'http://localhost:8088';

//----------------------------------[登录用]----------------------------------

//登录
export const login = params => {
  return axios.post(`${local_host}/api/login/`, params);
};

//----------------------------------[选课页用]----------------------------------

//获取课程表
export const getAllCourse = param => {
  console.log(param);
  return axios.get(`${local_host}/api/student/course_valid`,{params:param});
};

//登录
export const searchCourse = params => {
  return axios.get(`${local_host}/api/student/course_search`, {params:params});
};
