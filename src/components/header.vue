<template>
    <header>
        <nav class="z-depth-3" style="padding: 0px 20px; background-color: #4f2fa9;">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo white-text text-darken-4 hide-on-med-and-down">Информационная Обучающая Система</a>
              <a href="#!" class="brand-logo white-text text-darken-4 hide-on-large-only">ИОС</a>
              <a v-if="$store.state.logged" href="#" data-target="mobile-demo" class="sidenav-trigger amber-text text-darken-4"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li v-if="$store.state.logged"><router-link to="courses" class="white-text text-darken-4">Курсы</router-link></li>
                <li v-if="$store.state.logged" @click="bgtransform"><router-link to="/profile" class="white-text text-darken-4">Мой профиль</router-link></li>
                <li v-if="$store.state.userType === 2"><router-link to="/adminSettings" class="white-text text-darken-4">Настройка</router-link></li>
                <li><router-link to="/about" class="white-text text-darken-4">Справка</router-link></li>
                <li v-if="$store.state.logged"><router-link to="/" @click="logout" class="white-text text-darken-4">Выход</router-link></li>
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

<style scoped>
header {
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  margin-bottom: 64px; */
  position: relative;
  z-index: 100;

}
</style>