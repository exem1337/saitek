<template>
    <header>
        <nav class="z-depth-3" style="padding: 0px 20px;">
          <!-- <p href="#!" class="brand-logo da big-logo hide-on-med-and-down" style="margin:0; width: 600px; padding: 0;">Интеллектуальная Обучающая Система</p> -->
            <div class="nav-wrapper">

              <a href="#!" class="brand-logo white-text text-darken-4 hide-on-large-only">ИОС</a>
              <a v-if="$store.state.logged" href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down"  style="position: relative; z-index: 3;">
                <li v-if="$store.state.logged" @click="bgtransform"><router-link to="/profile" class="da">Мой профиль</router-link></li>
                <li v-if="$store.state.logged"><router-link to="courses" class="da">Курсы</router-link></li>
                <li v-if="$store.state.logged" @click="bgtransform"><router-link to="/test" class="da">Тесты</router-link></li>
                <li v-if="$store.state.logged" @click="bgtransform"><router-link to="/profile" class="da">Оценочные материалы</router-link></li>
                <li v-if="$store.state.userType === 2" class="da settings" style="padding: 0 15px; cursor: pointer;">Экспертная система
                  <div class="edit-inner">
                    <router-link to="/adminSettings" class="settingsItem" style="border-radius: 10px 10px 0px 0px">
                      Редактор базы правил
                    </router-link>
                    <router-link to="/mamdani" class="settingsItem" style="border-radius: 0px 0px 10px 10px; line-height: 25px; padding-bottom: 10px;">
                      Определение статуса студента
                    </router-link>

                  </div>

                  </li>
                <li><router-link to="/about" class="da">Справка</router-link></li>
                <li v-if="$store.state.logged"><router-link to="/" @click="logout" class="da">Выход</router-link></li>
              </ul>
            </div>
          </nav>
    </header>
    <ul v-if="$store.state.logged" class="sidenav" id="mobile-demo">
        <li><a href="#">Главная</a></li>
        <li><a href="#">Темы</a></li>
        <li><a href="#">Мой профиль</a></li>
        <li v-if="$store.state.logged"><router-link to="courses"><a href="#">Курсы</a></router-link></li>
        <li v-if="$store.state.logged"><router-link to="/"><a href="#" @click="logout">Выход</a></router-link></li>
    </ul>
</template>

<script>
export default {
    //props: ['logged'],
    mounted () {
        M.AutoInit()
    },
    methods: {
      logout(){
        this.$store.commit('logout')
      },
      bgtransform() {
        this.$store.commit('transformBG')
      }
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width :1332px) {
  .big-logo {
    display: none !important;
  }
}
.big-logo{
  display: block;
}

.settingsItem{
  position: relative;
  z-index: 2;
  background-color: lighten(#2f79ee, 0%);
  &:hover {
    background-color: darken(#2f79ee, 10%);
  }
}

.edit-inner{
  color: #000;
  background-color: transparent; //lighten(#2f79ee, 0%);
  position: absolute;
  left: -35px;
  width: 200px;
  transform: translateY(-50px);
  z-index: 0;
  border-top: 5px solid transparent;
  display: block;
  transition: .5s ease;
  opacity: 0;
}

.settings {
  &:hover > .edit-inner {
    transform: translateY(0px);
    opacity: 1;
  }
}

header {
  position: relative;
  z-index: 100;
}
nav {
  background-color: darken(#2f79ee, 0%);
}
.da {
  color: #fff;
  position: relative;
}
</style>