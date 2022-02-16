<template>
<div class="container">
<h3 class="grey-text text-darken-2 headText z-depth-3">Определение статуса обучаемого</h3>
<div class="card-panel z-depth-3 white-text" style="padding-bottom: 0; border-radius: 0 20px 20px 20px; position: relative; z-index: 3; transform: translateY(-10px);">
    <button @click="toggleModal" class="waves-effect waves-light btn white-text" style="background-color: #2f79ee; margin-left:10px; margin-bottom: 10px; color: #fff; !important" >Загрузить данные студента</button>
    <p class="grey-text text-darken-2" style="font-size: 1.5em; padding: 0; margin: 0; margin-bottom: 15px;">Уважаемый Акладский Данила Вячеславович! <br> Вы получили следующие результаты:</p>
    <form action="" v-on:submit.prevent="onSubmit">

        <div class="rule-input">
            <div class="col">
                <div class="input-field ">
                    <input id="scillLevel" type="number" class="validate">
                    <label for="scillLevel">Уровень усвоения дисциплины</label>
                </div>
                <div class="input-field">
                    <input id="attentiveness" type="number" class="validate">
                    <label for="attentiveness">Внимательность</label>
                </div>
                <div class="input-field">
                    <input id="perservance" type="number" class="validate">
                    <label for="perservance">Усидчивость</label>
                </div>
            </div>
            <div class="col">
                <div class="input-field">
                    <input id="selfDevelopment" type="number" class="validate">
                    <label for="selfDevelopment">Стремление к самообучению</label>
                </div>
                <div class="input-field">
                    <input id="responsibility" type="number" class="validate">
                    <label for="responsibility">Ответственность</label>
                </div>
                <div class="input-field">
                    <input id="stress" type="number" class="validate">
                    <label for="stress">Стрессоустойчивость</label>
                </div>
            </div>
        </div>
        <input type="submit" id="loginBtn" value="Определить" class="waves-effect waves-light btn white-text" style="color: #fff; background-color: #2f79ee; margin-left:10px; color: #fff; !important">
        <div class="result">
            <p style="font-size: 1.5em;" class="grey-text text-darken-2">Ваш статус: <span>ПРОФЕССИОНАЛ</span></p>
            <input type="submit" id="loginBtn" value="Продолжить" class="waves-effect waves-light btn white-text" style="background-color: #2f79ee; margin-left:10px; color: #fff; !important">
        </div>
    </form>
</div>

<importStudent v-if="needModal == true" @closeModal="closeModal"/>
</div>
</template>

<script>
import importStudent from '@/components/importMamdaniStudent.vue'
import { ref } from 'vue';
export default {
    components: {importStudent},
    setup() {
        let needModal = ref(false)

        const closeModal = () => {
            needModal.value = false
        }

        const toggleModal = () => {
            needModal.value = !needModal.value
            console.log(needModal);
        }

        return {closeModal, needModal, toggleModal}
    },
}
</script>

<style lang="scss" scoped>
.input-field label {
        color: #000 !important;
    }
    /* label focus color */
    .input-field input[type=number]:focus + label {
        color: #000 !important;
    }

form{


    .rule-input{
        display: flex;
        justify-content: space-around;
        .col {
            width: 100%;
            margin: 0 25px;
        }
    }
}

.input-field input[type=number]:focus {
    border-bottom: 1px solid #2f79ee !important;
    box-shadow: 0 1px 0 0 #2f79ee !important;
}

.result{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    border-top: 1px solid grey;
    p{
        margin-left: 25px;

    }
}
span{
    color: #2f79ee;
    font-weight: 600;
}
.result-text{
    margin: 0;
    font-size: 1.5em;
}

.resultConstainter{
    display: flex;
    align-items: center;

    .result-content{
        margin-right: 25px;
    }
}
</style>