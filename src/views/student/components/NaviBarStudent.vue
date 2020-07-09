<template>
    <div class="navContainer" >
        <div class = "navRoot" >
            <img  src="@/assets/icons/book-icon.png"
                  alt=""
                  class="bookIcon"/>
            <div class="studentNameDiv" >
                <p class="studentName">{{studentName}}</p>
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
                <el-submenu index="1">
                    <template slot="title">学生账号</template>
                    <el-menu-item index="logout">账号登出</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">选课与退选</template>
                    <el-menu-item index="course_select">自主选课</el-menu-item>
                    <el-menu-item index="">推荐课表选课(开发中)</el-menu-item>
                    <el-menu-item index="">重修选课(开发中)</el-menu-item>
                    <el-menu-item index="course_drop">退选</el-menu-item>
                </el-submenu>
                <el-submenu>
                    <template slot="title">信息查询</template>
                    <el-menu-item index="course_list">学生课表查询</el-menu-item>
                    <el-menu-item index="gpa">GPA/学积分查询</el-menu-item>
                </el-submenu>
                <el-submenu>
                    <template slot="title">教学项目报名</template>
                </el-submenu>
                <el-submenu>
                    <template slot="title">教务申请</template>
                </el-submenu>
                <el-submenu>
                    <template slot="title">教学评价</template>
                </el-submenu>
<!--                <el-menu-item index="browse"></el-menu-item>-->
<!--                <el-menu-item index="cart" ></el-menu-item>-->
<!--                <el-submenu index="2">-->
<!--                    <template slot="title">我的账户</template>-->
<!--                    <el-menu-item index="order">历史订单</el-menu-item>-->
<!--                    <el-menu-item index="aggregate">消费统计</el-menu-item>-->
<!--                    <el-menu-item index="history" disabled>浏览记录</el-menu-item>-->
<!--                    <el-menu-item index="collection" disabled>收藏夹</el-menu-item>-->
<!--                    <el-submenu index="2-4">-->
<!--                        <template slot="title">设置</template>-->
<!--                        <el-menu-item index="2-4-1">基本资料</el-menu-item>-->
<!--                        <el-menu-item index="2-4-2" disabled>付款信息</el-menu-item>-->
<!--                        <el-menu-item index="2-4-3">安全</el-menu-item>-->
<!--                    </el-submenu>-->
<!--                </el-submenu>-->
                <el-menu-item index="4"><a href="" target="_blank">联系教务处</a></el-menu-item>
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
    .studentName{
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
        data() {
            return {
                activeIndex: 'browse',
                studentName: "王兴宇",
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
