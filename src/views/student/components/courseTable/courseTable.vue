<template>
    <div>
        <h2>学生课表({{username}})</h2>
        <div id="curricula">
<!--            <div id="search">-->
<!--                <el-row :gutter="20">-->
<!--                    <el-col :span="8">-->
<!--                        <el-input v-model="sub_logic_id" placeholder="请输入课程号"></el-input>-->
<!--                    </el-col>-->
<!--                    <el-col :span="4">-->
<!--                        <el-button type="primary" @click="onById">精确查询</el-button>-->
<!--                    </el-col>-->
<!--                    <el-col :span="8">-->
<!--                        <el-input v-model="sub_name" placeholder="请输入课程名"></el-input>-->
<!--                    </el-col>-->
<!--                    <el-col :span="4">-->
<!--                        <el-button type="primary" @click="onByName">模糊查询</el-button>-->
<!--                    </el-col>-->
<!--                </el-row>-->
<!--            </div>-->
<!--            <el-table-->
<!--                    :data="xkData"-->
<!--                    height="400"-->
<!--                    style="width: 100%"-->
<!--                    highlight-current-row-->
<!--                    align="center"-->
<!--                    border-->
<!--            >-->
<!--                <el-table-column prop="sub_logic_id" label="课程号" width="200" align="center"></el-table-column>-->
<!--                <el-table-column prop="sub_name" label="课程名" width="800" align="center"></el-table-column>-->
<!--                <el-table-column label="上课时间(其一)" width="200" align="center">-->
<!--                    <template slot-scope="scope">{{weekMap[scope.row.week1]+timeMap[scope.row.time1]}}</template>-->
<!--                </el-table-column>-->
<!--                <el-table-column label="上课时间(其二)" width="200" align="center">-->
<!--                    <template slot-scope="scope">{{weekMap[scope.row.week2]+timeMap[scope.row.time2]}}</template>-->
<!--                </el-table-column>-->
<!--                <el-table-column prop="teacher" label="任课教师" width="200" align="center">-->
<!--                    <template slot-scope="scope">{{scope.row.teacher.first_name}}</template>-->
<!--                </el-table-column>-->
<!--                <el-table-column label="操作" align="center">-->
<!--                    <template slot-scope="scope">-->
<!--                        <el-button-->
<!--                                type="success"-->
<!--                                @click="onSelectCourse(scope.row.id,scope.row.sub_logic_id)"-->
<!--                        >选课</el-button>-->
<!--                    </template>-->
<!--                </el-table-column>-->
<!--            </el-table>-->
            <h3>当前课表如下</h3>
            <el-table v-if="TableData" :data="TableData" style="width: 100%" align="center" border>
                <el-table-column type="index" width="100" align="center"></el-table-column>
                <el-table-column prop="xq1" label="星期一" :width="kbWidth" align="center">
                    <template slot-scope="scope">
                        <el-button
                                v-if="scope.row.xq1"
                                type="success"
                                plain
                                @click="onBackCource(scope.row.xq1)"
                        >{{scope.row.xq1.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="xq2" label="星期二" :width="kbWidth" align="center">
                    <template slot-scope="scope">
                        <el-button
                                v-if="scope.row.xq2"
                                type="success"
                                plain
                                @click="onBackCource(scope.row.xq2)"
                        >{{scope.row.xq2.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="xq3" label="星期三" :width="kbWidth" align="center">
                    <template slot-scope="scope">
                        <el-button
                                v-if="scope.row.xq3"
                                type="success"
                                plain
                                @click="onBackCource(scope.row.xq3)"
                        >{{scope.row.xq3.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="xq4" label="星期四" :width="kbWidth" align="center">
                    <template slot-scope="scope">
                        <el-button
                                v-if="scope.row.xq4"
                                type="success"
                                plain
                                @click="onBackCource(scope.row.xq4)"
                        >{{scope.row.xq4.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="xq5" label="星期五" :width="kbWidth" align="center">
                    <template slot-scope="scope">
                        <el-button
                                v-if="scope.row.xq5"
                                type="success"
                                plain
                                @click="onBackCource(scope.row.xq5)"
                        >{{scope.row.xq5.name}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    // import cookie from "../../../../static/js/cookie";
    // import {
    //     getKB,
    //     delSelectCourse,
    //     getCourseBySubLogicId,
    //     getCourseByName,
    //     createSelectCourse
    // } from "../../../../api/api";

    export default {
        name: "courseTable",
        data() {
            return {
                weekMap: ["星期一", "星期二", "星期三", "星期四", "星期五"],
                timeMap: ["1-2节", "3-4节", "5-6节", "7-8节", "9-10节", "11-13节"],
                xkData: null,
                kbData: null,
                /*[
                  {
                    xq1: 1,
                    xq2: 1,
                    xq3: 1,
                    xq4: 1,
                    xq5: 1
                  }
                ],*/
                kbWidth: 300,
                sub_logic_id: null,
                sub_name: ""
            };
        },
        //     computed: {
        //         username() {
        //             return cookie.getCookie("name");
        //         }
        //     },
        //     created() {
        //         getKB()
        //             .then(res => {
        //                 this.kbData = res.data;
        //             })
        //             .catch(() => {
        //                 window.alert("获取课表失败!");
        //             });
        //     },
        //     methods: {
        //         onBackCource(item) {
        //             this.$confirm("退课[" + item.name + "]?", "提示", {
        //                 confirmButtonText: "确定",
        //                 cancelButtonText: "取消",
        //                 type: "warning",
        //                 center: true
        //             })
        //                 .then(() => {
        //                     //选择了退课,进行退课
        //                     delSelectCourse(item.id)
        //                         .then(() => {
        //                             //退课成功,重新获取课表,发消息
        //                             getKB()
        //                                 .then(res => {
        //                                     this.kbData = res.data;
        //                                 })
        //                                 .catch(() => {
        //                                     window.alert("获取课表失败!");
        //                                 });
        //                             this.$message({
        //                                 type: "success",
        //                                 message: "退课成功!"
        //                             });
        //                         })
        //                         .catch(error => {
        //                             // console.log(error.response.data["non_field_errors"][0]);
        //                             this.$message.error(error.response.data["non_field_errors"][0]);
        //                         });
        //                 })
        //                 .catch(() => {
        //                     this.$message({
        //                         type: "info",
        //                         message: "已取消退课"
        //                     });
        //                 });
        //         },
        //         onById() {
        //             getCourseBySubLogicId(this.sub_logic_id)
        //                 .then(res => {
        //                     this.xkData = res.data;
        //                     this.$message({
        //                         type: "success",
        //                         message: "查询已更新!"
        //                     });
        //                 })
        //                 .catch(error => {
        //                     this.$message.error(error.response.data);
        //                 });
        //         },
        //         onByName() {
        //             getCourseByName(this.sub_name)
        //                 .then(res => {
        //                     this.xkData = res.data;
        //                     this.$message({
        //                         type: "success",
        //                         message: "查询已更新!"
        //                     });
        //                 })
        //                 .catch(error => {
        //                     // console.log(error.response.data["non_field_errors"][0]);
        //                     this.$message.error(error.response.data["non_field_errors"][0]);
        //                 });
        //         },
        //         onSelectCourse(cid, sub_logic_id) {
        //             createSelectCourse({ course: cid, sub_logic_id: sub_logic_id })
        //                 .then(() => {
        //                     //选课成功重新获取课表
        //                     getKB()
        //                         .then(res => {
        //                             this.kbData = res.data;
        //                         })
        //                         .catch(() => {
        //                             window.alert("获取课表失败!");
        //                         });
        //                     this.$message({
        //                         type: "success",
        //                         message: "课表已更新!"
        //                     });
        //                 })
        //                 .catch(error => {
        //                     // console.log(error.response.data["non_field_errors"][0]);
        //                     this.$message.error(error.response.data["non_field_errors"][0]);
        //                 });
        //         }
        //     }
        // };
    }
</script>


<style scoped>
    section {
        padding-top: 20px;
    }

    #curricula {
        margin: 50px auto 0;
        width: 1450px;
        height: 700px;
        background-color: antiquewhite;
    }

    #search {
        background-color: rgb(190, 178, 201);
        height: 60px;
        padding: 20px 20px 0;
    }
</style>

