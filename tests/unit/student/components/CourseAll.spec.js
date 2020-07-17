import { shallowMount, createLocalVue} from "@vue/test-utils";
import course from "../../../../src/views/student/components/CourseSelect/components/CourseAll";
import ElementUI from "element-ui";


const localVue = createLocalVue();
localVue.use(ElementUI);

/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */
const axios = {
    get: async () => "success"
};

const wrapper = shallowMount(course, {
    mocks: {
        axios
    },
    localVue
});
/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("course", () => {
    it("init state", () => {
        /**
         * 检查props是否正确传入
         */
        // expect(wrapper.vm.msg).toEqual(msg);
        /**
         * 检查data的初始状态
         */
        // expect(wrapper.vm.results).toEqual([]);
        // expect(wrapper.vm.calculateText).toEqual("");
        expect(typeof course.data).toBe('function');
        //const defaultData = course.data();
        let pageInfoInit = {
            startIndex: 1,
            pageSize:10
        }
        let category1Init = ['民族生课程','必修课程','通识课','选修课'];
        let ruleFormInit = {
            Title: "",
            Number: "",
            Introduction: ""
        }
        let updateFormInit = {
            Id: "",
            Title: "",
            Introduction: ""
        }
        let rulesInit = {
            Title: [
                { required: true, message: "请输入课程名", trigger: "change" },
                { min: 2, max: 10, message: "长度在 2到 10 个字符", trigger: "blur" }
            ],
            Introduction: [
                {
                    required: true,
                    message: "请填写课程信息,否则无法通过喔~",
                    trigger: "change"
                }
            ]
        }
        expect(wrapper.vm.pageInfo).toEqual(pageInfoInit);
        expect(wrapper.vm.userList).toEqual([]);
        expect(wrapper.vm.category1).toEqual(category1Init);
        expect(wrapper.vm.checkboxGroup).toEqual([]);
        expect(wrapper.vm.name).toEqual("亚托克斯");
        expect(wrapper.vm.searchName).toEqual("");
        expect(wrapper.vm.coursesData).toEqual([]);
        expect(wrapper.vm.loading).toBe(true);
        expect(wrapper.vm.ruleForm).toEqual(ruleFormInit);
        expect(wrapper.vm.updateForm).toEqual(updateFormInit);
        expect(wrapper.vm.rules).toEqual(rulesInit);
        expect(wrapper.vm.dialogFormVisible).toBe(false);
        expect(wrapper.vm.formLabelWidth).toEqual("6em");
        /**
         * 检查结果表格的初始状态
         */
        // expect(wrapper.find(".success").exists()).toBe(false);
        // expect(wrapper.find(".error").exists()).toBe(false);
        /**
         * 检查axios是否正确mock
         */
        // expect(wrapper.vm.axios.get()).resolves.toEqual("success");
    });
});

/**
 * 对DOM的控制
 */
// describe("calculator", () => {
//     const msg = "new message";
//     /**
//      * 如果使用element-ui等第三方组件库，不要使用shallowMount
//      */
//     const wrapper = mount(Calculator, {
//         propsData: { msg },
//         mocks: {
//             axios
//         },
//         localVue
//     });
//
//     it("input calculate text", () => {
//         /**
//          * 找到输入框
//          */
//         const input = wrapper.find("#input");
//         expect(input.exists()).toBe(true);
//         /**
//          * 修改输入的值，检查绑定的变量calculateText是否发生改变
//          */
//         input.setValue("1+2");
//         expect(wrapper.vm.calculateText).toEqual("1+2");
//     });
//
//     it("display success result", async () => {
//         const btn = wrapper.find("#calculate-btn");
//         expect(btn.exists()).toBe(true);
//         btn.trigger("click");
//         expect(wrapper.vm.results).toContainEqual({
//             text: "1+2",
//             result: 3,
//             isSuccess: true
//         });
//         /**
//          * 需要等待下一次渲染后，才能检查DOM的变化
//          */
//         await wrapper.vm.$nextTick();
//         expect(wrapper.find(".success").exists()).toBe(true);
//     });
//
//     it("display error result", async () => {
//         wrapper.find("#input").setValue("5/0");
//         wrapper.find("#calculate-btn").trigger("click");
//         expect(wrapper.vm.results).toContainEqual({
//             text: "5/0",
//             result: "Error",
//             isSuccess: false
//         });
//         /**
//          * 需要等待下一次渲染后，才能检查DOM的变化
//          */
//         await wrapper.vm.$nextTick();
//         expect(wrapper.find(".error").exists()).toBe(true);
//     });
// });
//
// /**
//  * 异步和mock
//  */
// describe("login (async function)", () => {
//     it("login success by call function", () => {
//         const msg = "new message";
//         const wrapper = shallowMount(Calculator, {
//             propsData: { msg },
//             mocks: {
//                 axios
//             },
//             localVue
//         });
//         /**
//          * 直接调用组件的method，相当于this.login()
//          */
//         expect(wrapper.vm.login()).resolves.toBeTruthy();
//     });
//
//     it("login success by click", async () => {
//         const msg = "new message";
//         /**
//          * 如果使用element-ui等第三方组件库，不要使用shallowMount
//          */
//         const wrapper = mount(Calculator, {
//             propsData: { msg },
//             mocks: {
//                 axios
//             },
//             localVue
//         });
//         /**
//          * 通过css选择器找到登录按钮，并检查是否找到
//          */
//         const btn = wrapper.find("#login-btn");
//         expect(btn.exists()).toBe(true);
//         /**
//          * 模拟点击。由于login是async的，因此需要await点击完成
//          * 检查注入axios后登录是否成功
//          */
//         await btn.trigger("click");
//         expect(wrapper.vm.isLogin).toBeTruthy();
//     });
// });
