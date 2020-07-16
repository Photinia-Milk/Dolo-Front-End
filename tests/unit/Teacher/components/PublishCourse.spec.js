import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
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
