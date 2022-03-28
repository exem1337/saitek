<template>
  <div class="theme-inner">
    <sidebar />
    <div class="content flow-text">
      <div class="theme-name spotlight z-depth-2">
        <p class="white-text" style="font-weight: 500">
          Дисциплина: Основы программирования на языке C++ <br />
          Тема 1 - Введение в C++
        </p>
        <!-- <ul class="pagination">
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul> -->
        <router-link to="/test" class="waves-effect waves-light btn white-text"
          >Пройти тестирование</router-link
        >
      </div>
      <themeContent />
    </div>
  </div>
</template>

<script>
//import changeColor from '../js/hoverColor.js'
import header from "../components/headerNav.vue";
import sidebar from "../components/sidebar.vue";
import themeContent from "../components/themeContent.vue";
export default {
  components: {
    sidebar,
    header,
    themeContent,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.content {
  height: 91vh;
  width: 100%;
}

.theme-inner {
  display: flex;
}

@media screen and (max-width: 1000px) {
  .theme-name {
    margin-right: 0 !important;
  }
  .content {
    margin-right: 0 !important;
  }
}

@media screen and (max-width: 1024px) {
  .content {
    margin-right: 0 !important;
  }
  .theme-name {
    margin-right: 0 !important;
  }
}

.btn {
  background-color: #2f79ee !important;
}

.theme-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lighten(#2f79ee, 5%) !important;
  //border-radius: 0px 0 20px 20px;
  position: relative;
  z-index: 2;
  margin-left: 0px;
  margin-right: 10px;
  padding: 0px 40px;
  transition: 0.5s;
  height: 10%;
  background-color: transparent;
  transition: 0.5s all;
}
.pagination {
  width: 120px !important;
  display: flex !important;
  flex-wrap: nowrap !important;

  li {
    background-color: #2acc72 !important;
    margin: 0px 5px !important;
    width: 50px !important;

    i {
      transition: 0.3s ease-in-out;
      color: #fff !important;
    }
  }
}
.spotlight {
  background-image: radial-gradient(
    circle,
    transparent 60px,
    rgba(0, 0, 0, 0) 200px
  );
}
</style>