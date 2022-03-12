<template>
<div class="add-rule card horizontal rulesContainer z-depth-3">
    <h4 class="center">Выберите соответствующие параметры</h4>
    <div class="container-inner">
      <div class="select-wrapper" style="margin-bottom: 50px;">
      <div class="input-field">
        <select class="browser-default" v-model="disciplineLevel">
          <option value="начальный">начальный</option>
          <option value="базовый">базовый</option>
          <option value="средний">средний</option>
          <option value="продвинутый">продвинутый</option>
          <option value="сложный">сложный</option>
        </select>
        <label style="transform: translateY(45px);">Уровень усвоения дисциплины</label>
      </div>
      <div class="input-field">
        <select class="browser-default" v-model="selfDevelopement">
          <option value="низкий">низкий</option>
          <option value="ниже среднего">ниже среднего</option>
          <option value="средний">средний</option>
          <option value="выше среднего">выше среднего</option>
          <option value="высокий">высокий</option>
        </select>
        <label style="transform: translateY(45px);">Стремление к самообучению и развитию</label>
      </div>
      <div class="input-field">
        <select class="browser-default" v-model="responsibility">
          <option value="низкий">низкий</option>
          <option value="ниже среднего">ниже среднего</option>
          <option value="средний">средний</option>
          <option value="выше среднего">выше среднего</option>
          <option value="высокий">высокий</option>
        </select>
        <label style="transform: translateY(45px);">Ответственность</label>
      </div>
      <div class="input-field">
        <select class="browser-default" v-model="perseverance">
          <option value="низкий">низкий</option>
          <option value="ниже среднего">ниже среднего</option>
          <option value="средний">средний</option>
          <option value="выше среднего">выше среднего</option>
          <option value="высокий">высокий</option>
        </select>
        <label style="transform: translateY(45px);">Усидчивость</label>
      </div>
      <div class="input-field">
        <select class="browser-default" v-model="attentiveness">
          <option value="низкий">низкий</option>
          <option value="ниже среднего">ниже среднего</option>
          <option value="средний">средний</option>
          <option value="выше среднего">выше среднего</option>
          <option value="высокий">высокий</option>
        </select>
        <label style="transform: translateY(45px);">Внимательность</label>
      </div>
      <div class="input-field">
        <select class="browser-default" v-model="stress">
          <option value="низкий">низкий</option>
          <option value="ниже среднего">ниже среднего</option>
          <option value="средний">средний</option>
          <option value="выше среднего">выше среднего</option>
          <option value="высокий">высокий</option>
        </select>
        <label style="transform: translateY(45px);">Стрессоустойчивость</label>
      </div>
    </div>
    <div class="input-field">
        <select class="browser-default" v-model="result">
          <option value="новичок">новичок</option>
          <option value="стажер">стажер</option>
          <option value="мастер">мастер</option>
          <option value="профессионал">профессионал</option>
          <option value="эксперт">эксперт</option>
        </select>
        <label style="transform: translateY(45px);">Статус обучаемого</label>
      </div>
  </div>
   <button @click="submitRule" class="waves-effect waves-light btn blue button-right">Сохранить</button>
</div>
</template>

<script>
export default {
    setup() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.container-inner{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.select-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  min-width: 350px;
}

.button-right {
    max-width: 150px;
    position: absolute;
    right: 15px;
    bottom: 15px;
}
</style>