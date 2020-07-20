
import { createLocalVue, mount } from "@vue/test-utils";
import Login2 from "../../../src/views/login/Login2";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */
const res={
    status:200,
    data:''
};

const axios = {
    get: async () => {return res},
};

const wrapper = mount(Login2, {
    mocks: {
        axios
    },
    localVue
});

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("init", () => {
    it("init state", () => {

        /**
         * 检查data的初始状态
         */
        expect(wrapper.vm.user.password).toEqual('');
        expect(wrapper.vm.user.username).toEqual('');
        /**
         * 检查结果表格的初始状态
         */

        /**
         * 检查axios是否正确mock
         */
        expect(wrapper.vm.axios.get()).resolves.toEqual(res)
    });
});

describe("login",()=>{
    it("(async login)login", ()=>{
    expect(wrapper.vm.tologin()).resolves.toBeTruthy();
    });

    it("login through button",async()=>{
        const but=wrapper.find(".btn-primary");
        expect(but.exists()).toBeTruthy();
        but.trigger("click");

    })
});
