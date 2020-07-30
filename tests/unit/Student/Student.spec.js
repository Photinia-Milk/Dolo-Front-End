// import { createLocalVue } from "@vue/test-utils";
// import ElementUI from "element-ui";
// import TeacherMain from "../../../src/views/teacher/TeacherMain";

// const localVue = createLocalVue();
// localVue.use(ElementUI);


import {shallowMount} from "@vue/test-utils";
import Student from "../../../src/views/student/Student"
import NavBarStudent from "../../../src/views/student/components/navbar/NavBarStudent"
/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("Student", () => {
    // 由于没有数据和方法，这里可以不做测试
    it("all clear", () => {
        let wrapper=shallowMount(Student);
        const a = wrapper.findComponent(NavBarStudent);
        expect(a.exists()).toBe(true);
    });
});
