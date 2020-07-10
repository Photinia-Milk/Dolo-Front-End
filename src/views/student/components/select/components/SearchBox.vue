<template>
    <el-card class="browseSearch box-card" style="width: 620px;">
        <div class="browseStudent">
            <el-input
                    style="width: 490px;"
                    v-model="key"
                    size="medium"
                    placeholder="课程号、课程名称或教学班名称"
                    @keyup.enter.native='handleSearch'
                    class="searchInput"
            ></el-input>
            <el-button
                    style="margin-left: 25px; margin-right: auto;"
                    size="small"
                    type="primary"
                    icon="el-icon-search"
                    @click="handleSearch()">查找</el-button>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "SearchBox",
        key: "",
    }
</script>

<style scoped>
    .browseStudent{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .browseSearch{
        display: flex;
        flex-direction: row;
    }
</style>
