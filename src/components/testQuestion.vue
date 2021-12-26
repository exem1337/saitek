<template>
  <div class="container">
    <p>{{ questions.Header }}</p>
    <form action="#" @submit.prevent="getAnswer">
      <p v-for="question in questions.Answer" :key="question.Key">
        <label>
          <input
            name="group1"
            type="radio"
            :value="question.isCorrect"
            v-model="answer"
          />
          <span>{{ question.Text }}</span>
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
    console.log(props.questions);
    const getAnswer = () => {

      if (answer.value == false || answer.value == true) emit("onAnswer", answer.value);
      else M.toast({ html: "Выберите вариант ответа" });
    };

    return { answer, getAnswer };
  },
};
</script>