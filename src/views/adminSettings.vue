<template>
    <div class="container">
        <h3
            class="grey-text text-darken-2 headText z-depth-3 tab-active"
            :class="{ 'non-active-tab' : activeTab == 1 }"
            @click="activeTab = 0"
        >Редактор базы правил</h3>

        <div class="editor-outer">
            <h3
                class="grey-text text-darken-2 headText headText-right z-depth-3"
                :class="{ 'non-active-tab' : activeTab == 0 }"
                @click="activeTab = 1"
            >Добавление правила</h3>

            <rules-editor v-if="activeTab == 0" />

            <add-rule v-if="activeTab == 1" />
        </div>

    </div>

</template>

<script>
import rulesEditor from '@/components/rulesEditor'
import addRule from '@/components/addRule'
import { ref } from 'vue'
export default {
    components: {
        rulesEditor,
        addRule
    },
    setup() {
        const activeTab = ref(0)

        return {
            activeTab
        }
    },
}
</script>

<style lang="scss">
.editor-outer{
    position: relative;
}

.non-active-tab {
    filter: brightness(95%);
    z-index: 1 !important;
}

.headText{
    cursor: pointer;
}

.headText-right{
    position: absolute;
    top: -93px;
    left: 490px;
    z-index: 2 !important;
}

.editor{
    position: fixed;
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
    // &:hover{
    //     transform: scale(101%);
    // }
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