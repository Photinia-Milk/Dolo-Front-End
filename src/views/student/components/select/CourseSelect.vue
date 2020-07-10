<template>
    <el-container class="container">
        <div class="select-container">
            <div class="select-left-container">
                <SearchBox style="margin-bottom: 40px;"></SearchBox>
                <div v-for="item in articles" :key="item.title">
                    <SchoolArticles :title="item.title" :content="item.content"></SchoolArticles>
                </div>
            </div>
            <div class="select-right-container">
                <CourseTable class="table" width="500"></CourseTable>
            </div>
        </div>
    </el-container>
</template>

<script>
    import SearchBox from "./components/SearchBox";
    import CourseTable from "./components/CourseTable";
    import SchoolArticles from "./components/SchoolArticles";
    export default {
        name: "CourseSelect",
        data(){
            return{
                "articles": [
                    {
                        "title": "本学期选课已正式开始",
                        "content": "请同学们及时选择本学期课程，\n避免错过正常的选课时间\n\n本学期的选课时段为：\n2018-07-01 - 2018-08-14\n 逾期选课系统即关闭",
                    },
                    {
                        "title": "这是一篇测试",
                        "content": "你们做的非常好！\n请继续努力",
                    }
                ],
            }
        },
        components: {
            SearchBox,
            CourseTable,
            SchoolArticles
        }
    }
</script>

<style scoped>
    .select-left-container{
        width: auto;
        display: flex;
        flex-direction: column;
    }
    .select-right-container{
        margin-left: 40px;
        display: flex;
        flex-direction: column;
    }
.select-container{
    display: flex;
    flex-direction: row;

}
</style>
