<template>
    <el-card id="courseTable" class="box-card">
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    fixed
                    label="课程名称"
                    width="260">
                <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <p>教学班: {{ scope.row.class }}</p>
                            <p>上课教师: {{ scope.row.teacher }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                        </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                    label="教室"
                    width="95">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>校区: {{ scope.row.area }}</p>
                        <p>课程备注: {{ scope.row.remarks}}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.location }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                    label="种类"
                    width="75">
                <template slot-scope="scope">
                    <!--                <i class="el-icon-time"></i>-->
                    <span style="margin-left: 10px">{{ scope.row.type }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="状态"
                    width="140">
                <template slot-scope="scope">
                    <div  v-if="scope.row.if_select===false">
                        <span style="margin-left: 10px">{{ scope.row.current }}/{{scope.row.max}}</span>
                    </div>
                    <div v-else>
                        <span style="margin-left: 10px">{{ scope.row.current + 1}}/{{scope.row.max}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <div  v-if="scope.row.if_select === true">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDrop(scope.$index, scope.row)">退选</el-button>
                    </div>
                    <div v-else>
                        <el-button
                                size="mini"
                                @click="handleSelect(scope.$index, scope.row)">选课</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </el-card>

</template>

<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 700px;
    }
</style>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    class: '(2019-2020-1)-SE118-1',
                    name: '计算机系统基础（汇编）',
                    teacher: '臧斌宇,陈榕',
                    area: '闵行',
                    location: '中院413',
                    score: 3,
                    time: '星期一第3-4节{1-16周}\n' +
                        '星期三第1-2节{1-15周(单)}',
                    remarks: '实践环节：虚拟时间',
                    type: '必修',
                    max: 121,
                    current: 100,
                    if_select: false
                }, {
                    class: '(2019-2020-1)-SE118-1',
                    name: '计算机系统基础（汇编）',
                    teacher: '臧斌宇,陈榕',
                    area: '闵行',
                    location: '中院413',
                    score: 3,
                    time: '星期一第3-4节{1-16周}\n' +
                        '星期三第1-2节{1-15周(单)}',
                    remarks: '实践环节：虚拟时间',
                    type: '必修',
                    max: 121,
                    current: 100,
                    if_select: false
                }, {
                    class: '(2019-2020-1)-SE118-1',
                    name: '计算机系统基础（汇编）',
                    teacher: '臧斌宇,陈榕',
                    area: '闵行',
                    location: '中院413',
                    score: 3,
                    time: '星期一第3-4节{1-16周}\n' +
                        '星期三第1-2节{1-15周(单)}',
                    remarks: '实践环节：虚拟时间',
                    type: '必修',
                    max: 121,
                    current: 100,
                    if_select: false
                }, {
                    class: '(2019-2020-1)-SE118-1',
                    name: '计算机系统基础（汇编）',
                    teacher: '臧斌宇,陈榕',
                    area: '闵行',
                    location: '中院413',
                    score: 3,
                    time: '星期一第3-4节{1-16周}\n' +
                        '星期三第1-2节{1-15周(单)}',
                    remarks: '实践环节：虚拟时间',
                    type: '必修',
                    max: 121,
                    current: 100,
                    if_select: true
                }, {
                    class: '(2019-2020-1)-SE118-1',
                    name: '计算机系统基础（汇编）',
                    teacher: '臧斌宇,陈榕',
                    area: '闵行',
                    location: '中院413',
                    score: 3,
                    time: '星期一第3-4节{1-16周}\n' +
                        '星期三第1-2节{1-15周(单)}',
                    remarks: '实践环节：虚拟时间',
                    type: '必修',
                    max: 121,
                    current: 100,
                    if_select: true
                }
                ]
            }
        },
        methods: {
            handleSelect(index, row) {
                console.log("before");
                console.log(index, row);
                if(row.if_select === false){
                    row.if_select = true;
                }
                this.$message({
                    type: 'success',
                    message: '选课成功!'
                });
                console.log("after");
                console.log(index, row);
            },
            handleDrop(index, row) {
                this.$confirm('是否退选此门课程？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if(row.if_select === true){
                        row.if_select = false;
                    }
                    console.log(index, row);
                    this.$message({
                        type: 'success',
                        message: '退选成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退选'
                    });
                });
            }
        },
        name: "CourseTable"
    }
</script>

<style scoped>

</style>
