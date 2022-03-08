<template>
<div class="editorIn">
    <h3 class="grey-text text-darken-2 headText z-depth-3">Редактор правила</h3>
        <div class="card horizontal editContainer z-depth-3 white darken-2">
            <div class="inputs z-depth-2">
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Уровень усвоения дисциплины</label>
                </div>
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Внимательность</label>
                </div>
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Усидчивость</label>
                </div>
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Стремление к самообучению и развитию</label>
                </div>
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Ответственность</label>
                </div>
                <div class="input-field">
                    <select class="browser-default">
                    <option value="1" selected>Низкий</option>
                    <option value="2">Ниже среднего</option>
                    <option value="3">Средний</option>
                    <option value="3">Выше среднего</option>
                    <option value="3">Высокий</option>
                    </select>
                    <label class="top-label">Стрессоустойчивость</label>
                </div>
            </div>
            <i class="material-icons">arrow_forward</i>
        <!-- <div class="inputs resultContainer darken-2 z-depth-2 resultContainer"> -->
            <div class="input-field" style="margin: 0;">
                    <select class="browser-default">
                    <option value="1" selected>Новичок</option>
                    <option value="2">Стажер</option>
                    <option value="3">Мастер</option>
                    <option value="3">Профессионал</option>
                    <option value="3">Эксперт</option>
                    </select>
                    <label class="top-label">Статус</label>
            </div>
        <!-- </div> -->
    </div>
    <a @click="editSave" class="btn-floating saveBtn btn-large waves-effect waves-light"><i class="material-icons" style="font-size: 2em;">cloud</i></a>
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
        width: 250px;
        padding: 15px;
        border-radius: 5px;
    }
    i{
        font-size:3em;
    }

    .resultContainer{
        background-color: #2acc72;
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
        background-color: #2f79ee !important;
    }

    .top-label {
        transform: translateY(-25px);
    }

</style>