<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-3">Мой профиль</h3>
        <div class="card horizontal profile-info z-depth-3">
            <div class="image-wrapper">
                <img class="avatar" src ="https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg">
                <img class="img-top" src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0" alt="">
            </div>
            <div class="profile-content">
                <div class="profile-content-inner">
                    <p class="userName flow-text">Фамилия: <span class="data">{{this.user.surname}}</span></p>
                    <p class="userName flow-text">Имя: <span class="data">{{this.user.name}}</span></p>
                    <p class="userName flow-text">Отчество: <span class="data">{{this.user.patronim}}</span></p>
                </div>
                <div class="profile-content-inner">
                    <p class="userName flow-text">Факультет: <span class="data">{{this.user.Faculty}}</span></p>
                    <p class="userName flow-text">Курс: <span class="data">{{this.user.Course}}</span></p>
                    <p class="userName flow-text">Группа: <span class="data">{{this.user.Group}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PieChart from '../components/PieChart';
export default {
    components: {
        PieChart,
    },
    data() {
        return {
            pieData: [
                { color: "#0B6487", value: 30 },
                { color: "#9D1F37", value: 40 },
                { color: "#F6931C", value: 30 }
            ],
            user: {
                name: 'Данила',
                surname: 'Акладский',
                patronim: 'Вячеславович',
                avatar: "https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg",
                Faculty: 'ФМИТ',
                Course: '2',
                Group: '19ИВТ(б)-ПОВТ'
            }
        }
    },
    components: {

    }
}
</script>

<style lang="scss" scoped>
    .avatar{
        // max-width: 200px !important;
        border-radius: 50% !important;
        max-width: 300px !important;
        display: inline-block !important;
        position: relative !important;
    }

    .img-top {
        display: none;
        border-radius: 50% !important;
        max-width: 300px !important;
        position:absolute;
        top: 0;
        left: 0;
        z-index: 99;
        opacity: 0.7;
        transition: opacity .5s ease;
    }

    .names{
        margin: 20px !important;
    }

    .userData{
        p{
            margin-top: 10px;
        }
    }

    .userName{
        color: teal;
    }

    .data{
        color: #424242;
    }

    .profile-info{
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    .profile-content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @media only screen and (max-width: 1024px) {
        .profile-info {
            flex-direction: column;
        }
        .image-wrapper {
            margin: 0 auto;
        }
    }

    .image-wrapper {
        position: relative;
    }

    .image-wrapper:hover .img-top {
        display: inline;
    }

    .card{
        margin-top: 0;
        position: relative;
        z-index: 2;
    }
</style>