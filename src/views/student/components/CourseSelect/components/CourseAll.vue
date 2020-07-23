<template>
    <div class="courses">
        <!-- <h2>这里是课程界面啊啊啊啊</h2> -->
        <div class="handle">
            <!-- 查询 -->
            <div class="menu">
                <el-timeline>
                    <el-timeline-item placement="top">
                        <el-card >
                            <h4>课程查询</h4>
                            <el-input placeholder="请输入课程名" class="searchName" v-model="trySearchName" ></el-input>
                            <el-button type="primary" style="margin-left: 10px;margin-top:10px;" icon="el-icon-search" round @click="searchCourse">搜索</el-button>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item placement="top">
                        <el-card>
                            <h4>分类查询</h4>
                            <el-form
                                    :model="ruleForm"
                                    ref="ruleForm"
                                    label-width="80px"
                                    class="coursesForm"
                            >
                                <el-form-item prop="courseName">
                                    <div style="margin-top: 20px">
                                        <el-radio-group v-model="checkboxGroup"  data-label="课程类别" size="small">
                                            <el-radio-button v-for="cate in category1" :label="cate"  :key="cate">{{cate}}</el-radio-button>
                                        </el-radio-group>
                                    </div>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')">查 询</el-button>
                                    <el-button @click="resetForm('ruleForm')">重 置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-timeline-item>

                </el-timeline>
            </div>
        </div>
        <div class="formData">
            <el-table
                    v-loading="loading"
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    :data="coursesData"
                    style="width: 95%"
                    :header-cell-style="tableCenter"
                    :cell-style="tableCenter"
            >
                <el-table-column type="index" :index="indexMethod"></el-table-column>
                <el-table-column prop="courseName" label="课程名" width="150"></el-table-column>
                <el-table-column label="选修人数" width="120">
                    <template slot-scope="scope">
                        {{scope.row.currentNum+'/'+scope.row.maxNum}}
                    </template>
                </el-table-column>
                <el-table-column prop="description" label="课程性质"></el-table-column>
                <el-table-column prop="credits" label="学分"></el-table-column>
                <!--                :formatter="checkNull"-->
                <el-table-column fixed="right" width="100">
                    <template slot-scope="scope">
                        <el-button @click="Chooseone(scope.row)" type="warning" size="small">选课</el-button>
                        <el-tooltip
                                content="确认要选课吗？"
                                placement="top"
                                effect="light"
                                :hide-after="1000"
                                :enterable="false"
                        >
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block" style="margin-top:15px;">
                <span>
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="pageInfo.startIndex"
                            :page-size="pageInfo.pageSize"
                            :hide-on-single-page="true"
                            layout="total, prev, pager, next, jumper"
                            :total="20">
                 </el-pagination>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    import {getAllCourse, searchCourse} from "../../../../../api/api";

    export default {
        name: "course",
        data() {
            return {
                pageInfo:{startIndex:1,pageSize:10},
                userList: [],
                category1:['民族生课程','必修课程','通识课','选修课'],
                checkboxGroup:[],
                name: "亚托克斯",
                trySearchName:'',
                searchName: "",
                coursesData: [],
                loading: true,
                // 增加课程 表单项设置
                ruleForm: {
                    courseName: "",
                    Number: "",
                    description: ""
                },
                // 修改时课程信息 表单项设置
                updateForm: {
                    Id: "",
                    courseName: "",
                    description: ""
                },
                // 校验规则
                rules: {
                    courseName: [
                        { required: true, message: "请输入课程名", trigger: "change" },
                        { min: 2, max: 10, message: "长度在 2到 10 个字符", trigger: "blur" }
                    ],
                },
                dialogFormVisible: false,
                formLabelWidth: "6em"
            };
        },
        methods: {
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            //为表格添加序号
            indexMethod(index) {
                return index + 1;
            },
            tableCenter(){
                return   "text-align:center";
            },
            handleCurrentChange(currentPage){
                this.pageInfo.startIndex=currentPage;
                this.getAllcourses();
            },
            // handleSizeChange: function (size) {
            //     this.pagesize = size;
            //     console.log(this.pagesize)  //每页下拉显示数据
            // },
            // handleCurrentChange: function(currentPage){
            //     this.currentPage = currentPage;
            //     console.log(this.currentPage)  //点击第几页
            // },
            // handleUserList() {
            //     this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
            //         this.userList = res.body
            //     })
            // },
            //
            // handleClick(row) {
            //     // 数据回显
            //     console.log(row);
            //     // this.resetForm(updateForm);
            //     this.updateForm.courseName = row.courseName;
            //     this.updateForm.description = row.description;
            //     this.updateForm.Id = row.Id;
            //     this.dialogFormVisible = true;
            // },

            // 查验简介是否为空
            checkNull(row) {
                return row.description == null
                    ? "该课程暂无介绍信息 ￣□￣｜｜"
                    : row.description;
            },
            searchCourse(){
                if(this.searchName===''&&this.trySearchName===''){
                    this.$message.error('请输入课程名称！');
                }
                else
                {
                    this.pageInfo.startIndex=1;
                    this.searchName=this.trySearchName;
                    this.loading = true;
                    const params = {
                        start_index: (this.pageInfo.startIndex-1)*this.pageInfo.pageSize,
                        page_size: this.pageInfo.pageSize,
                        key: this.searchName
                    };
                    searchCourse(params).then(res => {
                        if (res.status == 200) {
                            this.loading = false;
                            this.coursesData = res.data;
                            this.$message.success('查询完成');
                        }
                    }).catch(() => {
                        this.$message.error('网络异常，请稍后重试！');
                    })
                }
            },
            // 获取全部的课程数据
            getAllcourses() {
                this.loading=true;
                let params={startIndex:(this.pageInfo.startIndex-1)*this.pageInfo.pageSize,pageSize:this.pageInfo.pageSize};
                getAllCourse(params).then(res=>{
                    if(res.status==200)
                    {
                        this.loading = false;
                        this.coursesData = res.data;
                    }
                }).catch(()=>{
                    this.$message.error('网络异常，请稍后重试');
                })
            }
        },
        mounted() {
            this.getAllcourses();
        }
    };
</script>
<style lang="less" scoped>
    .courses {
        display: flex;
        height: 42em;
        .handle {
            flex: 2;
            // height: 50em;
            // background-color: lightblue;
            .searchName {
                width: 70%;
            }
            .menu {
                padding: 0 2% 0 0;
                h4 {
                    margin: 0.2em;
                    padding-bottom: 0.5em;
                }
                .stydentForm {
                    .el-form-item__content {
                        // margin: 0 !important;
                        .el-input__suffix {
                            right: 0 !important;
                        }
                        .el-input {
                            width: 70%;
                        }
                    }
                }
            }
        }
        .formData {
            flex: 3;
            text-align: center;
            .el-table {
                text-align: center !important;
                float: right;
                // padding: 5%
                margin: 2%;
            }
            // background-color: lightpink;
        }
    }
</style>

