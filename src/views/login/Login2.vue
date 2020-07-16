<template>
    <div class="page login-page">
        <div class="container d-flex align-items-center">
            <div class="form-holder has-shdow">
                <div class="row">
                    <!-- log area-->
                    <div class="col-lg-6">
                        <div class="info d-flex align-items-center">
                            <div class="logo">
                                <div class="log-cloud cloud1"></div>
                                <div class="log-cloud cloud2"></div>
                                <div class="log-cloud cloud3"></div>
                                <div class="log-cloud cloud4"></div>
                                <h1>欢迎登录</h1>
                                <p>上海交通大学教学信息服务网</p>
                            </div>
                        </div>
                    </div>
                    <!-- form area -->
                    <div class="col-lg-6 bg-white">
                        <div class="form d-flex align-items-center">
                            <div class="content">
                                <form action="" method="post" class="form-validate" id="login-form">
                                    <div class="form-group">
                                        <b-input v-model="user.username" id="username" name="username" :required=true data-msg="请输入用户名"  placeholder="请输入用户名"></b-input>
                                    </div>
                                    <div class="form-group">
                                        <b-input v-model="user.password" type="password" name="password" :required=true data-msg="请输入密码"  placeholder="请输入密码"></b-input>
                                    </div>
                                    <b-button class="btn btn-primary" @click="tologin">登录</b-button>
                                    <div style="margin-top:-20px;">
                                        <div class="custom-control custom-checkbox" style="float:right;">
                                            <b-form-checkbox id="chkremenber">记住密码</b-form-checkbox>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../assets/css/login.css'
    import {login} from "../../api/api";
    export default {
        name: 'Login2',
        data(){
            return{
                user:{username:'',password:''},
            }
        },
        methods:{
            tologin(){
                console.log(this.user);
                login(this.user).then(res=>{
                    if(res.status===200){
                        this.$message.success('登陆成功！');
                        // console.log(res);
                    }
                }).catch(()=>{
                    this.$message.error('网络繁忙，请稍后重试！')
                })

                }
            }
        }


</script>

<style scoped>
    .cloud1{top:21px; left: -30px; transform: scale(.6); animation: cloud1 20s linear infinite;}
    .cloud2{top:87px; right: 20px; animation: cloud2 19s linear infinite;}
    .cloud3{top:160px; left: 5px;transform: scale(.8);animation: cloud3 21s linear infinite;}
    .cloud4{top:150px; left: -40px;transform: scale(.4);animation: cloud4 19s linear infinite;}
    .log-cloud{background-image: url(../../../public/login-cloud.png); width: 63px ;height: 40px; position: absolute; z-index: 1}
</style>

