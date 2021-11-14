<template>
    <div class="container">
        <h3 class="text-darken-2">Дисциплины</h3>
        <div class="card horizontal" style="padding: 15px">
            <ul style="width:100%">
                <li v-for="course in courses" :key="course"> 
                    <div class="card blue-grey darken-1 waves-effect" style="width:100%">
                        <div class="card-content white-text course-card">
                            <span class="card-title">{{course}}</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons edit-icon tooltipped" data-position="top" data-tooltip="Редактировать курс">edit</i></router-link>
                            <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons stats-icon tooltipped" data-position="top" data-tooltip="Статистика курса">view_list</i></router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>      
    </div>
</template>

<script>
export default {
    data(){
        return{
            courses: ['Основы программирования на языке C++', 'Основы теории управления', 'Базы данных']
        }
    },
    mounted(){
        M.AutoInit();
    }
}
</script>

<style lang="scss">
    @mixin icons-stack {
        position: absolute;
        top: 5px;
        color: #fff;
        transition: color .2s ease;

        &:hover {
            color: lightblue
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
    .course-card{
        transition: background-color .2s ease;
        &:hover{
            background-color: darken(#546e7a ,10%) !important;
        }
    }
</style>