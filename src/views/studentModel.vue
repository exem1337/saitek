<template>
  <div class="container">
    <h3 class="grey-text text-darken-2 headText z-depth-3">
      Модель студента
    </h3>
    <div class="student-model card horizontal rulesContainer z-depth-3">
      <div class="flex-wrapper">
        <div class="terms-wrapper" style="position: relative;">
          <p class="wrapper-name">Термы</p>
          <table class="striped">
            <thead>
              <tr>
                <th>Название</th>
                <th>Параметр 1</th>
                <th>Параметр 2</th>
                <th>Параметр 3</th>
                <th>Параметр 4</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(term, key) in terms" :key="key" class="term">
                <td>{{ term.termName }}</td>
                <td>{{ term.parameter1 }}</td>
                <td>{{ term.parameter2 }}</td>
                <td>{{ term.parameter3 }}</td>
                <td>{{ term.parameter4 }}</td>
                <td>
                  <i
                    @click="deleteTermById(key)"
                    class="material-icons delete-icon"
                    >delete</i
                  >
                </td>
              </tr>
            </tbody>
            <p v-if="!terms.length">Необходимо добавить термы</p>
          </table>
        </div>

        <div class="terms-add">
          <div class="input-field">
            <input
              v-model="termName"
              id="term_name"
              type="text"
              class="validate"
            />
            <label for="term_name">Название терма</label>
          </div>
          <div class="input-field">
            <input
              v-model="parameter1"
              id="param1"
              type="number"
              class="validate"
            />
            <label for="param1">Параметр 1</label>
          </div>
          <div class="input-field">
            <input
              v-model="parameter2"
              id="param2"
              type="number"
              class="validate"
            />
            <label for="param2">Параметр 2</label>
          </div>
          <div class="input-field">
            <input
              v-model="parameter3"
              id="param3"
              type="number"
              class="validate"
            />
            <label for="param3">Параметр 3</label>
          </div>
          <div class="input-field">
            <input
              v-model="parameter4"
              id="param4"
              type="number"
              class="validate"
            />
            <label for="param4">Параметр 4</label>
          </div>
          <button class="btn blue" @click="onAddTerm">Добавить</button>
        </div>
      </div>

      <div class="lingv-var" style="position: relative">
        <p class="wrapper-name">Лингвистическая переменная</p>
        <div class="input-field">
          <input
            v-model="lingName"
            id="lingv_name"
            type="text"
            class="validate"
          />
          <label for="lingv_name">Наименование</label>
        </div>
        <div class="input-field">
          <input
            v-model="shortLingName"
            id="short_lingv_name"
            type="text"
            class="validate"
          />
          <label for="short_lingv_name">Краткое наименование</label>
        </div>
        <button class="btn blue" @click="onAddTerm">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const terms = ref([]);
    const termName = ref("");
    const parameter1 = ref(null);
    const parameter2 = ref(null);
    const parameter3 = ref(null);
    const parameter4 = ref(null);
    const lingName = ref("");
    const shortLingName = ref("");

    const onAddTerm = () => {
      if (
        termName.value &&
        parameter1.value &&
        parameter2.value &&
        parameter3.value &&
        parameter4.value
      )
        addTerm();
      else M.toast({html: 'Введите значения во все поля'})
    };

    const addTerm = () => {
      terms.value.push({
        termName: termName.value,
        parameter1: parameter1.value,
        parameter2: parameter2.value,
        parameter3: parameter3.value,
        parameter4: parameter4.value,
      });
      resetForm();
    };

    const resetForm = () => {
      termName.value = null;
      parameter1.value = null;
      parameter2.value = null;
      parameter3.value = null;
      parameter4.value = null;
    };

    const deleteTermById = (id) => {
      terms.value.splice(id, 1);
    };

    return {
      terms,
      termName,
      parameter1,
      parameter2,
      parameter3,
      parameter4,
      lingName,
      shortLingName,
      onAddTerm,
      deleteTermById,
    };
  },
};
</script>

<style lang="scss" scoped>
.rulesContainer {
  background-color: #fff;
}

.terms-wrapper {
  width: 100%;
  margin-top: 15px;
}

.lingv-var {
  margin-top: 35px;
  
  .wrapper-name {
    left: 30%;
  }
}

.terms-add {
  margin-left: 15px;
}

.delete-icon {
  color: #2f79ee;
  cursor: pointer;
}

.wrapper-name {
  position: absolute;
  top: -55px;
  left: 50%;
  font-weight: 500;
  font-size: 25px;
}
</style>
