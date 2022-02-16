<template>
<div class="search-wrapper">
    <div class="newGroupSearch card horizontal rulesContainer z-depth-3">
        <i class="material-icons cardIcon closeSearch" @click="closeModal">close</i>
        <h4>Поиск студента</h4>
        <div class="input-field col s6">
            <i class="material-icons prefix">search</i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">ФИО студента</label>
        </div>
        <ul>
            <li v-for="group in groupList" :key="group.key">{{group.name}}<i class="material-icons cardIcon addGroup">close</i></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    setup(props, {emit}) {
        const closeModal =  () => {
            emit('closeModal')
        }

        const groupList = [
            { key: 1, name: 'Акладский Данила Вячеславович' },
            { key: 2, name: 'Микерин Дмитрий Александрович' },
            { key: 3, name: 'Балашов Владимир Валентинович' },
            { key: 4, name: 'Мурзин Ярослав Александрович' },
            { key: 5, name: 'Ядыкин Александр Сергеевич' }
        ]
        return { groupList, closeModal }
    },
}
</script>

<style lang="scss" scoped>
.search-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    backdrop-filter: blur(5px);

    display: flex;
    justify-content: center;
    align-items: center;

    .newGroupSearch{
        width: 40%;
    }
}
</style>