<template>
    <el-container class="container">
        <el-main>
            <SearchBox class="search"></SearchBox>
            <CourseTable class="table" width="500"></CourseTable>
        </el-main>
    </el-container>
</template>

<script>
    import SearchBox from "./SearchBox";
    import CourseTable from "./CourseTable";
    export default {
        name: "CourseSelect",
        components: {
            SearchBox,
            CourseTable
        }
    }
</script>

<style scoped>

</style>
