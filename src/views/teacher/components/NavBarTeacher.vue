<template>
    <div class="navContainer" >
        <div class = "navRoot" >
            <!--img  src="@/assets/icons/book-icon.png"
                  alt=""
                  class="bookIcon"/-->
            <div class="studentNameDiv" >
                <p class="name">{{name}}</p>
            </div>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    router
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#a0c4fd"
                    active-text-color="#4189fa"
                    style=" height: 59px; margin-left: auto;">
                <!--                之后会增加-->
                <el-submenu index="2">
                    <template slot="title">课程申请</template>
                    <el-menu-item index="publish">发布课程</el-menu-item>
                    <el-menu-item index="asdf">课程修改</el-menu-item>
                    <el-menu-item index="zxcv">往年课程</el-menu-item>
                </el-submenu>
                <el-submenu index="1djkja">
                    <template slot="title" >信息查询</template>
                    <el-menu-item index="course_list">我的评教</el-menu-item>
                </el-submenu>
                <el-submenu index="123123">
                    <template slot="title" >教务申请</template>
                </el-submenu>
                <el-submenu index="1">
                    <template slot="title">我的账号</template>
                    <el-menu-item index="logout">注销</el-menu-item>
                </el-submenu>
                <el-menu-item index="4"><a href="" target="_blank">联系我们</a></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<style>
    .navContainer{
        height: 70px;
    }
    .navRoot{
        margin-top: 10px;
        height: 59px;
        display: flex;
        border-bottom: 1px #eeeeee solid;
    }
    .bookIcon{
        margin-left: 1px;
        margin-top: 7px;
        margin-right: 15px;
        width: 45px;
        height: 45px;
    }
    .name{
        color: #FAFAFA;
        font-family: "Hiragino Sans GB";
        font-weight: bold;
        font-size: 30px;
        margin-top: -7px;
    }
    .studentNameDiv{
        margin-top:7px;
        margin-bottom: 7px;
        border-radius: 30px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #a0c4fd;
    }
</style>

<script>
    export default {
        name: 'NavBarTeacher',
        data() {
            return {
                activeIndex: 'browse',
                name: "Dolo",
            };
        },
        methods: {
            created(){

            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
