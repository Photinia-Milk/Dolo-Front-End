<template>
    <div class="course-table" >
        <el-scrollbar style="height: 100%" >
            <div class="course-table-content" >
                <div class="top" :style="{width:courseWidth * weekTable.length + 'px'}">
                    <div v-for="item in weekTable" v-bind:key="item" class="top-text" :style="{width: courseWidth + 'px'}">周{{item}}</div>
                </div>
                <div class="main" :style="{ width:courseWidth * weekTable.length + 35 + 'px',
                                            height:courseHeight * timeTable.length +'px'}">
                    <div class="period">
                        <div v-for="item in timeTable" v-bind:key="item" class="left-text" :style="{height: courseHeight + 'px'}">{{item}}</div>
                    </div>
                    <!--课表-->
                    <div v-for="(item,index) in usualCourses " v-bind:key="(item,index)">
                        <div class="flex-item kcb-item" @click="selectedCourseIndex = index, showUsualCourseDialog=true"
                             :style="{  marginLeft:(day2Number(item.day)-1) * courseWidth + 'px',
                                        marginTop:(item.startTime-1) * courseHeight + 5+ 'px',
                                        width:courseWidth + 'px',
                                        height:(item.endTime-item.startTime+1) * courseHeight - 5 +'px',
                                        backgroundColor:colorArrays[index%9]}">
                            <div class="small-text" >{{item.courseName+'@'+item.location        }}</div>
                        </div>
                    </div>
                    <!--事件课显示按钮-->
<!--                    <el-button type="primary" @click="showPracticeCourseDialog = true" class="btn_practice_course">实践课</el-button>-->
                </div>
            </div>
        </el-scrollbar>

        <el-dialog
                title="课程信息"
                :visible.sync="showUsualCourseDialog"
                width="30%"
                center>
            <div class="dialog-content">
                <div v-if="typeof(selectedCourse) != 'undefined'" >
                    <div>课程编号： {{selectedCourse.courseId}}</div>
                    <div>课程类型：{{selectedCourse.courseType}}</div>
                    <div>课程名称： {{selectedCourse.courseName}}</div>
                    <div>上课时间： {{selectedCourse.weeks + ' ' +selectedCourse.day+' '+
                        '第' + selectedCourse.startTime +
                        '-' + (selectedCourse.endTime) + '节'}}</div>
                    <div>学分：{{selectedCourse.credits}}</div>
                    <div>上课教师： {{selectedCourse.teacherUserName}}</div>
                    <div>授课模式：{{selectedCourse.model}}</div>
                    <div>上课地点： {{selectedCourse.location}}</div>
                    <div>备注：{{selectedCourse.remarks}}</div>
                </div>
                <div v-else class="tip" >本学期没有课哦</div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="showUsualCourseDialog = false">确 定</el-button>
                <el-button type="primary" @click="dropCourse(selectedCourse)">退课</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {showCourseTable,dropOneCourse} from "../../../../api/api";
    export default {
        name: "CourseTable",
        data(){
            return {
                showUsualCourseDialog:false,
                showPracticeCourseDialog:false,
                selectedCourseIndex:0,
                screenWidth:'',
                screenHeight:'',
                usualCourses: '',
                User:''
            }
        },
        props:{
            practiceCourses:{
                type:Array,
                default:()=>[]
            },
            weekTable:{
                type:Array,
                default:()=>['一','二','三','四','五','六','日']
            },
            timeTable:{
                type:Array,
                default:()=>[1,2,3,4,5,6,7,8,9,10,11,12,13]
            },
            colorArrays: {
                type:Array,
                default:()=>['#ef5b9c','#f15b6c', '#f26522', '#ffd400', '#8552a1', '#7fb80e', '#65c294', '#78cdd1', '#33a3dc']
            }
        },
        computed:{
            courseWidth(){
                return Math.max((this.screenWidth - 35) / this.weekTable.length,50)
            },
            courseHeight(){
                return Math.max((this.screenHeight - 35) / this.timeTable.length,50)
            },
            selectedCourse(){
                return this.usualCourses[this.selectedCourseIndex];
            }
        },
        created(){
            window.addEventListener('resize', this.getWAndH);
            this.getWAndH();
        },
        mounted(){
            this.User=window.sessionStorage.getItem('student');
            let param={userName:this.User};
            showCourseTable(param).then(res=>{
                if(res.status===200){
                    this.usualCourses=res.data;
                }
            })
        },
        destroyed() {
            window.removeEventListener('resize', this.getWAndH);
        },
        methods:{
            getWAndH(){
                this.screenWidth=window.innerWidth-75;
                this.screenHeight=window.innerWidth-250;
            },
            day2Number(day){
                switch (day) {
                    case '星期一':return 1;
                    case '星期二':return 2;
                    case '星期三':return 3;
                    case '星期四':return 4;
                    case '星期五':return 5;
                }
            },
            dropCourse(selectedCourse){
                let params={userName:this.User,courseId:selectedCourse.courseId,semester:selectedCourse.semester,year:selectedCourse.year,teacherUserName: selectedCourse.teacherUserName}
                dropOneCourse(params).then(res=>{
                    if(res.data===0){
                        this.usualCourses=this.usualCourses.filter(item=>{
                           return item.courseId!==params.courseId;
                        })
                        this.showUsualCourseDialog = false;
                        this.$message.success('退课成功！')
                    }
                }).catch(()=>{
                    this.$message.error('网络繁忙，请稍后重试！')
                })
            }
        }
    }
</script>

<style scoped>
    .course-table{
        border-radius: 12px;
    }
    .top {
        display: flex;
        flex-direction: row;
        padding-left: 35px;
        background-color: #31c27c;
        color: #fff;
    }
    .top-text {
        width: 100px;
        height: 35px;
        font-size: 15px;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .main{
        height:1200px;
        width:730px;
        display:flex;
        position: relative;
    }
    .flex-item {
        width: 95px;
        height: 200px;
    }
    .kcb-item {
        position: absolute;
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 12px;
        overflow: hidden;
    }
    .period{
        background-color:#31c27c;
        color:#fff;
    }
    .small-text {
        font-size: 22px;
        color: #fff;
        text-align: center;
    }
    .left-text {
        width: 35px;
        height: 100px;
        font-size: 26px;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .btn_practice_course{
        position: absolute;
        z-index: 110;
        top: 35px;
        right: 0px;
        width: 100px;
        height: 100px;
        line-height: 24px;
        background: #31c27c;
        border-radius: 50px;
        font-size: 24px;
        text-align: center;
        color: #fff;
        opacity: 0.7;
        padding: 12px;
    }
    .el-dialog .dialog-content{
        color: #000;
        line-height: 40px;

    }
    .el-dialog .dialog-content .tip{
        color: #000;
        line-height: 60px;
        text-align: center;
    }
</style>
