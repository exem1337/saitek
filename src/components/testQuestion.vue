<template>
  <div class="container">
    <p>{{ questions.name }}</p>
    <form action="#" @submit.prevent="getAnswer">
      <p v-for="question in questions.vars" :key="question.key">
        <label>
          <input
            name="group1"
            type="radio"
            :value="question.isCorrect"
            v-model="answer"
          />
          <span>{{ question.text }}</span>
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
  },
  setup(props, { emit }) {
    const answer = ref();

    const getAnswer = () => {

      if (answer.value == false || answer.value == true) emit("onAnswer", answer.value);
      else M.toast({ html: "Выберите вариант ответа" });
    };

    return { answer, getAnswer };
  },
};
</script>