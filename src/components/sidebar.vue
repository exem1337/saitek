<template>
    <aside class="sidebar z-depth-3">
    <h3 class="themes">Главы</h3>
    <nav>
        <ul>
          <li v-for="theme in themes" v-bind:key="theme.key" style="cursor: pointer;" :class="{'active' : theme.key == 1}">{{ theme.name }}</li>
        </ul>
    </nav>
    </aside>

    <div class="fixed-action-btn toggle-menu">
        <a class="btn-floating btn-large">
          <i class="large material-icons">list</i>
        </a>
    </div>
</template>

<script>
import sidebar from '../js/sidebar.js'

export default {
    //props: ['themes'],
    data() {
        return {
            themes: [
                { name: 'Глава 1. Введение в С++' , key: 1},
                { name: 'Глава 2. Массивы' , key: 2},
                { name: 'Глава 3. Работа со строками в С++' , key: 3},
                { name: 'Глава 4. Использование указателей в языке С++' , key: 4},
                { name: 'Глава 5. Пользовательские функции в языке C++' , key: 5},
                { name: 'Глава 6. Работа с типами и структурами данных' , key: 6},
                { name: 'Глава 7. Динамические структуры данных' , key: 7},
                { name: 'Глава 8. Работа с файлами в С++' , key: 8},
                { name: 'Глава 9. Визуальное программирование в языке C++' , key: 9},
                { name: 'Глава 10. Введение в объектно-ориентированное программирование' , key: 10},
            ],
        }
    },
    mounted () {
      M.AutoInit();
    }
}
</script>

<style lang="scss" scoped>
.btn-floating{
  background-color: #2acc72;
}

*, *:before, *:after {
  box-sizing: border-box;
}

h1 {
  font-weight: normal;
  margin: 0;
  padding: 0 20px;
  line-height: 2;
  position: relative;
  transition: all 0.3s ease-out;
}

.sidebar, .main {
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  max-height: 91vh;
  top: 64px;
  bottom: 0;
  scroll-margin-top: 100px;
}

.sidebar {
  border-radius: 0 20px 20px 0px;
  margin: 10px;
  margin-left: 0;
  max-width: 250px;
  background-color: #fff;
  left: 0;
}

.main {
  background-color: #f5f5f5;
  position: absolute;
  left: 260px;
  right: 0;
  padding: 20px;
  overflow: hidden;
}

h2 {
  margin: 0 0 1em 0;
}

h3 {
  background-color: #fff;
  color: rgb(107, 107, 107);
  margin: 0;
  padding: 0 20px;
  font-weight: 600;
  line-height: 2;
  text-transform: uppercase;
  font-size: 1.5em;
}

.toggle-menu {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 50px;
  float: left;
  display: block;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
.toggle-menu:hover {
  color: #fff;
}
.toggle-menu:before {
  height: 64px;
  width: 64px;
  display: block;
  text-align: center;
  line-height: 64px;
  font-size: 24px;
}

nav {
  background-color: #fff;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
}
nav ul li {
  padding: 20px;
  width: 100%;
  color: rgb(63, 63, 63);
  background-color: #fff;
  margin-bottom: 1px;
  border-left: 10px solid transparent;
  line-height: 20px;
}
nav ul li.active {
  border-color: #2f79ee;
  color: #2f79ee;
}

@media all and (max-width: 1024px) {
  .sidebar.toggled {
    left: 0;
    z-index: 10;
    box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.8);
  }
  .sidebar.toggled + .main {
    overflow: hidden;
    position:fixed;
  }

  .sidebar {
    left: -260px;
    position:fixed;
    width: 0px;
  }

  .main {
    left: 0;
  }

  .toggle-menu {
    z-index: 1;
    opacity: 1;
  }

  h1 {
    left: 40px;
  }
}

</style>