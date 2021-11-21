<template>
<div class="editorIn">
    <h3 class="grey-text text-darken-2 headText z-depth-3">Редактор правила</h3>
        <div class="card horizontal editContainer z-depth-3 white darken-2">
            <div class="inputs amber darken-2 z-depth-2">
                <div class="input-field">
                    <input placeholder="Placeholder" id="last_name" type="text" class="validate" value="12">
                    <label for="last_name">Стрессоустойчивость</label>
                </div>
                <div class="input-field">
                    <input id="lasst_name" type="text" class="validate" value="12">
                    <label for="lasst_name">Стрессоустойчивость</label>
                </div>
                <div class="input-field">
                    <input id="lastt_name" type="text" class="validate" value="12">
                    <label for="lastt_name">Стрессоустойчивость</label>
                </div>
                <div class="input-field">
                    <input id="lasta_name" type="text" class="validate" value="12">
                    <label for="lasta_name">Стрессоустойчивость</label>
                </div>
                <div class="input-field">
                    <input id="lastq_name" type="text" class="validate" value="12">
                    <label for="lastq_name">Стрессоустойчивость</label>
                </div>
            </div>
            <i class="material-icons">arrow_forward</i>
            <div class="inputs resultContainer darken-2 z-depth-2 resultContainer">
            <p>Результат: Новичок</p>
        </div>
    </div>
    <a @click="editSave" class="btn-floating saveBtn btn-large waves-effect waves-light red"><i class="material-icons" style="font-size: 2em;">cloud</i></a>
</div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        editSave() {
            console.log('emitted')
            this.$emit("editSave")
        }
    },
    mounted () {
        M.AutoInit()
    }
}
</script>

<style lang="scss" scoped>
    .editContainer{
        position: relative;
        z-index: 2;
        margin-top: 0;
        padding: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 0 10px 10px 10px;
    }

    .inputs{
        display: flex;
        flex-direction: column;

        padding: 15px;
        border-radius: 5px;
    }
    i{
        font-size:3em;
    }

    .resultContainer{
        background-color: lighten(#4f2fa9, 20%);
        color:#fff;
        font-weight: 700;
    }
    .editorIn{
        width: fit-content;
        position: relative;
    }
    .saveBtn{
        position: absolute;
        bottom: 30px;
        right: 10px;
        z-index: 3;
        background-color: lighten(#4f2fa9, 20%) !important;
    }
</style>