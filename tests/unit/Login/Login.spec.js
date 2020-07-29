import { createLocalVue, shallowMount } from "@vue/test-utils";
import Login2 from "../../../src/views/login/Login2";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

jest.mock("axios",()=>({
    post:()=>Promise.resolve({data:1,status:0})
}));
/**
 * mock的axios
 * 可以根据需要添加其他函数功能
 */

/**
 * 检查初始化状态的测试用例
 * 对组件内部状态的访问
 */
describe("init", () => {
    it("init state", () => {

        let wrapper=shallowMount(Login2,{
            localVue
        });
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
    });
});

describe("login",()=>{
    it("(async login)login", ()=>{

        let wrapper=shallowMount(Login2,{
            localVue
        });
    expect(wrapper.vm.tologin()).resolves.toBeTruthy();
    });

    it("login through button",async()=>{
        let wrapper=shallowMount(Login2,{
            localVue
        });

        const but=wrapper.find(".btn-primary");
        expect(but.exists()).toBeTruthy();
        but.trigger("click");
        wrapper.vm.$nextTick(()=>{
        })
    })
});
