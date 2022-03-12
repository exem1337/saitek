<template>
<div class="card horizontal rulesContainer z-depth-3">
    <!-- <h4 class="blue-text text-darken-3" style="font-weight: 500; font-size: 3em; opacity: 40%;">Редактор базы правил</h4> -->
    <ul class="rulesCard">
        <li @click="editShow" class="rule z-depth-2 waves-effect" style="padding: 15px;" v-for="rule in rules" :key="rule.key">
            {{rule.text}}<br>
            <p class="flow-text" style="margin: 0;">{{rule.value}}</p>
            <i class="material-icons myIcon">settings</i>
        </li>
        <!-- <li @click="editShow" class="rule addRule z-depth-2 grey-text waves-effect text-lighten-2 white"><i class="material-icons myIconAdd">add</i></li> -->
    </ul>
    <i class="material-icons cardIcon">fingerprint</i>
</div>
<teleport to='body' >
    <transition name="bounce">
        <div v-if="edit" class="editor" @click="modalClick">
            <edit-rule @editSave = "editSave"/>
        </div>
    </transition>
</teleport>
</template>

<script>
import editRule from '@/components/editRule'
import { ref } from 'vue'
export default {
    components: {
        editRule
    },
    setup() {
        const rules =
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
        ]

        const edit = ref(false)

         const editShow = () => {
            edit.value = true;
            console.log(edit.value)
        }

        const editSave = () => {
            edit.value = false;
        }

        const modalClick = (e) => {
            var element = document.querySelector('.editorIn');
             if (e.target !== element && !element.contains(e.target)) {
                this.edit = false
            }
        }

        return {
            rules,
            editShow,
            editSave,
            modalClick,
            edit
        }
    },
}
</script>

<style lang="scss" scoped>

</style>