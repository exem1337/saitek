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

        <div class="card horizontal rulesContainer z-depth-3">
            <h4 class="white-text text-darken-2" style="font-weight: 500; font-size: 3em;">Статистика по дисциплинам</h4>
            <ul>
                <li v-for="stat in this.stats" :key="stat.key">
                    <div class="discipline">
                        <h4 style="margin-bottom: 15px;">{{stat.discName}}</h4>
                        <h3 class="progress-label">{{stat.percentage}}%</h3>
                        <div class="progress">
                            <div class="determinate bar" :style="{width: stat.percentage + '%'}"></div>
                        </div>
                    </div>

                </li>
            </ul>

            <i class="material-icons cardIcon">fingerprint</i>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Данила',
                surname: 'Акладский',
                patronim: 'Вячеславович',
                avatar: "https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg",
                Faculty: 'ФМИТ',
                Course: '2',
                Group: '19ИВТ(б)-ПОВТ'
            },
            stats:
            [
                {
                    discName: "Основы программирования на языке C++",
                    percentage: 75,
                    key: 0
                },
                {
                    discName: "Основы программирования на языке C++",
                    percentage: 25,
                    key: 1
                },
                {
                    discName: "Основы программирования на языке C++",
                    percentage: 45,
                    key: 2
                },
                {
                    discName: "Основы программирования на языке C++",
                    percentage: 100,
                    key: 3
                },
                {
                    discName: "Основы программирования на языке C++",
                    percentage: 50,
                    key: 4
                },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
    ul:last-child > li > .discipline{
        margin-bottom: 0;
    }

    .progress-label{
        position: absolute;
        right: 30px;
        top: -10px;
        color:#4f2fa9;
        font-weight: 700;
        opacity: 15%;
        transition: opacity .3s ease;
    }

    .discipline{
        height: fit-content;
        padding: 10px;
        background: color #ffa000;
        border-radius: 15px;
        margin-bottom: 15px;
        position: relative;
        z-index: 2;
        transition: transform .3s ease;
        background-color: #ffa000;
        &:hover {
            transform: scale(101%);
        }
        &:hover > .progress-label {
            opacity: 30%;
        }
        h4 {
            font-weight: 500;
            color: #fff;
        }
    }

    .rulesContainer{
        overflow: hidden;
        margin-top: 0;
        position: relative;
        z-index: 1 !important;
        display: flex;
        transform: translateY(-20px);
        flex-direction: column;
        padding: 20px;
        transition: transform .2s ease;
        h4{
            margin: 0;
        }
        background-color: lighten(#4f2fa9, 20%);
    }

    .bar{
        background-color: lighten(#4f2fa9, 20%);
    }

    .progress  {
        background-color: lighten(#ffa000, 20%);
    }

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
        position: relative;

        border-radius: 0 10px 10px 10px;
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