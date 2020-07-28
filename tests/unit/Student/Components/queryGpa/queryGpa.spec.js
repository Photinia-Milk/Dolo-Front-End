import {shallowMount,createLocalVue, mount } from "@vue/test-utils";
import queryGpa from "../../../../../src/views/student/components/queryGPA/queryGPA";
import ElementUI from 'element-ui'

const localVue = createLocalVue();
localVue.use(ElementUI);

jest.mock("axios",()=>({
    post:()=>Promise.resolve({data:1,status:200}),
    get:()=>Promise.resolve({data:1,status:200})
}));

describe('init',()=>{
    it('init data',()=>{

        const wrapper=shallowMount(queryGpa,{
            localVue
        });

        const year=['2000-2001-1','2000-2001-2','2000-2001-3',
            '2001-2002-1','2001-2002-2','2001-2002-3',
            '2002-2003-1','2002-2003-2','2002-2003-3',
            '2003-2004-1','2003-2004-2','2003-2004-3',
            '2004-2005-1','2004-2005-2','2004-2005-3',
            '2005-2006-1','2005-2006-2','2005-2006-3',
            '2006-2007-1','2006-2007-2','2006-2007-3',
            '2007-2008-1','2007-2008-2','2007-2008-3',
            '2008-2009-1','2008-2009-2','2008-2009-3',
            '2009-2010-1','2009-2010-2','2009-2010-3',
            '2010-2011-1','2010-2011-2','2010-2011-3',
            '2011-2012-1','2011-2012-2','2011-2012-3',
            '2012-2013-1','2012-2013-2','2012-2013-3',
            '2013-2014-1','2013-2014-2','2013-2014-3',
            '2014-2015-1','2014-2015-2','2014-2015-3',
            '2015-2016-1','2015-2016-2','2015-2016-3',
            '2016-2017-1','2016-2017-2','2016-2017-3',
            '2017-2018-1','2017-2018-2','2017-2018-3',
            '2018-2019-1','2018-2019-2','2018-2019-3',
            '2019-2020-1','2019-2020-2','2019-2020-3',
            '2020-2021-1','2020-2021-2','2020-2021-3',
        ];

        expect(wrapper.vm.User).toBeNull();
        expect(wrapper.vm.GPADetails).toEqual('');
        expect(wrapper.vm.chosenStartYear).toEqual('');
        expect(wrapper.vm.chosenEndYear).toEqual('');
        expect(wrapper.vm.startYear).toEqual(year);
        expect(wrapper.vm.endYear).toEqual(year);
        expect(wrapper.vm.chosenCourseType).toEqual('');
        expect(wrapper.vm.loading).toEqual('');
        expect(wrapper.vm.courseType).toEqual(['全部课程','核心课程'])
        expect(wrapper.vm.showMyGpa).toBeFalsy();
    })
});


describe('query GPA',()=>{
    it('query through directly', async ()=>{

        const wrapper=mount(queryGpa,{
            stubs:{
              transition:false
            },
            localVue
        });
        const butt=wrapper.find('button');
        expect(butt.exists()).toBe(true);
        await butt.trigger('click');
        expect(wrapper.vm.GPADetails).toEqual(1);
        expect(wrapper.vm.showMyGpa).toBe(true);

    });

    // it('.catch',()=>{
    //
    //     const wrapper=mount(queryGpa,{
    //         stubs:{
    //             transition:false
    //         },
    //         localVue
    //     });
    //
    //     const butt=wrapper.find('button');
    //     expect(butt.exists()).toBe(true);
    //     butt.trigger('click');
    //
    //     wrapper.vm.$nextTick(()=>{
    //         expect(wrapper.vm.GPADetails).toEqual('');
    //         expect(wrapper.vm.showMyGpa).toBe(false);
    //     });
    // })
});
