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
  return axios.get(`${local_host}/api/student/course_valid`,{params:param});
};

//登录
export const searchCourse = params => {
  return axios.get(`${local_host}/api/student/course_search`, {params:params});
};
//获取一门课的多个教学班
export const getSection = param => {
  return axios.get(`${local_host}/api/student/section_valid`,{params:param});
};

//选课
export const selectCourse = param => {
  return axios.post(`${local_host}/api/student/course_select`,param);
};
//显示课程表
export const showCourseTable=param => {
  return axios.get(`${local_host}/api/student/course_list`,{params:param});
};
//退课
export const dropOneCourse = param => {
  return axios.post(`${local_host}/api/student/course_drop`,param);
};
