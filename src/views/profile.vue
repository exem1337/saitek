<template>
  <div class="container">
    <h3
      class="grey-text text-darken-2 headText z-depth-3"
      @click="activeTab = 0"
      :class="{ 'non-active-tab': activeTab == 1 }"
    >
      Профиль
    </h3>
    <h3
      class="grey-text text-darken-2 headText z-depth-3 tab"
      @click="activeTab = 1"
      :class="{ 'non-active-tab': activeTab == 0 }"
    >
      Статистика
    </h3>
    <div v-if="activeTab == 0" class="card horizontal profile-info z-depth-3">
      <div class="image-wrapper">
        <img class="avatar" src="avatar.jpg" />
        <img
          class="img-top"
          src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
          alt=""
        />
      </div>
      <div class="profile-content">
        <div class="profile-content-inner">
          <p class="userName flow-text">
            Имя: <span class="data">{{ this.user.name }}</span>
          </p>
          <p class="userName flow-text">
            Отчество: <span class="data">{{ this.user.patronim }}</span>
          </p>
          <p class="userName flow-text">
            Фамилия: <span class="data">{{ this.user.surname }}</span>
          </p>
        </div>
        <div class="profile-content-inner">
          <p class="userName flow-text">
            Факультет: <span class="data">{{ this.user.Faculty }}</span>
          </p>
          <p
            v-if="$store.state.userType === 2 || $store.state.userType === 1"
            class="userName flow-text"
          >
            Кафедра: <span class="data">ПОВТАС</span>
          </p>
          <p class="userName flow-text" v-else>
            Курс: <span class="data">{{ this.user.Course }}</span>
          </p>
          <p
            v-if="$store.state.userType === 2 || $store.state.userType === 1"
            class="userName flow-text"
          >
            Должность: <span class="data">Доцент</span>
          </p>
          <p class="userName flow-text" v-else>
            Группа: <span class="data">{{ this.user.Group }}</span>
          </p>
          <p class="userName flow-text" v-if="$store.state.userType === 0">
            Статус: <span class="data">Профессионал</span>
          </p>
        </div>
      </div>
      <!-- <i class="material-icons cardIcon id">perm_identity</i> -->
    </div>

    <div v-if="activeTab == 1" class="card horizontal rulesContainer z-depth-3">
      <h4
        class="white-text text-darken-2"
        style="font-weight: 500; font-size: 3em"
      >
        Статистика по дисциплинам
      </h4>
      <ul>
        <li
          v-for="stat in this.stats"
          :key="stat.key"
          style="margin: 15px 0px;"
          @click="(e) => e.target.classList.toggle('active')"
        >
          <div class="discipline z-depth-2">
            <h4 style="margin-bottom: 15px">{{ stat.discName }}</h4>
            <h3 class="progress-label">{{ stat.percentage }}%</h3>
            <div class="progress">
              <div
                class="determinate bar"
                :style="{ width: stat.percentage + '%' }"
              ></div>
            </div>
            <div class="discipline-theme-progress">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptate voluptatum nulla sit dignissimos placeat id.
              Necessitatibus quas eaque consequatur quam perspiciatis eum
              exercitationem autem earum repellendus assumenda, asperiores
              placeat aut, unde quis dolores totam dignissimos, iure ad dolorem
              alias at corrupti amet id! Corrupti illo quaerat nisi qui
              temporibus.
            </div>
          </div>
        </li>
      </ul>

      <!-- <i class="material-icons cardIcon">fingerprint</i> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const user = {
      name: "Владимир",
      surname: "Егоров",
      patronim: "Юрьевич",
      avatar:
        "https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg",
      Faculty: "ФМИТ",
      Course: "2",
      Group: "19ИВТ(б)-ПОВТ",
    };

    const stats = [
      {
        discName: "Основы программирования на языке C++",
        percentage: 75,
        key: 0,
      },
      {
        discName: "Базы данных",
        percentage: 25,
        key: 1,
      },
      {
        discName: "Теория управления",
        percentage: 45,
        key: 2,
      },
      {
        discName: "Структуры и алгоритмы обработки данных",
        percentage: 100,
        key: 3,
      },
      {
        discName: "Основы программирования на языке C++",
        percentage: 50,
        key: 4,
      },
    ];

    const activeTab = ref(0);

    return {
      stats,
      user,
      activeTab,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .tab {
    left: 220px;
  }
}

.discipline-theme-progress {
  height: 0;
  background-color: chartreuse;
  opacity: 0;
  //transform: translateY(-100px) scale(0%);
  //transition: .5s ease;
}

.id {
  transform: rotateZ(0deg) !important;
  font-size: 25em;
  top: 10px;
  right: -40px;
  width: fit-content;
  height: fit-content;
  filter: blur(10px);
}

ul:last-child > li > .discipline {
  margin-bottom: 0;
}

.progress-label {
  position: absolute;
  right: 30px;
  top: -10px;
  color: #000;
  font-weight: 700;
  opacity: 25%;
  transition: opacity 0.3s ease;
}

.discipline {
  height: fit-content;
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  //margin-top: 15px;
  position: relative;
  z-index: 2;
  transition: 0.3s ease;
  background-color: lighten(#2f79ee, 20%);
  &:hover {
    transform: scale(101%);
  }
  &:hover > .progress-label {
    opacity: 30%;
  }
  .active > .discipline-theme-progress {
    height: fit-content;
    opacity: 1;
  }
  h4 {
    font-weight: 500;
    color: #fff;
  }
}

.rulesContainer {
  overflow: hidden;
  margin-top: 0;
  position: relative;
  z-index: 1 !important;
  display: flex;
  // transform: translateY(-20px);
  flex-direction: column;
  padding: 20px;
  transition: transform 0.2s ease;
  border-radius: 0 10px 10px 10px;
  h4 {
    margin: 0;
  }
  background-color: lighten(#2f79ee, 10%);
}

.bar {
  background-color: #2f79ee;
  // background-color: darken(#2f79ee, 15%);
}

.progress {
  background-color: #fff;
  // background-color: lighten(#2acc72, 20%);
}

.avatar {
  // max-width: 200px !important;
  border-radius: 50% !important;
  max-width: 300px !important;
  display: inline-block !important;
  position: relative !important;
}

.img-top {
  display: none;
  border-radius: 50% !important;
  max-width: 300px !important;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.7;
  transition: opacity 0.5s ease;
}

.names {
  margin: 20px !important;
}

.userData {
  p {
    margin-top: 10px;
  }
}

.userName {
  color: #2f79ee;
  font-weight: 500;
}

.data {
  color: #424242;
}

.profile-info {
  display: flex;
  flex-direction: row;
  padding: 10px;
  position: relative;

  border-radius: 0 10px 10px 10px;

  overflow: hidden;
}

.profile-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .profile-info {
    flex-direction: column;
  }
  .image-wrapper {
    margin: 0 auto;
  }
}

.image-wrapper {
  position: relative;
}

.image-wrapper:hover .img-top {
  display: inline;
}

.card {
  margin-top: 0;
  position: relative;
  z-index: 2;
}
</style>
