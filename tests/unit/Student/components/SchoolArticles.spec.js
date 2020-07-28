import { shallowMount, createLocalVue} from "@vue/test-utils";
import home from "../../../../src/views/student/components/home/home";
import ElementUI from "element-ui";


const localVue = createLocalVue();
localVue.use(ElementUI);

const axios = {
    get: async () => "success"
};

describe("CourseTable", () => {
    it("init state", () => {
        const titleTest = "new message";
        const contentTest = "new message";
        const wrapper1 = shallowMount(home, {
            propsData: { titleTest },
            mocks: {
                axios
            },
            localVue
        });
        const wrapper2 = shallowMount(home, {
            propsData: { contentTest },
            mocks: {
                axios
            },
            localVue
        });
        expect(wrapper1.vm.title).toEqual(titleTest);
        expect(wrapper2.vm.content).toEqual(contentTest);
        /**
         * 检查props是否正确传入
         */

    });
});
