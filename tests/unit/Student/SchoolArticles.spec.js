import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import SchoolArticles from "../../../src/views/student/components/home/components/SchoolArticles";

const localVue = createLocalVue();
localVue.use(ElementUI);

const msg1="message1";
const msg2="message2";

const wrapper=mount(SchoolArticles,{
    propsData:{title:msg1,content:msg2},
    mocks:{
    },
    localVue
});

describe('init',  ()=> {
    it('init data',()=>{
        expect(wrapper.vm.title).toEqual(msg1);
        expect(wrapper.vm.content).toEqual(msg2);
    })

    it('created part',()=>{
        expect(wrapper.vm.cardTitle).toEqual(msg1);
        expect(wrapper.vm.cardContent).toEqual(msg2);
    })
});
