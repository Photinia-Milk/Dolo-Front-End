<template>
    <div>
        <NavBarStudent></NavBarStudent>
        <publish-course></publish-course>
    </div>
</template>

<script>
    import NavBarStudent from './components/NavBarTeacher';
    import PublishCourse from "./PublishCourse";
    export default {
        components: {
            PublishCourse,
            NavBarStudent,
        }
    }
</script>
