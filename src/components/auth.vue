<template>
    <div class="container">
        <h3 class="center">Добро пожаловать!</h3>
        <div class="row">
            <div class="col s12">
                <div class="card-panel z-depth-3 white-text" style="border-radius: 20px;">
                    <div>
                        <form v-if="!this.register" action="" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="input-field col s12 m6 l6">
                                    <input id="emailLogin" type="text" class="validate">
                                    <label for="emailLogin">E-mail</label>
                                </div>
                                <div class="input-field col s12 m6 l6">
                                    <input id="passwordLogin" type="password" class="validate">
                                    <label for="passwordLogin">Пароль</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <label>
                                        <input type="checkbox" id="rememberMe" class="filled-in" />
                                        <span>Запомнить меня</span>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <router-link to="course"><input type="submit" id="loginBtn" value="Войти" @click="login" class="waves-effect waves-light btn white-text" style="margin-left:10px; color: #fff; !important"></router-link>
                                <a href="#" @click="startRegistering" class="waves-effect waves-light grey-text text-darken-2 btn register_btn">Зарегистрироваться</a>
                            </div>
                        </form>
                        
                        <form v-if="this.register === true" action="">
                            <div class="row">
                                <div class="container">
                                    <div class="col s12 m6 l6">
                                    <p>
                                        <label>
                                            <input @click="setStudent" id="pickStudent" name="group1" type="radio" checked />
                                            <span style="font-size: 1.5em">Я студент</span>
                                        </label>
                                    </p>
                                    </div>
                                    <div class="col s12 m6 l6">
                                    <p>
                                        <label>
                                            <input id="pickTeacher" @click="setTeacher" name="group1" type="radio" checked />
                                            <span style="font-size: 1.5em">Я преподаватель</span>
                                        </label>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form v-if="this.register && this.student" action="" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="input-field col s12 m4 l4">
                                    <input id="nameStudent" type="text" class="validate">
                                    <label for="nameStudent">Имя</label>
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <input id="surnameStudent" type="text" class="validate">
                                    <label for="surnameStudent">Фамилия</label>
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <input id="patronymicStudent" type="text" class="validate">
                                    <label for="patronymicStudent">Отчество</label>
                                </div>
                            </div>
                            <div class="input-field col s12 m6 l6">
                                    <input id="emailStudent" type="text" class="validate">
                                    <label for="emailStudent">E-mail</label>
                                </div>
                                <div class="input-field col s12 m6 l6">
                                    <input id="passwordStudent" type="password" class="validate">
                                    <label for="passwordStudent">Пароль</label>
                                </div>
                            <div class="row">
                                <div class="input-field col s12 m3 l3">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Выберите факультет</option>
                                    <option value="FMIT">ФМИТ</option>
                                    <option value="ASF">АСФ</option>
                                    <option value="EF">ЭФ</option>
                                    </select>
                                </div>
                                 <div class="input-field col s12 m3 l3">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Выберите курс</option>
                                    <option value="1">1 курс</option>
                                    <option value="2">2 курс</option>
                                    <option value="3">3 курс</option>
                                    <option value="4">4 курс</option>
                                    <option value="5">5 курс</option>
                                    </select>
                                </div>
                                <div class="input-field col s12 m3 l3">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Выберите группу</option>
                                    <option value="FMIT">19ИВТ(б)-ПОВТ</option>
                                    <option value="ASF">18ПИНЖ</option>
                                    <option value="EF">19ИВТ(б)-ВМК</option>
                                    </select>
                                </div>
                                <div class="input-field col s12 m3 l3">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Ваш пол</option>
                                    <option value="FMIT">Мужской</option>
                                    <option value="ASF">Женский</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <router-link to="course"><input type="submit" @click="login" value="Завершить регистрацию" class="waves-effect waves-light btn" style="margin-left:10px;"></router-link>
                            </div>
                        </form>

                        
                        <form v-if="this.register && this.teacher" action="" v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="input-field col s12 m4 l4">
                                    <input id="nameTeacher" type="text" class="validate">
                                    <label for="nameTeacher">Имя</label>
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <input id="surnameTeacher" type="text" class="validate">
                                    <label for="surnameTeacher">Фамилия</label>
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <input id="patronicTeacher" type="text" class="validate">
                                    <label for="patronicTeacher">Отчество</label>
                                </div>
                            </div>
                            <div class="input-field col s12 m6 l6">
                                    <input id="emailTeacher" type="text" class="validate">
                                    <label for="emailTeacher">E-mail</label>
                                </div>
                                <div class="input-field col s12 m6 l6">
                                    <input id="passwordTeacher" type="password" class="validate">
                                    <label for="passwordTeacher">Пароль</label>
                                </div>
                            <div class="row">
                                <div class="input-field col s12 m4 l4">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Выберите факультет</option>
                                    <option value="FMIT">ФМИТ</option>
                                    <option value="ASF">АСФ</option>
                                    <option value="EF">ЭФ</option>
                                    </select>
                                  
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Выберите кафедру</option>
                                    <option value="1">ПОВТАС</option>
                                    <option value="2">ВМК</option>
                                    </select>
                                </div>
                                <div class="input-field col s12 m4 l4">
                                    <select class="browser-default">
                                    <option value="" disabled selected>Ваш пол</option>
                                    <option value="FMIT">Мужской</option>
                                    <option value="ASF">Женский</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m6 l6">
                                <div class="input-field">
                                    <input id="workName" type="text" class="validate">
                                    <label for="workName">Введите должность</label>
                                </div>
                                <!-- <label for="file-upload">
                                    <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Прикрепить трудовой договор</a>
                                </label> -->
                                </div>
                                <div class="col s12 m6 l6">
                                <label for="files" class="waves-effect waves-light btn white-text" style="cursor:pointer; margin-top:30px">Прикрепить трудовой договор</label>
                                <input id="files" type="file" style="visibility:hidden;" class="waves-effect waves-light btn"/> 
                                </div>
                                
                            </div>
                            <div class="row">
                                <router-link to="course"><input type="submit" value="Завершить регистрацию" @click="login" class="waves-effect waves-light btn" style="margin-left:10px;"></router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            register: false,
            student: undefined,
            teacher: undefined
        }
    },
    mounted () {
        M.AutoInit()
    },
    methods: {
        startRegistering() {
            this.register = true;
            this.teacher = true;
        },
        setStudent() {
            this.student = true;
            this.teacher = false;
        },
        setTeacher() {
            this.teacher = true;
            this.student = false;
        },
        login() {
            this.$store.commit('login')
        }
    }
}
</script>

<style lang="scss">
    .register_btn{
        margin-left: 10px;
        transition: .2s ease;
        background-color: #fff;
        &:hover{
            color:#fff !important;
        }
    }
    ::-webkit-file-upload-button {
        display: none;
        background: black;
        color: red;
        padding: 1em;
    }
</style>