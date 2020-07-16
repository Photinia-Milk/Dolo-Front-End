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
export const getKB = () => {
  return axios.get(`${local_host}/kb/`);
};

//删除自己选的课程,提供select_course表的id
export const delSelectCourse = scid => {
  return axios.delete(`${local_host}/selectcourse/` + scid + '/');
};

//根据*课程号(sub_logic_id)查询开设课程
export const getCourseBySubLogicId = sub_logic_id => {
  return axios.get(`${local_host}/course/` + sub_logic_id + '/');
};

//根据*课程名(sub_name)查询开设课程
export const getCourseByName = name => {
  return axios.get(`${local_host}/course/?s=` + name);
};

//选课
export const createSelectCourse = params => {
  return axios.post(`${local_host}/selectcourse/`, params);
};

//----------------------------------[向网络上的指定URI发起请求]----------------------------------

//GET请求
export const getURI = uri => {
  return axios.get(uri);
};
