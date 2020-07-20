import { shallowMount, createLocalVue } from "@vue/test-utils";
import ElementUI from "element-ui";
import NavBarStudent from "../../../../src/views/student/components/navbar/NavBarStudent";

const localVue = createLocalVue();
localVue.use(ElementUI);

/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */
const axios = {
    get: async () => "success"
};

const wrapper = shallowMount(NavBarStudent, {
    mocks: {
        axios
    },
    localVue
});

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("NavBarStudent", () => {

    // 检查原始组件中的初始数据和函数
    it("sets the correct default data", () => {
        // expect(typeof NavBarTeacher.handleSelect).toBe('function')
        expect(typeof NavBarStudent.data).toBe('function');
        const defaultData = NavBarStudent.data();
        expect(defaultData.activeIndex).toEqual('browse');
        expect(defaultData.DoloName).toEqual("Dolo");
    });

    // 检查 mount 中的组件实例
    it('correctly sets the message when created', () => {
        expect(wrapper.vm.$data.activeIndex).toBe('browse');
        expect(wrapper.vm.$data.DoloName).toBe('Dolo');
    })
});
