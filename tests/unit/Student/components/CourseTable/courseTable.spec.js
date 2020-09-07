import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import courseTable from "../../../../../src/views/student/components/courseTable/courseTable";

const localVue = createLocalVue();
localVue.use(ElementUI);

const wrapper=mount(courseTable,{
    mocks:{

    },
    localVue
});

describe('init',()=>{
    it('init data',()=>{
        // const weekMap= ["星期一", "星期二", "星期三", "星期四", "星期五"];
        // const timeMap= ["1-2节", "3-4节", "5-6节", "7-8节", "9-10节", "11-13节"];
        // expect(wrapper.vm.weekMap).toEqual(weekMap);
        // expect(wrapper.vm.timeMap).toEqual(timeMap);
        // expect(wrapper.vm.xkData).toBeNull();
        // expect(wrapper.vm.kbData).toBeNull();
        // expect(wrapper.vm.sub_logic_id).toBeNull();
        // expect(wrapper.vm.kbWidth).toBe(300);
        // expect(wrapper.vm.sub_name).toBe("");
    })
})
