import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import CourseAll from  "../../../../../../src/views/student/components/CourseSelect/components/CourseAll";
import axios from 'axios'
const localVue = createLocalVue();
localVue.use(ElementUI);
jest.mock('axios');
localVue.prototype.$axios=axios;

const $message={
    success:jest.fn(()=>'success'),
    error:jest.fn(()=>'fails')
}




describe('CourseAll', function () {

    let wrapper;
    beforeEach(()=>{
        axios.mockClear();
        const mockData={data:{courseNum:1,courseList:[12]},status:200};
        axios.get.mockResolvedValue(mockData);
        wrapper=mount(CourseAll,{
            localVue,
            stubs:['app-button'],
            mocks:{
                $message
            }
        })
    });
    afterEach(()=>{
        wrapper.destroy();
    });

    it('init data',()=>{
        const pageInfo={startIndex:1,pageSize:7};
        const category1=['民族生课程','必修课程','通识课','选修课'];
        const checkboxGroup=[];
        const searchName= "";
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
        expect(wrapper.vm.category1).toEqual(category1);
        expect(wrapper.vm.checkboxGroup).toEqual(checkboxGroup);
        expect(wrapper.vm.trySearchName).toEqual('');
        expect(wrapper.vm.searchName).toEqual(searchName);
        expect(wrapper.vm.coursesData).toStrictEqual([12]);
        expect(wrapper.vm.loading).toBeFalsy();
        expect(wrapper.vm.updateForm).toStrictEqual(updateForm);
        expect(wrapper.vm.rules).toEqual(rules);
        expect(wrapper.vm.dialogFormVisible).toBeFalsy();
        expect(wrapper.vm.formLabelWidth).toEqual(formLabelWidth);
        expect(wrapper.vm.courseNumber).toBe(1);
    });

    it('change page', async ()=>{
        axios.mockClear();
        const mockData1={data:{courseNum:2,courseList:[11]},status:200};
        axios.get.mockResolvedValue(mockData1);
        await wrapper.vm.handleCurrentChange(1);
        expect(axios.get).toHaveBeenCalledTimes(3);
        wrapper.vm.$nextTick(()=>{
            expect(wrapper.vm.courseNumber).toBe(2);
            expect(wrapper.vm.coursesData).toStrictEqual([11])
        })
    });


    it('change page fails internet',async ()=>{
        axios.mockClear();
        axios.get.mockRejectedValue('error');
        await wrapper.vm.handleCurrentChange(1);
        expect(wrapper.vm.loading).toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(5);
        wrapper.vm.$nextTick(()=>{
            // expect($message.error).toBeCalled()
        })
    })

    it('search course with empty',async ()=>{
        wrapper.vm.searchName='';
        wrapper.vm.trySearchName='';
        await wrapper.vm.searchCourse();
        expect($message.error).toHaveBeenCalledTimes(2)
    })

    it('search course success',async ()=>{
        wrapper.vm.trySearchName='力学';
        wrapper.vm.searchName='';
        axios.mockClear();
        const mockData1={data:{courseNum:2,courseList:[11]},status:200};
        axios.get.mockResolvedValue(mockData1);
        await wrapper.vm.searchCourse();
        expect(axios.get).toHaveBeenCalledTimes(8);
        expect(wrapper.vm.pageInfo.startIndex).toBe(1);
        wrapper.vm.$nextTick(()=>{
            expect(wrapper.vm.courseNumber).toBe(2);
            expect(wrapper.vm.coursesData).toStrictEqual([11]);
            expect(wrapper.vm.loading).toBeFalsy();
            expect($message.success).toHaveBeenCalledTimes(1);
        })
    });

    it('search course fail because of internet',async ()=>{
        wrapper.vm.trySearchName='力学';
        wrapper.vm.searchName='';
        axios.mockClear();
        axios.get.mockRejectedValue('error');
        await wrapper.vm.searchCourse();
        expect(axios.get).toHaveBeenCalledTimes(10);
        expect(wrapper.vm.loading).toBe(true);
    })

    it('get all course fails because of internet',async ()=>{
        axios.mockClear();
        axios.get.mockRejectedValue('error');
        await wrapper.vm.getAllcourses();
        expect(axios.get).toHaveBeenCalledTimes(12);
        wrapper.vm.$nextTick(()=>{
            expect($message.error).toHaveBeenCalledTimes(3);
        })
    })

    it('get section',async ()=>{
        const row={iftrue:true};
        axios.mockClear();
        const mockData1={data:1,status:200};
        axios.get.mockResolvedValue(mockData1);
        await wrapper.vm.getSections(row);
        expect(axios.get).toHaveBeenCalledTimes(14);
        wrapper.vm.$nextTick(()=>{
            expect(row.iftrue).toBeFalsy();
            expect(row.detail).toBe(1);
            expect(wrapper.vm.hackReset).toBeTruthy()
        })
    })

    it('select course success',async ()=>{
        expect(axios.get).toHaveBeenCalledTimes(15);
        const row={};
        axios.mockClear();
        const mockData1={data:0};
        axios.post.mockResolvedValue(mockData1);
        await wrapper.vm.chooseOne(row);
        expect(axios.post).toHaveBeenCalledTimes(1);
        wrapper.vm.$nextTick(()=>{
            expect($message.success).toHaveBeenCalledTimes(2);
        })
    })

    it('select course already',async ()=>{
        expect(axios.get).toHaveBeenCalledTimes(16);
        const row={};
        axios.mockClear();
        const mockData1={data:1};
        axios.post.mockResolvedValue(mockData1);
        await wrapper.vm.chooseOne(row);
        expect(axios.post).toHaveBeenCalledTimes(2);
        wrapper.vm.$nextTick(()=>{
            expect($message.error).toHaveBeenCalledTimes(5);
        })
    })

    it('select course already',async ()=>{
        expect(axios.get).toHaveBeenCalledTimes(17);
        const row={};
        axios.mockClear();
        axios.post.mockRejectedValue('error');
        await wrapper.vm.chooseOne(row);
        expect(axios.post).toHaveBeenCalledTimes(3);
        wrapper.vm.$nextTick(()=>{
            expect($message.error).toHaveBeenCalledTimes(6);
        })
    })

    it('test useless else', async ()=>{
        axios.mockClear();
        const mockData1={data:{courseNum:2,courseList:[11]},status:201};
        axios.get.mockResolvedValue(mockData1);
        await wrapper.vm.handleCurrentChange(1);
        await wrapper.vm.getAllcourses();
        await wrapper.vm.getSections(1);
        wrapper.vm.searchName='力学';
        await wrapper.vm.searchCourse();
    });

    it('get section else',async ()=>{
        const row={iftrue:false};
        axios.mockClear();
        const mockData1={data:1,status:200};
        axios.get.mockResolvedValue(mockData1);
        await wrapper.vm.getSections(row);
    })
    it('select course else',async ()=>{
        const row={};
        axios.mockClear();
        const mockData1={data:2};
        axios.post.mockResolvedValue(mockData1);
        await wrapper.vm.chooseOne(row);

    })

});
