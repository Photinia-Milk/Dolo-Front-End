<template>
    <div class="navContainer" >
        <div class = "navRoot" >
            <img  src="@/assets/logo.png"
                  alt=""
                  class="iconNav"/>
            <div class="DoloNameDiv" >
                <p class="DoloName">{{DoloName}}</p>
            </div>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    router
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#a0c4fd"
                    active-text-color="#4189fa"
                    style=" height: 59px; margin-left: auto; margin-right:20px;">

                <el-submenu index="1">
                    <template slot="title">学生账号</template>
                    <el-menu-item index="logout">账号登出</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">选课与退选</template>
                    <el-menu-item index="courseSelect">自主选课</el-menu-item>
                    <el-menu-item index="undevelop">推荐课表选课(开发中)</el-menu-item>
                    <el-menu-item index="undevelop">重修选课(开发中)</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">信息查询</template>
                    <el-menu-item index="courseTable">学生课表查询</el-menu-item>
                    <el-menu-item index="gpa">GPA/学积分查询(开发中)</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">教学项目报名</template>
                    <el-menu-item index="undevelop">访学报名(开发中)</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">教务申请</template>
                    <el-menu-item index="undevelop">补考申请(开发中)</el-menu-item>
                    <el-menu-item index="undevelop">重考申请(开发中)</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">教学评价</template>
                    <el-menu-item index="course_evaluate">学生评价(开发中)</el-menu-item>
                </el-submenu>
<!--                <el-menu-item index="browse"></el-menu-item>-->
                <el-menu-item index="4"><a href="" target="_blank">联系我们</a></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<style>
    .iconNav{
        margin-left: 11px;
        margin-top: 7px;
        margin-right: 8px;
        width: 45px;
        height: 45px;
    }
    .navContainer{
        height: 70px;
    }
    .navRoot{
        margin-right: 30px;
        margin-top: 10px;
        height: 59px;
        display: flex;
        border-bottom: 1px #eeeeee solid;
    }
    .DoloName{
        color: #FAFAFA;
        font-family: "Hiragino Sans GB";
        font-weight: bold;
        font-size: 30px;
        margin-top: 6px;
    }
    .DoloNameDiv{
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
        data() {
            return {
                activeIndex: 'browse',
                DoloName: "Dolo",
            };
        },
        methods: {
            created(){
                /*
                let path = this.$route.path;
                path = path.replace("/bookstore/","");
                this.activeIndex = path;
                console.log("index activating : " + this.activeIndex);
                */

            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
