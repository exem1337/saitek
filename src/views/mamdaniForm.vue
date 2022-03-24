<template>
  <div class="container">
    <div class="wrapper">
      <h3
        class="grey-text text-darken-2 headText z-depth-3"
        :class="{ 'non-active-tab' : activeTab == 1 }"
        @click="setActiveTab(0)"
      >
        Определение статуса обучаемого
      </h3>
      <h3
        class="grey-text text-darken-2 headText z-depth-3 tab"
        :class="{ 'non-active-tab' : activeTab == 0 }"
        @click="setActiveTab(1)"
      >
        Мамдани
      </h3>
      <mamdanni-define v-if="activeTab == 0" />
    </div>
  </div>
</template>

<script>
import mamdanniDefine from "../components/mamdanniDefine.vue";
import { ref } from "vue";
export default {
  components: { mamdanniDefine },
  setup() {
    const activeTab = ref(0);

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      setActiveTab,
    };
  },
};
</script>

<style lang="scss">
.non-active-tab {
    filter: brightness(95%);
}

.wrapper {
    position: relative;
}

.tab {
  position: absolute;
  top: -15px;
  right: 340px;
}

.input-field label {
  color: #000 !important;
}
/* label focus color */
.input-field input[type="number"]:focus + label {
  color: #000 !important;
}

form {
  .rule-input {
    display: flex;
    justify-content: space-around;
    .col {
      width: 100%;
      margin: 0 25px;
    }
  }
}

.input-field input[type="number"]:focus {
  border-bottom: 1px solid #2f79ee !important;
  box-shadow: 0 1px 0 0 #2f79ee !important;
}

.result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  border-top: 1px solid grey;
  p {
    margin-left: 25px;
  }
}
span {
  color: #2f79ee;
  font-weight: 600;
}
.result-text {
  margin: 0;
  font-size: 1.5em;
}

.resultConstainter {
  display: flex;
  align-items: center;

  .result-content {
    margin-right: 25px;
  }
}

.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: fit-content;
}
</style>