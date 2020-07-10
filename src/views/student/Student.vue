<template>
    <div class="student-container">
        <el-scrollbar style="height: 100%">
            <el-container style=" width: 1400px; height:100%;">
                <el-header >
                    <NavBarStudent class="header"> </NavBarStudent>
                </el-header>
                <el-container style="margin-top: 80px;">
<!--                    <el-aside width="202px">-->
<!--                        <SideBar class="aside"></SideBar>-->
<!--                    </el-aside >-->
                    <el-main style=" padding-top:0px; margin-top:-52px">
                        <router-view></router-view>
                    </el-main>
                </el-container>
                <el-footer>
                    <div class="footer-spacer"></div>
                </el-footer>
            </el-container>
        </el-scrollbar>
    </div>
</template>

<script>
    import NavBarStudent from "../student/components/NavBarStudent";
    export default {
        components: {
            NavBarStudent,
        }
    }
</script>

<style scoped>
    .el-scrollbar__wrap {
        overflow: visible;
        overflow-x: hidden;
    }
    .footer-spacer{
        height: 240px;
    }
    .student-container{
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
        /*外部间距也是如此设置*/
        margin: 0px;
    }
    .header{
        position:absolute;
        position: fixed ;
        top:0px;
        width: 98%;
        margin-right: 80px;
        z-index:10;
        background-color: #FFFFFF;
    }
</style>
