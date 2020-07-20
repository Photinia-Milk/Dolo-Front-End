    import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import CourseAll from  "../../../../../../src/views/student/components/CourseSelect/components/CourseAll";
const localVue = createLocalVue();
localVue.use(ElementUI);

const wrapper=mount(CourseAll,{
    mocks:{
        getAllCourse: async ()=>{return "get success"}
    },
    localVue
});

describe('init', function () {
    it('init data',()=>{
        const pageInfo={startIndex:1,pageSize:10};
        const userList= [];
        const category1=['民族生课程','必修课程','通识课','选修课'];
        const checkboxGroup=[];
        const name= "亚托克斯";
        const searchName= "";
        const coursesData= [];
        const  updateForm= {
            Id: "",
            Title: "",
            Introduction: ""
        };
        const rules= {
            Title: [
                { required: true, message: "请输入课程名", trigger: "change" },
                { min: 2, max: 10, message: "长度在 2到 10 个字符", trigger: "blur" }
            ],
            Introduction:[
                {
                    required: true,
                    message: "请填写课程信息,否则无法通过喔~",
                    trigger: "change"
                }
            ]
        };
        const formLabelWidth= "6em";

        expect(wrapper.vm.pageInfo).toEqual(pageInfo);
        expect(wrapper.vm.userList).toEqual(userList);
        expect(wrapper.vm.category1).toEqual(category1);
        expect(wrapper.vm.checkboxGroup).toEqual(checkboxGroup);
        expect(wrapper.vm.name).toEqual(name);
        expect(wrapper.vm.searchName).toEqual(searchName);
        expect(wrapper.vm.coursesData).toEqual(coursesData);
        expect(wrapper.vm.loading).toBeTruthy();
        expect(wrapper.vm.releForm).toBeUndefined();
        expect(wrapper.vm.updateForm).toStrictEqual(updateForm);
        expect(wrapper.vm.rules).toEqual(rules);
        expect(wrapper.vm.dialogFormVisible).toBeFalsy;
        expect(wrapper.vm.formLabelWidth).toEqual(formLabelWidth);
        //mock
        expect(wrapper.vm.getAllCourse()).resolves.toEqual("get success");
    });
    it('init create',  async ()=> {
        wrapper.vm.pageInfo="123";
        expect(wrapper.vm.getAllcourses()).resolves.toEqual("123get success")
    });
});