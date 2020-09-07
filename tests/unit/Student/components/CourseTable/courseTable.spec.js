import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import courseTable from "../../../../../src/views/student/components/courseTable/courseTable";
import axios from 'axios'

const localVue = createLocalVue();
localVue.use(ElementUI);

jest.mock('axios');
localVue.prototype.$axios=axios;
const $message={
    success:jest.fn(()=>'success'),
    error:jest.fn(()=>'fails')
}

describe('courseTable',()=>{
    let wrapper;
    beforeEach(()=>{
        axios.mockClear();
        const mockData={data:1,status:200};
        axios.get.mockResolvedValue(mockData);
        wrapper=mount(courseTable,{
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
        expect(wrapper.vm.showUsualCourseDialog).toBeFalsy();
        expect(wrapper.vm.showPracticeCourseDialog).toBeFalsy();
        expect(wrapper.vm.selectedCourseIndex).toBe(0);
        expect(wrapper.vm.usualCourses).toBe(1);
        expect(wrapper.vm.User).toBe(null);
        expect(axios.get).toHaveBeenCalledTimes(1);
    })

    it('day2Number',()=>{
        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(wrapper.vm.day2Number('星期一')).toBe(1);
        expect(wrapper.vm.day2Number('星期二')).toBe(2);
        expect(wrapper.vm.day2Number('星期三')).toBe(3);
        expect(wrapper.vm.day2Number('星期四')).toBe(4);
        expect(wrapper.vm.day2Number('星期五')).toBe(5);

    })

    it('dropCourse success',async ()=>{
        expect(axios.get).toHaveBeenCalledTimes(3);
        wrapper.vm.usualCourses=[1];
        const selectedCourse={courseId:1};
        axios.mockClear();
        const mockData1={data:0};
        axios.post.mockResolvedValue(mockData1);
        await wrapper.vm.dropCourse(selectedCourse);
        expect(axios.post).toHaveBeenCalledTimes(1);
        wrapper.vm.$nextTick(()=>{
            expect(wrapper.vm.showUsualCourseDialog).toBeFalsy();
            expect($message.success).toHaveBeenCalledTimes(1);
        })
    })



    it('dropCourse fails because of internet',async ()=>{
        expect(axios.get).toHaveBeenCalledTimes(4);
        const selectedCourse='';
        axios.mockClear();
        axios.post.mockRejectedValue('error');
        await wrapper.vm.dropCourse(selectedCourse);
        expect(axios.post).toHaveBeenCalledTimes(2);
        expect($message.success).toHaveBeenCalledTimes(1);
        wrapper.vm.$nextTick(()=>{
            expect($message.error).toHaveBeenCalledTimes(1);
        })
    })

    it('mount else',()=>{
        axios.mockClear();
        const mockData={data:1,status:201};
        axios.get.mockResolvedValue(mockData);
        let wrapper2=mount(courseTable,{
            localVue,
            stubs:['app-button'],
            mocks:{
                $message
            }
        })
        wrapper2.destroy();
    })

    it('dropCourse else',async ()=>{
        const selectedCourse={};
        axios.mockClear();
        const mockData1={data:1};
        axios.post.mockResolvedValue(mockData1);
        await wrapper.vm.dropCourse(selectedCourse);
    })
})
