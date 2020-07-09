<template>
    <div class = "container" style="display:flex;justify-content: center; align-items:center; height: 740px">
        <el-card class="boxCard" shadow="hover" body-style="{ padding: '0px' }">
            <img class="img" src="@/assets/Login/login.jpg" alt="login">
            <div style="display:flex;justify-content: center;align-items:center; margin-top: 1px">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top:20px;">
                    <el-form-item label="账户" prop="pass">
                        <el-input type="password" v-model="ruleForm.userID" autocomplete="off" style="margin-right:300px"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" style="margin-right:300px"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button type="success" @click="registry()">注册</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        "name": "Login",
        "data"() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    if (this.ruleForm.userID !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                }
                else {
                    callback();
                }
            };
            return {
                "ruleForm": {
                    "userID":'',
                    "password":''
                },
                "rules": {
                    "userID": [
                        { "validator": validatePass, "trigger": 'blur' }
                    ],
                    "password": [
                        { "validator": validatePass2, "trigger": 'blur' }
                    ]
                }
            };
        },
        "methods": {
            "submitForm"(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            "resetForm"(formName) {
                this.$refs[formName].resetFields();
            },
            "registry"(){
            }
        }
    }
</script>


<style scoped>
    .img{
        width: 600px;
    }
</style>
