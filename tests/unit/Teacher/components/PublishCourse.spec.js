import { shallowMount, createLocalVue } from "@vue/test-utils";
import ElementUI from "element-ui";
import PublishCourse from "../../../../src/views/teacher/components/publish/PublishCourse";

const localVue = createLocalVue();
localVue.use(ElementUI);

/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */
const axios = {
    get: async () => "success"
};

/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */
const axios = {
    get: async () => "success"
};

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("init", () => {
    it("init state", () => {
        const msg = "new message";
        const wrapper = shallowMount(PublishCourse, {
            propsData: { msg },
            mocks: {
                axios
            },
            localVue
        });
        // /**
        //  * 检查props是否正确传入
        //  */
        // expect(wrapper.vm.msg).toEqual(msg);
        /**
         * 检查data的初始状态
         */
        let formInit = {
            courseName: "",
            departmentName:"",
            courseDes: "",
            credit: "",
            semester: "",
            departmentID: "",
            teacherID: "",
            capacity: ""
        }
        let semesterInit = [
            {
                value: 1,
                label: "大一上学期"
            },
            {
                value: 2,
                label: "大一下学期"
            },
            {
                value: 3,
                label: "大二上学期"
            },
            {
                value: 4,
                label: "大二下学期"
            },
            {
                value: 5,
                label: "大三上学期"
            },
            {
                value: 6,
                label: "大三下学期"
            },
            {
                value: 7,
                label: "大四上学期"
            },
            {
                value: 8,
                label: "大四下学期"
            }
        ]
        expect(wrapper.vm.form).toEqual(formInit);
        expect(wrapper.vm.semester).toEqual(semesterInit);
        // expect(wrapper.vm.courseDes).toEqual('');
        // expect(wrapper.vm.credit).toEqual("");
        // expect(wrapper.vm.semester).toEqual('');
        // expect(wrapper.vm.departmentID).toEqual("");
        // expect(wrapper.vm.teacherID).toEqual('');
        // expect(wrapper.vm.capacity).toEqual("");

        // /**
        //  * 检查结果表格的初始状态
        //  */
        // expect(wrapper.find(".success").exists()).toBe(false);
        // expect(wrapper.find(".error").exists()).toBe(false);
        // /**
        //  * 检查axios是否正确mock
        //  */
        // expect(wrapper.vm.axios.get()).resolves.toEqual("success");
    });
});
//
// /**
//  * 对DOM的控制
//  */
// describe("PublishCourse", () => {
//     const msg = "new message";
//     /**
//      * 如果使用element-ui等第三方组件库，不要使用shallowMount
//      */
//     const wrapper = mount(PublishCourse, {
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
//
// /**
//  * 异步和mock
//  */
// describe("login (async function)", () => {
//     it("login success by call function", () => {
//         const msg = "new message";
//         const wrapper = shallowMount(PublishCourse, {
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
//         const wrapper = mount(PublishCourse, {
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
