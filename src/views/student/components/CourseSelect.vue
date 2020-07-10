<template>
    <el-container class="container">
        <div class="select-container">
            <div class="select-left-container">
                <SearchBox class="search"></SearchBox>
            </div>
            <div class="select-right-container">
                <CourseTable class="table" width="500"></CourseTable>
            </div>
        </div>
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
    .select-left-container{
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
