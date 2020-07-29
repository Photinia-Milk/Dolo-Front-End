import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import Login2 from "../../../src/views/login/Login2";
import BootstrapVue from "bootstrap-vue";
// import ElementUI from 'element-ui'

import axios from 'axios'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

jest.mock('axios');
localVue.prototype.$axios=axios;

const $route={
    path:'/student'
};

const mockPush=jest.fn(()=>true);
const $router={
    push:mockPush
};

const $message={
    success:jest.fn(()=>'success'),
    error:jest.fn(()=>'fails')
}

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
    let wrapper;
    beforeEach(()=>{
        axios.mockClear();
        wrapper=mount(Login2,{
            localVue,
            stubs:['app-button'],
            mocks:{
                $route,
                $router,
                $message
            }
        })
    });
    afterEach(()=>{
        wrapper.destroy();
    });
    it("(async login)login", async ()=>{
        const mockData={data:{status:0}};
        axios.post.mockResolvedValue(mockData);
        wrapper.vm.user.username='1';
        wrapper.vm.user.password='1';
        const but=wrapper.find('.btn-primary');
        expect(but.exists()).toBeTruthy();
        await but.trigger("click");
        expect($message.success).toHaveBeenCalledTimes(1);
        expect($router.push).toBeCalled();
    });

    it("login through button fail",async()=>{
        const mockData={data:{status:1}};
        axios.post.mockResolvedValue(mockData);
        wrapper.vm.user.username='1';
        wrapper.vm.user.password='1';
        const but=wrapper.find('.btn-primary');
        expect(but.exists()).toBeTruthy();
        await but.trigger("click");
        expect($message.error).toHaveBeenCalledTimes(1);
    });

    it('fail because of internet',async ()=>{
        axios.post.mockResolvedValue('error');
        wrapper.vm.user.username='1';
        wrapper.vm.user.password='1';
        const but=wrapper.find('.btn-primary');
        expect(but.exists()).toBeTruthy();
        await but.trigger("click");
        expect($message.error).toBeCalled()
    })
});
