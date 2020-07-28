import { shallowMount, createLocalVue} from "@vue/test-utils";
import courseTable from "../../../../src/views/student/components/courseTable/courseTable.vue";
import ElementUI from "element-ui";
import course from "../../../../src/views/student/components/CourseSelect/components/CourseAll";

const localVue = createLocalVue();
localVue.use(ElementUI);

const axios = {
    get: async () => "success"
};

const wrapper = shallowMount(courseTable, {
    mocks: {
        axios
    },
    localVue
});
describe("CourseTable", () => {
    it("init state", () => {
        expect(typeof course.data).toBe('function');
        let weekMapInit = ["星期一", "星期二", "星期三", "星期四", "星期五"];
        let timeMapInit = ["1-2节", "3-4节", "5-6节", "7-8节", "9-10节", "11-13节"];
        expect(wrapper.vm.weekMap).toEqual(weekMapInit);
        expect(wrapper.vm.timeMap).toEqual(timeMapInit);
        expect(wrapper.vm.xkData).toBe(null);
        expect(wrapper.vm.kbData).toBe(null);
        expect(wrapper.vm.kbWidth).toBe(300);
        expect(wrapper.vm.sub_logic_id).toBe(null);
        expect(wrapper.vm.sub_name).toEqual("");
    });
});
