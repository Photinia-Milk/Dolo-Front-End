<template>
    <div class = "container" style="display:flex;justify-content: center; align-items:center; height: 740px">
        <el-card class="boxCard" shadow="hover" body-style="{ padding: '0px' }">
            <img class="img" src="@/assets/Login/login.jpg" alt="login">
            <div style="display:flex;justify-content: center;align-items:center; margin-top: 1px">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top:20px;">
                    <el-form-item label="手机号" prop="phone" >
                        <el-input v-model.number="ruleForm.phone" class="input" style="margin-right:200px"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"  class="input"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
        name: "Login.vue"
    }
</script>

<style scoped>

</style>
