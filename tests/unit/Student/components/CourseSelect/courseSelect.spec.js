// import { createLocalVue } from "@vue/test-utils";
// import ElementUI from "element-ui";
// import TeacherMain from "../../../src/views/teacher/TeacherMain";

// const localVue = createLocalVue();
// localVue.use(ElementUI);


import {shallowMount} from "@vue/test-utils";
import CourseAll from "../../../../../src/views/student/components/CourseSelect/components/CourseAll"
import courseSelect from "../../../../../src/views/student/components/CourseSelect/courseSelect"

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("TeacherMain", () => {
    // 由于没有数据和方法，这里可以不做测试
    it("all clear", () => {
        let wrapper=shallowMount(courseSelect,{
            CourseAll
        });
        const a=wrapper.findComponent(courseSelect);
        expect(a.exists()).toBe(true);
    });
});
