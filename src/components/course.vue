<template>
    <div class="theme-inner">
        <sidebar/>
        <div class="content flow-text">
            <div class="theme-name spotlight z-depth-2">
                <p class="white-text">Дисциплина: Основы программирования на языке C++ <br> Тема: Тема 1 - Введение в C++</p>
                <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
            <themeContent/>
        </div>
    </div>
</template>

<script>
//import changeColor from '../js/hoverColor.js'
import header from '../components/header.vue'
import sidebar from '../components/sidebar.vue'
import themeContent from '../components/themeContent.vue'
export default {
    components:{
        sidebar, header, themeContent
    },
    data() {
        return {
            themes: [
                { name: 'Глава 1. Введение в С++' , key: 1},
                { name: 'Глава 1. Введение в С++' , key: 2},
                { name: 'Глава 1. Введение в С++' , key: 3},
                { name: 'Глава 1. Введение в С++' , key: 4},
                { name: 'Глава 1. Введение в С++' , key: 5},
                { name: 'Глава 1. Введение в С++' , key: 6},
                { name: 'Глава 1. Введение в С++' , key: 7},
                { name: 'Глава 1. Введение в С++' , key: 8},
                { name: 'Глава 1. Введение в С++' , key: 9},
                { name: 'Глава 1. Введение в С++' , key: 10}
            ],
        }
    }
}
</script>

<style scoped lang="scss">
.content{
    height: 91vh;
}

.theme-inner{
    display: flex;
}

@media screen and (max-width: 1000px) {
    .theme-name {
        margin-right: 0 !important;
    }
}

.theme-name{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lighten(#2f79ee, 5%) !important;
    border-radius: 0px 0 20px 20px;
    position: relative;
    z-index: 2;
    margin-left: 0px;
    margin-right: 10px;
    padding: 0px 40px;
    transition: .5s;
    height: 10%;
    background-color: transparent;
    transition: .5s all;
}
.pagination {
    width: 120px !important;
    display: flex !important;
    flex-wrap: nowrap !important;

    li{
        background-color: #2acc72 !important;
        margin: 0px 5px !important;
        width: 50px !important;

        i{
            transition: .3s ease-in-out;
            color: #fff !important;
        }
    }
}
.spotlight {
    background-image: radial-gradient(
        circle,
        transparent 60px,
        rgba(0, 0, 0, 0) 200px
    );
}

</style>