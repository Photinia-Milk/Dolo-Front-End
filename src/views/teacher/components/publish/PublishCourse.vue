<template>
    <div id="manageCourse">
        <h1>添加课程</h1>
        <div class="main">
            <div class="title">填写课程信息：</div>
            <hr>
            <el-form :model="form" ref="form" :rules="rules" label-position="top">
                <el-form-item label="课程编号" prop="courseID">
                    <el-input v-model="form.courseID" placeholder="请填写该课程的编号"></el-input>
                </el-form-item>
                <el-form-item label="课程名称" prop="courseName">
                    <el-input v-model="form.courseName" placeholder="请填写该课程的名称"></el-input>
                </el-form-item>
                <el-form-item label="课程简介" prop="courseDes">
                    <el-input v-model="form.courseDes" placeholder="请填写该课程的简介"></el-input>
                </el-form-item>
                <el-form-item label="上课教室" prop="classroom">
                    <el-input v-model="form.classroom" placeholder="请填写该课程上课地点"></el-input>
                </el-form-item>
                <el-col :span="8"></el-col><el-form-item label="学分" prop="credit">
                <el-input-number v-model="form.credit" @change="handleChange" :step="1" :min="1" :max="6"></el-input-number>
            </el-form-item>

                <el-row>
                    <el-col :span="8">
                        <el-form-item label="课程教授年级" prop="semester">
                            <el-select v-model="form.semester" placeholder="请选择">
                                <el-option
                                        v-for="item in semester"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8">
                        <el-form-item label="课程院系" prop="department">
                            <el-select v-model="form.departmentName" placeholder="请选择">
                                <el-option
                                        v-for="item in department"
                                        :key="item.departmentID"
                                        :label="item.departmentName"
                                        :value="item.departmentID"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="8">
                        <!--<el-form-item label="类型" prop="departmentName">-->
                        <!--<el-select v-model="form.departmentName" placeholder="请选择">-->
                        <!--<el-option label="必修" value="1"></el-option>-->
                        <!--<el-option label="选修" value="0"></el-option>-->
                        <!--</el-select>-->
                        <!--</el-form-item>-->
                        <el-form-item label="总人数" prop="capacity">
                            <el-input-number v-model="form.capacity" @change="handleChange" :min="1" :max="200"></el-input-number>
                        </el-form-item>
                    </el-col>

                    <el-button
                            type="success"
                            round
                            icon="el-icon-circle-plus"
                            style="margin-top: 20px"
                            @click="submit"
                    >添加课程</el-button>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    courseName: "",
                    departmentName:"",
                    courseDes: "",
                    credit: "",
                    semester: "",
                    departmentID: "",
                    // teacherID: this.$store.state.teacherID,
                    teacherID:"",
                    capacity: ""
                },
                semester: [
                    {
                        value: 1,
                        label: "大一上学期"
                    },
                    {
                        value: 2,
                        label: "大一下学期"
                    },
                    {
                        value: 3,
                        label: "大二上学期"
                    },
                    {
                        value: 4,
                        label: "大二下学期"
                    },
                    {
                        value: 5,
                        label: "大三上学期"
                    },
                    {
                        value: 6,
                        label: "大三下学期"
                    },
                    {
                        value: 7,
                        label: "大四上学期"
                    },
                    {
                        value: 8,
                        label: "大四下学期"
                    }
                ],
                department: [],//[{"departmentName":"计算机科学系","departmentID":"CS"}],
                rules: {
                    courseID:[
                        {
                            required: true,
                            message: "请输入课程编号",
                            trigger: ["blur", "choose"]
                        }
                    ],
                    courseName: [
                        {
                            required: true,
                            message: "请输入课程名称",
                            trigger: ["blur", "choose"]
                        }
                    ],
                    courseDes: [
                        {
                            required: true,
                            message: "请输入课程简介",
                            trigger: ["blur", "choose"]
                        }
                    ],
                    classroom:[
                        {
                            required: true,
                            message: "请输入上课地点",
                            trigger: ["blur", "choose"]
                        }
                    ],
                    credit: [
                        { required: true, message: "请输入学分", trigger: ["blur", "choose"] }
                    ],
                    semester: [
                        { required: true, message: "请选择", trigger: ["blur", "choose"] }
                    ],
                    departmentID: [
                        { required: true, message: "请选择", trigger: ["blur", "choose"] }
                    ],
                    capacity:[
                        { required: true, message: "请选择", trigger: ["blur", "choose"] }
                    ]
                }
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            submit() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.$confirm("您确定要执行此操作吗?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        })
                            .then(() => {
                                this.addCourse();
                            })
                            .catch(() => {
                                this.$message({
                                    type: "info",
                                    message: "操作已取消"
                                });
                            });
                    } else {
                        return false;
                    }
                });
            },
            addCourse() {
                let obj = this.form;
                obj.departmentID = this.form.departmentName;
                obj.semester = this.form.semester;
                obj.courseName = this.form.courseName;
                obj.courseID = this.form.courseID;
                obj.courseDes = this.form.courseDes;
                obj.classroom = this.form.classroom;
                obj.credit = this.form.credit;
                obj.capacity = this.form.capacity;
                obj.teacherID = this.form.teacherID;
                console.log(obj);
                this.axios
                    .post("/addCourse", obj)
                    .then(res => {
                        if (res.data.code == 1) {
                            this.$message.success("添加成功，请选择上课时间");
                            this.$refs.form.resetFields();
                            this.$router.push("/teacher/addClass");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.$message("服务器无法连接，添加课程失败");
                    });
            },
            getDepartment() {
                this.axios
                    .get("/getDepartment")
                    .then(res => {
                        if (res.data.code == 1) {
                            this.department = res.data.data;
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.$message("服务器无法连接，无法获取院系列表");
                    });
            }
        },
        mounted() {
            this.getDepartment();
        }
    };
</script>

<style lang='scss' scoped>
    .main {
        background-color: #fff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        .el-select {
            width: 90%;
        }
    }
</style>
