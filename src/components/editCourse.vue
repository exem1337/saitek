<template>
    <div class="container">
        <div class="card horizontal" style="padding: 15px">
            <form style="width:100%">
                <div class="row" style="margin-bottom: 0">
                    <div class="input-field col s12 m12 l6">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea v-model="course.courseName" id="course_name" class="materialize-textarea"></textarea>
                        <!-- <label for="course_name">Название курса</label> -->
                    </div>
                    <div class="input-field col s12 m12 l6">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea v-model="course.courseDescription" id="course_description" class="materialize-textarea"></textarea>
                        <!-- <label for="course_description">Описание курса</label> -->
                    </div>
                </div>
                <button @submit.prevent="saveChanges" class="waves-effect waves-light btn "><i class="material-icons left">cloud</i>Сохранить изменения</button>
                <ul>
                    <li v-for="theme in course.courseThemes" :key="theme.themeID">
                        <div class="card blue-grey darken-1 waves-effect" style="width:100%">
                            <div class="card-content white-text">
                                <span class="card-title">{{theme.name}} Сложность: {{ getDifficuiltyName(theme.difficuilty) }}</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                <router-link to="/themeGrades"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons edit-icon tooltipped" data-position="top" data-tooltip="Оценки">person</i></router-link>
                                <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons stats-icon tooltipped" data-position="top" data-tooltip="Редактировать тему">edit</i></router-link>
                                <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons test-icon tooltipped" data-position="top" data-tooltip="Редактировать тест">event_note</i></router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            course: {
                courseID: 1,
                courseName: "Основы программирования на языке C++",
                courseDescription: "Это курс по c++",
                courseThemes: 
                [
                    {
                        name: "Тема 1",
                        themeID: 1,
                        difficuilty: 1
                    },
                    {
                        name: "Тема 1",
                        themeID: 2,
                        difficuilty: 2
                    },
                    {
                        name: "Тема 1",
                        themeID: 3,
                        difficuilty: 3
                    },
                    {
                        name: "Тема 1",
                        themeID: 4,
                        difficuilty: 4
                    },
                    {
                        name: "Тема 1",
                        themeID: 5,
                        difficuilty: 5
                    },
                    {
                        name: "Тема 2",
                        themeID: 6,
                        difficuilty: 1
                    },
                    {
                        name: "Тема 2",
                        themeID: 7,
                        difficuilty: 2
                    },
                    {
                        name: "Тема 2",
                        themeID: 8,
                        difficuilty: 3
                    },
                    {
                        name: "Тема 2",
                        themeID: 9,
                        difficuilty: 4
                    },
                    {
                        name: "Тема 2",
                        themeID: 10,
                        difficuilty: 6
                    },
                ]
            }
        }
    },
    mounted () {
        var elems = document.querySelectorAll('.material-tooltip');
        elems.forEach((el) => {
            el.parentElement.removeChild(el);
        })
        M.AutoInit();
    },
    methods: {
        getDifficuiltyName(level) {
            if(level === 1) return "Легкий"
            if(level === 2) return "Низкий"
            if(level === 3) return "Средний"
            if(level === 4) return "Сложный"
            if(level === 5) return "Профессионал"
        },
        saveChanges() {

        }
    }

}
</script>