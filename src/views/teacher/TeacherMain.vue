<template>
    <div>
        <NavBarStudent></NavBarStudent>
        <publish-course></publish-course>
    </div>
</template>

<script>
    import NavBarStudent from './components/navbar/NavBarTeacher';
    import PublishCourse from "./components/publish/PublishCourse";
    export default {
        components: {
            PublishCourse,
            NavBarStudent,
        }
    }
</script>
