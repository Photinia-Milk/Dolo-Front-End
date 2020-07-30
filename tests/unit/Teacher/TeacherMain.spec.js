// import { createLocalVue } from "@vue/test-utils";
// import ElementUI from "element-ui";
// import TeacherMain from "../../../src/views/teacher/TeacherMain";

// const localVue = createLocalVue();
// localVue.use(ElementUI);


import {shallowMount} from "@vue/test-utils";
import TeacherMain from "../../../src/views/teacher/TeacherMain.vue"
import NavBarTeacher from "../../../src/views/teacher/components/navbar/NavBarTeacher";
import PublishCourse from "../../../src/views/teacher/components/publish/PublishCourse";

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("TeacherMain", () => {
    // 由于没有数据和方法，这里可以不做测试
    it("all clear", () => {
        let wrapper=shallowMount(TeacherMain);
        const a = wrapper.findComponent(NavBarTeacher);
        expect(a.exists()).toBe(true);
        const b = wrapper.findComponent(PublishCourse);
        expect(b.exists()).toBe(true);
    });
});
