<template>
  <header>
    <nav class="z-depth-3" style="padding: 0px 20px">
      <p
        href="#!"
        class="brand-logo hide-on-med-and-down"
        style="margin: 0; padding: 0"
      >
        Адаптивная Обучающая Система
      </p>
      <div class="nav-wrapper da">
        <a
          href="#!"
          class="brand-logo white-text text-darken-4 hide-on-large-only"
          >АОС</a
        >
        <a
          v-if="$store.state.logged"
          href="#"
          data-target="mobile-demo"
          class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul
          class="right hide-on-med-and-down"
          style="position: relative; z-index: 3"
        >
          <li v-if="$store.state.logged">
            <router-link to="/profile" class="da big-font"
              >Личный кабинет</router-link
            >
          </li>
          <li v-if="$store.state.logged">
            <router-link to="courses" class="da big-font"
              >Дисциплины</router-link
            >
          </li>
          <!-- <li v-if="$store.state.logged" ><router-link to="/profile" class="da">Оценочные материалы</router-link></li> -->
          <li
            v-if="$store.state.userType === 2"
            class="da settings big-font"
            style="padding: 0 15px; cursor: pointer"
          >
            Экспертная система
            <div class="edit-inner">
              <router-link
                to="/studentModel"
                class="settingsItem big-font"
                style="border-radius: 10px 10px 0px 0px"
              >
                Модель студента
              </router-link>
              <router-link
                to="/adminSettings"
                class="settingsItem big-font"
                style="border-radius: 0px 0px 0px 0px"
              >
                Редактор базы правил
              </router-link>
              <router-link
                to="/mamdani"
                class="settingsItem big-font"
                style="
                  border-radius: 0px 0px 10px 10px;
                  line-height: 25px;
                  padding-bottom: 15px;
                  padding-top: 15px;
                "
              >
                Определение статуса обучаемого
              </router-link>
            </div>
          </li>
          <li>
            <router-link to="/" @click="logout" class="da big-font"
              >Выход</router-link
            >
          </li>
          <li>
            <router-link to="/about" class="da big-font">Справка</router-link>
          </li>
          <li class="big-font" style="padding-left: 15px;">
            {{ $store.state.userType === 0 ? "Вы вошли как студент" : "Вы вошли как эксперт" }}
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <ul v-if="$store.state.logged" class="sidenav" id="mobile-demo">
    <li><a href="#">Главная</a></li>
    <li><a href="#">Темы</a></li>
    <li><a href="#">Мой профиль</a></li>
    <li v-if="$store.state.logged">
      <router-link to="courses"><a href="#">Курсы</a></router-link>
    </li>
    <li v-if="$store.state.logged">
      <router-link to="/"><a href="#" @click="logout">Выход</a></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  //props: ['logged'],
  mounted() {
    M.AutoInit();
  },
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>

<style scoped lang="scss">
.person-info {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 3;

  .person-info-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: #2f79ee;
    width: 100%;
    transition: 0.5s ease;

    border-radius: 0 0 20px 20px;

    transform: translateY(-150px);
    opacity: 0;

    text-align: center;
  }

  &:hover > .person-info-content {
    transform: translateY(60px);
    opacity: 1;
  }
}

.avatar {
  margin-left: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50% !important;
}

@media screen and (max-width: 1332px) {
  .big-logo {
    display: none !important;
  }
}
.big-logo {
  display: block;
}

.settingsItem {
  position: relative;
  z-index: 2;
  background-color: lighten(#2f79ee, 0%);
  &:hover {
    background-color: darken(#2f79ee, 10%);
  }
}

.edit-inner {
  color: #000;
  background-color: transparent; //lighten(#2f79ee, 0%);
  position: absolute;
  left: -35px;
  width: 300px;
  transform: translateY(-150px);
  z-index: 0;
  border-top: 5px solid transparent;
  display: block;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 0.5em;
}

.settings {
  &:hover > .edit-inner {
    transform: translateY(-10px);
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
