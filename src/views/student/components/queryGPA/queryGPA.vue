<template>
    <div>
        <el-card shadow="always">
            <el-row :gutter="12">
                <el-col :span="6">
                    <el-card shadow="hover">
                        <el-select v-model="chosenStartYear" filterable placeholder="起始学期">
                            <el-option
                                    v-for="item in startYear"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card shadow="hover">
                        <el-select v-model="chosenEndYear" filterable placeholder="终止学期">
                            <el-option
                                    v-for="item in endYear"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card shadow="hover">
                        <el-select v-model="chosenCourseType" filterable placeholder="课程类型">
                            <el-option
                                    v-for="item in courseType"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </el-card>
                </el-col>
                <el-col :span="5">
                <span style="margin-top: 25px">
                    <el-button  @click="query" type="warning" size="small">查询</el-button>
                </span>
                </el-col>
            </el-row>
        </el-card>
        <el-dialog
                title="我的成绩"
                :visible.sync="showMyGpa"
                width="30%"
                center>
            <div style="line-height: 40px;">
                <div v-if="typeof(GPADetails) != 'undefined'" >
                    <div>平均GPA： {{GPADetails.avgGpa}}</div>
                    <div>课程类型：{{GPADetails.avgGrade}}</div>
                </div>
                <div v-else class="tip" >成绩未出，请耐心等待！</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {queryAvgGpa} from "../../../../api/api";
    export default {
        name: "queryGPA.vue",
        data(){
            return{
                User:'',
                GPADetails:'',
                chosenStartYear:'',
                chosenEndYear:'',
                startYear:
                    ['2000-2001-1','2000-2001-2','2000-2001-3',
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
                    ],
                endYear:['2000-2001-1','2000-2001-2','2000-2001-3',
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
                ],
                chosenCourseType:'',
                courseType:['全部课程','核心课程'],
                loading:'',
                showMyGpa:false
            }
        },
        mounted(){
            this.User=window.sessionStorage.getItem('student');
        },
        // computed:{
        //     getEndYear(){
        //         return 1;
        //     }
        // },
        methods:{
            query(){
                this.openFullScreen2();
                let params={userName:this.User,from:this.chosenStartYear,to:this.chosenEndYear,type:this.chosenCourseType};
                queryAvgGpa(params).then(res=>{
                    if(res.status==200){
                        this.loading.close();
                        this.GPADetails=res.data;
                        this.showMyGpa=true;
                        this.$message.success('查询成功！');
                    }
                }).catch(()=>{
                    this.$message.error('请求超时，请稍后重试！')
                    this.loading.close();
                })
            },
            openFullScreen2() {
                this.loading = this.$loading({
                    lock: true,
                    text: '正在查询您的成绩',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            }
        }
    }
</script>

<style scoped>

</style>
