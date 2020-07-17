import {createLocalVue,mount } from "@vue/test-utils";
import ElementUI from "element-ui";
import home from "../../../../src/views/student/components/home/home";

const localVue = createLocalVue();
localVue.use(ElementUI);

const wrapper=mount(home,{
    mocks:{

    },
    localVue
});

describe("init",()=>{
    it("init data",()=>{
        const articles=[{
            "title": "本学期选课已正式开始",
            "content": "请同学们及时选择本学期课程，\n避免错过正常的选课时间\n\n本学期的选课时段为：\n2018-07-01 - 2018-08-14\n 逾期选课系统即关闭",
        },
            {
                "title": "这是一篇测试",
                "content": "你们做的非常好！\n请继续努力",
            }];
        expect(wrapper.vm.$data.articles).toEqual(articles);
    })
})

