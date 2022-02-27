<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-3">Редактор базы правил</h3>
        <div class="card horizontal rulesContainer z-depth-3">
            <!-- <h4 class="blue-text text-darken-3" style="font-weight: 500; font-size: 3em; opacity: 40%;">Редактор базы правил</h4> -->
            <ul class="rulesCard">
                <li @click="editShow" class="rule z-depth-2 waves-effect" style="padding: 15px;" v-for="rule in this.rules" :key="rule.key">
                    {{rule.text}}<br>
                    <p class="flow-text" style="margin: 0;">{{rule.value}}</p>
                    <i class="material-icons myIcon">settings</i>
                </li>
                <li @click="editShow" class="rule addRule z-depth-2 grey-text waves-effect text-lighten-2 white"><i class="material-icons myIconAdd">add</i></li>
            </ul>
            <i class="material-icons cardIcon">fingerprint</i>
        </div>
    </div>
    <transition name="bounce">
    <div v-if="this.edit" class="editor" @click="modalClick">
        <edit-rule @editSave = "editSave"/>
    </div>
    </transition>
</template>

<script>
import editRule from '@/components/editRule'
export default {
    data() {
        return {
            rules:
            [
                { key: 0, text: "Правило 1", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 1, text: "Правило 2", value: "Если УУД ВЫСОКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС СРЕДНИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 2, text: "Правило 3", value: "Если УУД НИЗКИЙ И В ВЫСОКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 3, text: "Правило 4", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 4, text: "Правило 5", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 5, text: "Правило 6", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 6, text: "Правило 7", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 7, text: "Правило 8", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 8, text: "Правило 9", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
                { key: 9, text: "Правило 10", value: "Если УУД НИЗКИЙ И В НИЗКИЙ И У НИЗКИЙ И СКС НИЗКИЙ И СУ НИЗКИЙ И О НИЗКИЙ ТОГДА НОВИЧОК"},
            ],
            edit : false
        }
    },
    components: {
        editRule
    },
    methods: {
        modalClick (e) {
            var element = document.querySelector('.editorIn');
             if (e.target !== element && !element.contains(e.target)) {
                this.edit = false
            }
        },
        editShow () {
            this.edit = true
        },
        editSave () {
            this.edit = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .editor{
        // position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(5px);
        overflow: hidden;
    }

    .rulesCard{
        display: flex;
        flex-wrap: wrap;
        margin: 0;
    }
    .rule {
        width: 100%;
        height: fit-content;
        //max-height: 100px;
        margin: 10px;
        background-color: lighten(#b4e6eb, 20%);
        font-size: 2em;
        font-weight: 500;
        transition: .3s ease;
        color: lighten(#2f79ee, 10%);
        &:hover {
            background-color: lighten(#2f79ee, 5%);
            transform: scale(103%);
            color: #fff;
        }

        &:hover > .myIcon {
            animation-play-state: running;
        }
    }

    .myIconAdd{
        font-size: 4em;
    }

    .myIcon{
        animation: rotate360 1.2s linear infinite;
        position: absolute;
        bottom: -50px;
        right: -40px;
        font-size: 5em;
        opacity: 30%;
        animation-play-state: paused;
    }
    .addRule{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes rotate360 {
        to{ transform: rotate(360deg); }
    }

    .rulesContainer{
        overflow: hidden;
        margin-top: 0;
        position: relative;
        z-index: 2;
        //display: flex;
        flex-direction: column;
        padding: 20px;
        transition: transform .2s ease;
        h4{
            margin: 0;
        }
        &:hover{
            transform: scale(101%);
        }
        background-color: lighten(#2f79ee, 40%);
    }

    // .trassirovka{
    //     margin-top: 0;
    //     position: relative;
    //     z-index: 2;
    //     display: flex;
    //     flex-direction: column;
    //     padding: 20px;
    //     h4{
    //         margin: 0;
    //     }
    //     transition: transform .2s ease;
    //     height: 500px;
    //     background-color: lighten(#2e77c4, 0%);
    //     &:hover{
    //         transform: scale(101%);
    //     }
    //     overflow: hidden;
    // }
    .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.10);
  }
  100% {
    transform: scale(1);
  }
}
</style>