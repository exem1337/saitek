<template>
  <div class="container">
    <div class="card z-depth-2 test-template">
      <h4>Тема 1, сложность - средний</h4>
      <test-question
        v-if="!results && testReady"
        @onAnswer="onAnswer"
        :questions="question[i]"
      />
      <form v-if="results">
        <p>
          Результаты тестирования: {{ correctCount }} из {{ question.length }}
        </p>
        <p></p>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import testQuestion from "@/components/testQuestion.vue";
import axios from 'axios'
export default {
  components: { testQuestion },
  setup() {
    let server = "http://localhost:8080/"
    let i = ref(0);
    let results = ref(false);
    let correctCount = ref(0);
    let testReady = ref(false)
    // const question = [
    //   {
    //     name: "вопрос 1",
    //     vars: [
    //       {
    //         key: 0,
    //         text: "da",
    //         isCorrect: true,
    //       },
    //       {
    //         key: 1,
    //         text: "net",
    //         isCorrect: false,
    //       },
    //     ],
    //   },
    //   {
    //     name: "вопрос 2",
    //     vars: [
    //       {
    //         key: 0,
    //         text: "da ladno",
    //         isCorrect: true,
    //       },
    //       {
    //         key: 1,
    //         text: "net",
    //         isCorrect: false,
    //       },
    //     ],
    //   },
    // ];
    let question = []

    onMounted(() => {
      console.log("jija");
        axios.get(server + "getTest?testKey=79")
        .then((res) => {
        if (res == "Ошибочка") {
          M.toast({ html: "Серверная ошибка" });
        }
        question = res.data
        console.log(res.data);
        testReady.value = true
      });
    });

    const onAnswer = (answer) => {
      if (answer == true) {
        correctCount.value++;
      }
      if (i.value < question.length - 1) {
        i.value = i.value + 1;
      } else results.value = true;
    };

    return { question, i, onAnswer, results, correctCount, testReady };
  },
};
</script>

<style lang="scss" scoped>
.test-template {
  margin-top: 100px;
  padding: 15px;
}
</style>