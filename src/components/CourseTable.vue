<template>
    <vue-tuicalendar
            ref="calendar"
            :options="options"
            :schedules="schedules"
            @after-render-schedule="handler"
            @before-render-schedule="handler"
            @click-schedule="handler"
    >
    </vue-tuicalendar>
</template>


<script>
    export default {
        name: "CourseTable",
        data() {
            return {
                schedules: [
                    {
                        id: "1",
                        calendarId: "1",
                        title: "A schedule",
                        category: "time",
                        dueDateClass: "",
                        start: "2018-05-22T22:30:00+09:00",
                        end: "2018-05-23T02:30:00+09:00"
                    },
                    {
                        id: "2",
                        calendarId: "1",
                        title: "Another schedule",
                        category: "time",
                        dueDateClass: "",
                        start: "2018-05-23T17:30:00+09:00",
                        end: "2018-05-24T17:31:00+09:00",
                        isReadOnly: true
                    }
                ]
            }
        },

        methods: {
            mounted() {
                this.$refs.calendar.fireMethod('clear');
                this.$refs.calendar.fireMethod('getElement');
                this.$refs.calendar.fireMethod('changeView', 'month', true);
            }
        }
    }
</script>
