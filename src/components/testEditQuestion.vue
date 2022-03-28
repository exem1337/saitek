<template>
  <form ref="anyName" action="" id="frm" @submit.prevent="subm">
    <div class="question">
      <textarea
        v-model="question.Header"
        placeholder="Название вопроса"
        id="question_name"
        type="text"
        class="materialize-textarea"
      >{{ question.Header }} </textarea>
      <input
        type="file"
        placeholder="Картинка"
        id="Testimg"
        disabled
      />
      <label for="Testimg">Картинка вопроса</label>
      <ul>
        <li id="questionVar" v-for="(item, key) in question.Answer" :key="key">
          <textarea
            ref="var"
            placeholder="Вариант ответа"
            id="textarea1"
            class="materialize-textarea"
            >{{ item.Text }}</textarea
          >
          <label>
            <input id="correct" name="group1" type="radio" :checked="item.IsCorrect" />
            <span>Правильный</span>
          </label>
          <input
            type="file"
            placeholder="Картинка"
            id="img"
            style="margin-left: 10px"
            disabled
          />
          <i class="material-icons blue white-text circle delete-question">clear</i>
        </li>
      </ul>
    </div>
    <div class="add-var" style="display: flex; align-items: center">
      <button class="btn blue" style="margin-left: 15px">Добавить вариант ответа</button>
      <button class="btn blue" style="margin-left: 15px">Удалить вопрос</button>
    </div>
  </form>
</template>

<script>
import { watch } from "@vue/runtime-core";
export default {
  props: ["question", "needSave"],
  setup(props) {
    console.log(props.question)
    watch(
      () => props.needSave,
      (first, second) => {
        saveChanges();
      }
    );
    const saveChanges = () => {};

    return {};
  },
};
</script>

<style lang="scss" scoped>
#questionVar {
  position: relative;
}

.delete-question {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

[type="radio"]:checked + span::after,
[type="radio"].with-gap:checked + span::before,
[type="radio"].with-gap:checked + span::after {
    border: 2px solid #2f79ee;
}

[type="radio"]:checked + span::after,
[type="radio"].with-gap:checked + span::after {
    background-color: #2f79ee;
}
</style>