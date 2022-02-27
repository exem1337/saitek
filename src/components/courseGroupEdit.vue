<template>
    <div class="container editWrapper">
        <div class="wrapper-inner" v-if="this.editGroups">
            <a @click="editSave" class="btn-floating saveBtn btn-large waves-effect waves-light"><i class="material-icons" style="font-size: 2em;">cloud</i></a>
            <h3 class="grey-text text-darken-2 headText z-depth-3">Редактор групп</h3>
            <div class="card horizontal rulesContainer z-depth-3">
                <ul class="myUl" style="margin:0; width: 100%; max-width: 600px; display: flex; flex-wrap: wrap; justify-content: space-around;">
                    <li class="group" v-for="group in groupList" :key="group.key">
                        {{group.name}}
                        <i class="material-icons cardIcon">group</i>
                        <i class="material-icons cardIcon delete">close</i>
                    </li>
                    <li @click="this.searchGroups = true" class="group add"><i class="material-icons cardIcon addIcon">add</i></li>
                </ul>
            </div>
        </div>
        <div v-if="searchGroups" class="newGroupSearch card horizontal rulesContainer z-depth-3">
            <i class="material-icons cardIcon closeSearch" @click="closeSearch">close</i>
            <h4>Поиск группы</h4>
            <div class="input-field col s6">
                <i class="material-icons prefix">search</i>
                <input id="icon_telephone" type="text" class="validate">
                <label for="icon_telephone">Название группы</label>
            </div>
            <ul>
                <li v-for="group in groupList" :key="group.key">{{group.name}}<i class="material-icons cardIcon addGroup">close</i></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            groupList: [
                { key: 1, name: '19ИВТ(б)ПОВТ' },
                { key: 2, name: '19ИВТ(б)ВМК' },
                { key: 3, name: '19ИСТ(б)ОП' },
                { key: 4, name: '19ИВТ(а)САУВТ' },
                { key: 5, name: '19МКН(б)АПКМ' }
            ],
            searchGroups: false,
            editGroups: true
        }
    },
    methods : {
        closeSearch() {
            this.searchGroups = false;
            this.editGroups = true;
        }
    }
}
</script>

<style lang="scss" >
.newGroupSearch{
    position: relative;
    display: block !important;
    width: 100%;
    padding: 60px 25px 10px 25px;

    ul {
        margin-top: 0 !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li{
            position: relative;
            display: inline;
            background-color: #2f79ee;
            padding: 10px 30px;
            color: lighten(#2f79ee, 50%);
            font-size: 1.25em;
            font-weight: 500;
            margin: 10px;
            border-radius: 50px;
            cursor: pointer;
            transition: transform .1s ease;

            &:hover {
                transform: scale(103%);
            }

            &:hover i {
                transform: translate(20px, -10px) rotate(45deg) !important;
            }

            .addGroup{
                opacity: 1;
                font-size: 1em;
                width: 1em;
                height: 1em;
                top: 0px;
                right: 10px;
                color:#2f79ee;
                transition: transform .1s ease-in-out;
            }
        }
    }

    h4{
        font-weight: 700;
        font-size: 4em;
        opacity: .5;
        color: #2f79ee;
        position: absolute;
        top: -25px;
        left: 10px;
    }

    .closeSearch{
        opacity: .5;
        transform: rotate(0deg) !important;
        width: 1em;
        height: 1em;
        font-size: 2.5em;
        top: 0;
        right: 0;
        cursor: pointer;
        transition: .1s;
        &:hover {
            color: #2f79ee;
        }
    }
}

.input-field input[type=text]:focus {
        border-bottom: 1px solid #2f79ee !important;
        box-shadow: 0 1px 0 0 #2f79ee !important;
    }

   .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000 !important;
     box-shadow: 0 1px 0 0 #000 !important;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #2f79ee;
     box-shadow: 0 1px 0 0 #2f79ee;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #2f79ee;
     box-shadow: 0 1px 0 0 #2f79ee;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #2f79ee;
   }

.wrapper-inner{
    position: relative;

    .btn-floating {
        position: absolute;
        top: 25px;
        right: 15px;
        background-color: #2f79ee;
    }
}

.add{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lighten(#2f79ee, 30%) !important;
    .addIcon{
        position: relative;
        height: fit-content;
        width: fit-content;
        color: darken(#2f79ee, 40%) !important;
    }
}

@media screen and (max-width: 502px) {
    .group{
        width: 100% !important;
    }
}

.rulesContainer{
    margin-top: 0;
    position: relative;
    z-index: 2;


    //padding: 15px;

}
.editWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.group {
    padding: 15px;
    background-color: lighten(#2f79ee, 10%);
    width: 47%;
    min-width: 200px;
    font-size: 1.75em;
    height: 100px;
    font-weight: 500;
    color: lighten(#2f79ee, 40%);
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        transform: scale(103%);
    }

    transition: transform .1s ease;

    .cardIcon{
        font-size: 5em;
        top: 0;
        right: 0;
        transform: rotateZ(0deg);
    }
    .delete{
        font-size: 1.25em;
        top: 5px;
        right: 5px;
        z-index: 3;
        color: darken(#2f79ee, 20%);
        height: fit-content;
        transition: color .1s ease;
        opacity: 1;
        &:hover {
            color: darken(#2f79ee, 40%);
        }
    }
}
.myUl {
    padding: 15px 10px 0 10px;
    .group {
        margin: 0 5px 15px 5px;
    }
}
</style>