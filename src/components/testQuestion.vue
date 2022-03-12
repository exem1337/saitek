<template>
  <div class="container">
    <h5>Вопрос номер {{questionIndex+1}}</h5>
    <p>{{ questions.Header }}</p>
    <form action="#" @submit.prevent="getAnswer">
      <p v-for="(question, index) in questions.Answer" :key="index">
        <label>
          <input
            name="group1"
            type="radio"
            :value="question.IsCorrect"
            v-model="answer"
          />
          <span>{{ question.Text }}</span>
        </label>
      </p>
      <input type="submit" class="waves-effect waves-light btn" />
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    questions: {
      type: Object,
      required: true,
    },
    questionIndex: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    let answer = ref();

    const getAnswer = () => {
      if (answer.value == 0 || answer.value == 1)
        emit("onAnswer", answer.value);
      else M.toast({ html: "Выберите вариант ответа" });
    };

    const defineLabel = computed(index => {
      return `#${index}`
    })

    return { answer, getAnswer, defineLabel };
  },
};
</script>

<style lang="scss" scoped>
[type="radio"]:checked + span::after,
    [type="radio"].with-gap:checked + span::before,
    [type="radio"].with-gap:checked + span::after {
        border: 2px solid #2f79ee;
    }

    [type="radio"]:checked + span::after,
    [type="radio"].with-gap:checked + span::after {
        background-color: #2f79ee;
    }

    .btn {
      background-color: #2f79ee !important;
    }
</style>
