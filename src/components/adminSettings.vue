<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-3">Панель эксперта</h3>
        <div class="card horizontal rulesContainer z-depth-3 amber darken-2">
            <h4 class="white-text text-darken-2" style="font-weight: 500; font-size: 3em">Редактор базы правил</h4>
            <ul class="rulesCard">
                <li @click="editShow" class="rule grey-text z-depth-2 waves-effect text-lighten-2" style="padding: 15px;" v-for="rule in this.rules" :key="rule.key">
                    {{rule.text}}
                    <i class="material-icons myIcon">settings</i>
                </li>
                <li @click="editShow" class="rule addRule z-depth-2 grey-text waves-effect text-lighten-2 white"><i class="material-icons myIconAdd">add</i></li>
            </ul>
            <i class="material-icons cardIcon">fingerprint</i>
        </div>
        <div class="card horizontal trassirovka z-depth-3">
            <h4 class="white-text text-darken-2" style="font-weight: 500; font-size: 3em">Трассировка</h4>
            <i class="material-icons cardIcon">library_books</i>
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
                { key: 0, text: "Правило 1"},
                { key: 1, text: "Правило 2"},
                { key: 2, text: "Правило 3"},
                { key: 3, text: "Правило 4"},
                { key: 4, text: "Правило 5"},
                { key: 5, text: "Правило 6"},
                { key: 6, text: "Правило 7"},
                { key: 7, text: "Правило 8"},
                { key: 8, text: "Правило 9"},
                { key: 9, text: "Правило 10"},
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
        position: absolute;
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
    }
    .rule {
        width: 30%;
        height: 100px;
        max-height: 100px;
        margin: 10px;
        background-color: lighten(#4f2fa9, 20%);
        font-size: 2em;
        font-weight: 500;
        transition: .3s ease;

        &:hover {
            background-color: darken(#4f2fa9, 10%);
            transform: scale(110%);
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

    @media screen and (max-width: 750px) {
        .rule {
            width: 46%;
        }
    }

    @media screen and (max-width: 630px) {
        .rule {
            width: 100%;
        }
    }

    .rulesContainer{
        overflow: hidden;
        margin-top: 0;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: 20px;
        transition: transform .2s ease;
        h4{
            margin: 0;
        }
        &:hover{
            transform: scale(101%);
        }
    }

    .trassirovka{
        margin-top: 0;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: 20px;
        h4{
            margin: 0;
        }
        transition: transform .2s ease;
        height: 500px;
        background-color: lighten(#4f2fa9, 20%);
        &:hover{
            transform: scale(101%);
        }
        overflow: hidden;
    }
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