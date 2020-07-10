<template>
    <el-card id="courseTable" class="box-card" style="width: 620px; margin-bottom:10px;">
        <div slot="header" class="clearfix">
            <span class="card-header">{{cardTitle}}</span>
        </div>
        <div class="text-wrapper">
            {{cardContent}}
        </div>
    </el-card>

</template>

<style>
    .text-wrapper{
        line-height: 150%;
        white-space: pre-wrap;
        color: #A09691;
    }
    .card-header{
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: #808080;
        font-weight: bold;
    }
    .box-card {
        width: 480px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 700px;
    }
</style>
<script>
    export default {
        props:{
            'title':String,
            'content':String,
        },
        data() {
            return {
                'cardTitle': this.title,
                'cardContent': this.content,
            }
        },
        created() {
        },
        methods: {
            getParent(){
                this.cardTitle = this.home.title;
                console.log(this.home.title);
                console.log(this.cardTitle);
                this.cardContent = this.home.content;
            }
        },
        name: "CourseTable"
    }
</script>

<style scoped>

</style>
