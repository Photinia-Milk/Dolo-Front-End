<template>
    <div class="browseSearch">
        <div class="browseInput">
            <el-input
                    v-model="key"
                    size="medium"
                    placeholder="课程号、课程名称或教学班名称"
                    @keyup.enter.native='handleSearch'
                    class="searchInput"
            ></el-input>
        </div>
        <el-button
                size="small"
                type="primary"
                icon="el-icon-search"
                @click="handleSearch()">查找</el-button>
    </div>
</template>

<script>
    export default {
        name: "SearchBox"
    }
</script>

<style scoped>
    .browseInput{
        padding-left: 30px;
        padding-right: 30px;
    }
    .browseSearch{
        display: flex;
        flex-direction: row;
    }
</style>
