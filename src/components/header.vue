<template>
    <header>
        <nav class="teal darken-1 z-depth-3" style="padding: 0px 20px">
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">ИОС</a>
              <a v-if="$store.state.logged" href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li v-if="$store.state.logged"><a href="#"></a></li>
                <li v-if="$store.state.logged"><router-link to="courses"><a href="#">Курсы</a></router-link></li>
                <li v-if="$store.state.logged" @click="bgtransform"><router-link to="/profile"><a href="#">Мой профиль</a></router-link></li>
                <li v-if="$store.state.userType === 2"><a>Настройка</a></li>
                <li><a>Справка</a></li>
                <li v-if="$store.state.logged"><router-link to="/"><a href="#" @click="logout">Выход</a></router-link></li>
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
  z-index: 100;
}
</style>