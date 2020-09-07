    import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import CourseAll from  "../../../../../../src/views/student/components/CourseSelect/components/CourseAll";
const localVue = createLocalVue();
localVue.use(ElementUI);

// let res={
//     status:200,
//     data:''
// };
    jest.mock("axios",()=>({
        post:()=>Promise.resolve({data:1,status:200}),
        get:()=>Promise.resolve({data:1,status:200})
    }));

const wrapper=mount(CourseAll,{
    stubs:{

    },
    localVue
});


describe('init', function () {
    it('init data',()=>{
        const pageInfo={startIndex:1,pageSize:7};
        // const userList= [];
        const category1=['民族生课程','必修课程','通识课','选修课'];
        const checkboxGroup=[];
        const searchName= "";
        // const coursesData= [];
        const  updateForm= {
            Id: "",
            courseName: "",
            description: ""
        };
        const rules= {
            courseName: [
                { required: true, message: "请输入课程名", trigger: "change" },
                { min: 2, max: 10, message: "长度在 2到 10 个字符", trigger: "blur" }
            ],
        };
        const formLabelWidth= "6em";

        expect(wrapper.vm.pageInfo).toEqual(pageInfo);
        // expect(wrapper.vm.userList).toEqual(userList);
        expect(wrapper.vm.category1).toEqual(category1);
        expect(wrapper.vm.checkboxGroup).toEqual(checkboxGroup);
        expect(wrapper.vm.trySearchName).toEqual('');
        expect(wrapper.vm.searchName).toEqual(searchName);
        expect(wrapper.vm.coursesData).toBeUndefined();
        expect(wrapper.vm.loading).toBeFalsy();
        expect(wrapper.vm.releForm).toBeUndefined();
        expect(wrapper.vm.updateForm).toStrictEqual(updateForm);
        expect(wrapper.vm.rules).toEqual(rules);
        expect(wrapper.vm.dialogFormVisible).toBeFalsy();
        expect(wrapper.vm.formLabelWidth).toEqual(formLabelWidth);
        //mock
        // res.status=200;
        // expect(wrapper.vm.getAllCourse(pageInfo)).resolves.toEqual(res);
    });
    it('init create',  async ()=> {
        // res.status=200;
        await wrapper.vm.getAllcourses();
        expect(wrapper.vm.loading).toBeFalsy();
    });
});
