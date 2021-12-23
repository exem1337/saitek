<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-3">Дисциплины</h3>
            <ul style="width:100%; margin-top:0">
                <li class="myCourse" v-for="course in courses" :key="course">
                    <router-link to="/course">
                    <div class="card waves-effect z-depth-3 discipline" style="width:100%">
                        <div class="card-content grey-text text-darken-2 course-card" style="font-weight: 500">
                            <span class="card-title" style="font-weight: 500">{{course}}</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons edit-icon tooltipped" data-position="top" data-tooltip="Редактировать курс">edit</i></router-link>
                            <router-link to="/courseEdit"><i v-if="$store.state.userType === 2 || $store.state.userType === 1" class="material-icons stats-icon tooltipped" data-position="top" data-tooltip="Статистика курса">view_list</i></router-link>
                        </div>
                        <i class="material-icons cardIcon">memory</i>
                    </div>
                    </router-link>
                </li>
            </ul>
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
    .cardIcon{
        position: absolute;
        bottom: -400px;
        right: -300px;
        font-size: 50em;
        opacity: 10%;
        transform: rotateZ(45deg);
        overflow: hidden;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none;   /* Chrome/Safari/Opera */
        -khtml-user-select: none;    /* Konqueror */
        -moz-user-select: none;      /* Firefox */
        -ms-user-select: none;       /* Internet Explorer/Edge */
        user-select: none;
     
    }

    @mixin icons-stack {
        position: absolute;
        top: 5px;
        color: darken(grey, 10%);
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
    .myCourse{
         &:hover{
            transform: scale(101%);
        }
        position: relative;
        z-index: 2;
        transition: transform .3s ease;
    }
    .course-card{
        transition: background-color .2s ease;

        &:first-child{
            margin-top: 0;
        }
        position: relative !important;
        z-index: 2;
    }
    .card:first-child {
        margin-top: 0;
        border-radius: 0 15px 0 0;
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
    .discipline {
        background-color: lighten(#2f79ee, 40%);
    }
</style>