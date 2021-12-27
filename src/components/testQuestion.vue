<template>
  <div class="container">
    <h5>Вопрос номер {{questionIndex+1}}</h5>
    <p>{{ questions.Header }}</p>
    <form action="#" @submit.prevent="getAnswer">
      <p v-for="question in questions.Answer" :key="question.Key">
        <label>
          <input
            name="group1"
            type="radio"
            :value="question.IsCorrect"
            v-model="answer"
          />
          <span :class="{ green: question.IsCorrect }">{{ question.Text }}</span>
        </label>
      </p>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
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
      console.log(answer.value);
      if (answer.value == 0 || answer.value == 1)
        emit("onAnswer", answer.value);
      else M.toast({ html: "Выберите вариант ответа" });
    };

    return { answer, getAnswer };
  },
};
</script>

<style scoped>
.green{
  color: green !important;
}
</style>
