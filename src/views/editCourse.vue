<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-1">Редактирование курса</h3>
        <div class="card horizontal edit" style="padding: 15px">
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
                <button @submit.prevent="saveChanges" class="waves-effect waves-light btn" style="background-color: #2acc72;"><i class="material-icons left">cloud</i>Сохранить изменения</button>
                <a class="waves-effect waves-light btn" @click="this.edit = true;" style="background-color: #2f79ee; margin-left: 15px;"><i class="material-icons left">group_add</i>Редактор групп</a>
                <ul>
                    <li v-for="theme in course.courseThemes" :key="theme.themeID">
                        <div class="card courseCard" style="width:100%">
                            <div class="card-content grey-text text-darken-2" style="font-weight: 600;">
                                <span class="card-title" style="font-weight: 600;">{{theme.name}} Сложность: {{ getDifficuiltyName(theme.difficuilty) }}</span>
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
    <div v-if="this.edit" class="editor" @click="modalClick">
        <edit-course-group class="editGroups"/>
    </div>
</template>

<script>
import editCourseGroup from '@/components/courseGroupEdit'
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
                ],
            },
            edit : false
        }
    },
    components: {
        editCourseGroup
    },
    mounted () {
        var elems = document.querySelectorAll('.material-tooltip');
        elems.forEach((el) => {
            el.parentElement.removeChild(el);
        })
        M.AutoInit();
    },
    methods: {
        modalClick (e) {
            var element = document.querySelector('.editWrapper');
            var element1 = document.querySelector('.newGroupSearch');
            console.log(e.target)
             if (e.target !== element && !element.contains(e.target)) {
                this.edit = false
            }
        },
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

<style lang="scss" scoped>
.courseCard {
    background-color: lighten(#2f79ee, 40%);
}
.input-field .prefix.active {
     color: #2f79ee;
   }
.headText{
        position: relative;
        z-index: 1;
        width: fit-content;
        background-color: #fff;
        padding: 15px;
        margin-top: 15px;
        margin-bottom: 0;
        border-radius: 20px 20px 0 0 ;
    }
@mixin icons-stack {
        position: absolute;
        top: 5px;
        color: lighten(#2f79ee, 20%);
        transition: color .2s ease;

        &:hover {
            color: darken(#2f79ee, 5%) !important;
        }
    }

    .edit-icon{
        @include icons-stack;
        right: 5px;
    }
    .stats-icon{
        @include icons-stack;
        right: 35px;
    }
    .test-icon{
        @include icons-stack;
        right: 65px;
    }
    textarea:focus {
        border-bottom: 1px solid #2f79ee !important;
        box-shadow: 0 1px 0 0 #2f79ee !important;
    }
    .edit{
        position: relative;
        z-index: 2;
        margin-top: 0;

    }
    .editor{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(5px);
        overflow: hidden;
    }
</style>