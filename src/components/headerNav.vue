<template>
    <header>
        <nav class="z-depth-3" style="padding: 0px 20px;">
          <p href="#!" class="brand-logo hide-on-med-and-down" style="margin:0; padding: 0;">Интеллектуальная Обучающая Система</p>
            <div class="nav-wrapper da">
              <a href="#!" class="brand-logo white-text text-darken-4 hide-on-large-only">ИОС</a>
              <a v-if="$store.state.logged" href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down"  style="position: relative; z-index: 3;">
                <li v-if="$store.state.logged" ><router-link to="/profile" class="da big-font">Личный кабинет</router-link></li>
                <li v-if="$store.state.logged"><router-link to="courses" class="da big-font">Дисциплины</router-link></li>
                <!-- <li v-if="$store.state.logged" ><router-link to="/profile" class="da">Оценочные материалы</router-link></li> -->
                <li v-if="$store.state.userType === 2" class="da settings big-font" style="padding: 0 15px; cursor: pointer;">Экспертная система
                  <div class="edit-inner">
                    <router-link to="/adminSettings" class="settingsItem big-font" style="border-radius: 10px 10px 0px 0px">
                      Редактор базы правил
                    </router-link>
                    <router-link to="/mamdani" class="settingsItem big-font" style="border-radius: 0px 0px 10px 10px; line-height: 25px; padding-bottom: 10px;">
                      Определение статуса обучаемого
                    </router-link>

                  </div>

                  </li>
                <li><router-link to="/about" class="da big-font">Справка</router-link></li>
                <li v-if="$store.state.logged"><router-link to="/" @click="logout" class="da big-font">Выход</router-link></li>
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

.big-font{
  font-size: 1.5em;
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
  width: 300px;
  transform: translateY(-50px);
  z-index: 0;
  border-top: 5px solid transparent;
  display: block;
  transition: .5s ease;
  opacity: 0;
  font-size: .5em;
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