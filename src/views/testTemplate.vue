<template>
  <div class="container">
    <div class="card z-depth-2 test-template">
      <div v-if="!start" class="test-startup">
        <h4 class="big-margin-bottom">Глава 1. Введение в С++</h4>
        <p class="left-bottom">Количество вопросов: 10</p>
        <p class="testing-student">Тестируемый: Егоров Владимир Юрьевич</p>
        <button
          class="waves-effect waves-light btn white-text"
          @click="startTest"
        >
          Начать тестирование
        </button>
      </div>

      <test-question
        v-if="!results && start"
        @onAnswer="onAnswer"
        :questions="question[i]"
        :questionIndex="i"
      />
      <form v-if="results">
        <p>
          Результаты тестирования: {{ correctCount }} из {{ question.length }}
        </p>
        <router-link to="/course" class="waves-effect waves-light btn white-text">Вернуться к курсу</router-link>
      </form>
    </div>
    <div class="counter" v-if="start">Время тестирования: {{ count }}</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import testQuestion from "@/components/testQuestion.vue";
import axios from "axios";
export default {
  components: { testQuestion },
  setup() {
    let server = "http://localhost:8080/";
    let i = ref(0);
    let results = ref(false);
    let correctCount = ref(0);
    let testReady = ref(false);

    const question = [
      {
        Header:
          "Укажите какое задание класса будет правильным? class A { public : int a, b; protected : int z; private : short i; } A1; class B : public A { public : int c, d; private : int k;} B1;",
        Answer: [
          {
            Key: 1872,
            Text: "A1.i = 10; ",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 419,
          },
          {
            Key: 1873,
            Text: "B1.k = A1.i;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 419,
          },
          {
            Key: 1874,
            Text: "B1.c = A1.a;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 419,
          },
          {
            Key: 1875,
            Text: "A1.k= B1.c;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 419,
          },
          {
            Key: 1876,
            Text: "A1.z = B1.d.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 419,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          "Что выведет программа в стандартный поток вывода? class A { public : int a, b; protected : int z; private : short id; } A1; class B : protected A { public : short t; void ff(short a) { id = ++a; } } B1; int main() { B1.ff(20); cout « B1.id; }",
        Answer: [
          {
            Key: 1877,
            Text: "20",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 420,
          },
          {
            Key: 1878,
            Text: "21",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 420,
          },
          {
            Key: 1879,
            Text: "0",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 420,
          },
          {
            Key: 1880,
            Text: "ошибка;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 420,
          },
          {
            Key: 1881,
            Text: "19",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 420,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          "Какой результат будет у следующего выражения? class A { friend int Freund(); friend class B; public : int x, y; private: short i; } A1; class B { public : void func_B(); }B1; int Freund() { A1.x = 1; A1.y = 2; A1.i += 3; return A1.x + A1.y + A1.i; } void B::func_B() { A1.i = 2; } int main() { B1.func_B(); cout « Freund(); }",
        Answer: [
          {
            Key: 1882,
            Text: "6",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 421,
          },
          {
            Key: 1883,
            Text: "8",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 421,
          },
          {
            Key: 1884,
            Text: "12",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 421,
          },
          {
            Key: 1885,
            Text: "10",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 421,
          },
          {
            Key: 1886,
            Text: "0",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 421,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          "На какой строке произойдет ошибка компиляции? 1:class A 2: { public: void f1(int &a){val+=a++;};//val инициализируется в конструкторе 3: int f2() {return val+1;}; 4: int val; 5: } A1; 6:int main() 7: { 8: A1.f1(); 9: A1.f2(); 10: }",
        Answer: [
          {
            Key: 1887,
            Text: "3",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 422,
          },
          {
            Key: 1888,
            Text: "5",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 422,
          },
          {
            Key: 1889,
            Text: "8",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 422,
          },
          {
            Key: 1890,
            Text: "9",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 422,
          },
          {
            Key: 1891,
            Text: "7",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 422,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          "Что нужно изменить, чтобы данный код скомпилировался? class B { virtual void f() {} }; class V { virtual void g() {} }; class X { }; class D : public B, virtual public V, virtual public X { }; int main() { D d; B* pb = &d; D* p1 = (D*)pb; // 1 D* p2 = dynamic_cast<D*>(pb); // 2 V* pv = &d; D* p3 = (D*)pv; // 3 D* p4 = dynamic_cast<D*>(pv); // 4 X* px = &d; D* p5 = (D*)px; // 5 D* p6 = dynamic_cast<D*>(px); // 6 return 0; }",
        Answer: [
          {
            Key: 1892,
            Text: "Изменить тип наследования класса B на protected; ",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 423,
          },
          {
            Key: 1893,
            Text: "Изменить тип наследования класса B на public; ",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 423,
          },
          {
            Key: 1894,
            Text: "Объявить наследование B от A виртуальным; ",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 423,
          },
          {
            Key: 1895,
            Text: "Ничего, код и так компилируется;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 423,
          },
          {
            Key: 1896,
            Text: "Изменить тип наследования класса X на private.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 423,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат данной программы при значениях 3 и 19? #include <iostream> using namespace std; struct List { int data; List* next; }; List* head = NULL; void add(int data) { List* curr = new List; List* ptr = head; curr->data = data; curr->next = head; if (head != NULL) { while (ptr->next != head) { ptr = ptr->next; } ptr->next = curr; } else { curr->next = curr; } head = curr; } void f(int m) { List* ptr; ptr = head; int k = 0; do { ptr->data++; k++; ptr = ptr->next; } while (k != m); } void print(int n) { List* ptr; ptr = head; int k = 0; do { cout « ptr->data « " "; k++; ptr = ptr->next; } while (k != n + 1); } int main() { int n, m; cout « "Count a number of Emma`s friends:\n"; cout « "n = "; cin » n; cout « "Enter a number of sweets:\n"; cout « "m = "; cin » m; for (int j = 1; j <= n + 1; j++) { add(0); } f(m); cout « "Output of the program:\n"; print(n); return 0; }',
        Answer: [
          {
            Key: 1897,
            Text: "5 5 5 4;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 424,
          },
          {
            Key: 1898,
            Text: "5 5 4 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 424,
          },
          {
            Key: 1899,
            Text: "4 4 4 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 424,
          },
          {
            Key: 1900,
            Text: "4 4 4 3;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 424,
          },
          {
            Key: 1901,
            Text: "5 5 5 5.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 424,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат работы программы? #include <iostream> class DateClass { public: int m_day; int m_month; int m_year; void print() { std::cout « m_day « "/" « m_month « "/" « m_year; } }; int main() { DateClass today { 12, 11, 2018 }; today.m_day = 18; today.print(); return 0; }',
        Answer: [
          {
            Key: 1902,
            Text: "12/11/2018;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 425,
          },
          {
            Key: 1903,
            Text: "18/11/2018;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 425,
          },
          {
            Key: 1904,
            Text: "12/11/18;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 425,
          },
          {
            Key: 1905,
            Text: "12/18/2018;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 425,
          },
          {
            Key: 1906,
            Text: "18/18/18.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 425,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат работы программы? #include <iostream> class Numbers { public: \tint m_first; \tint m_second; \t \tvoid set(int first, int second) \t{ \t\tm_first = first; \t\tm_second = second; \t} \tvoid print() \t{ \t\tstd::cout « "Numbers(" « m_first « ", " « m_second « ")\n"; \t} }; int main() { \tNumbers n1; \tn1.set(3, 3); \tNumbers n2{ 4, 4 }; \tn1.print(); \tn2.print(); \treturn 0; }',
        Answer: [
          {
            Key: 1907,
            Text: "3, 3 4, 4; ",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 426,
          },
          {
            Key: 1908,
            Text: "4, 4 4, 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 426,
          },
          {
            Key: 1909,
            Text: "3, 3 3, 3;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 426,
          },
          {
            Key: 1910,
            Text: "Ошибка компиляции;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 426,
          },
          {
            Key: 1911,
            Text: "Сбой работы программы.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 426,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Что находит данная программа? #include <iostream> #include <string> using namespace std; class Students { public: void set_name(string student_name) { name = student_name; } string get_name() { return name; } void set_last_name(string student_last_name) { last_name = student_last_name; } string get_last_name() { return last_name; } void set_scores(int student_scores[]) { for (int i = 0; i < 5; ++i) { scores[i] = student_scores[i]; } } void set_average_ball(float ball) { average_ball = ball; } float get_average_ball() { return average_ball; } private: int scores[5]; float average_ball; string name; string last_name; }; int main() { Students student; string name; string last_name; cout « "Name: "; getline(cin, name); cout « "Last name: "; getline(cin, last_name); student.set_name(name); student.set_last_name(last_name); int scores[5]; int sum = 0; for (int i = 0; i < 5; ++i) { cout « "Score " « i + 1 « ": "; cin » scores[i]; sum += scores[i]; } student.set_scores(scores); float avg= sum / 5.0; student.set_avg(avg); cout « "avg for" « student.get_name() « " " « student.get_last_name() « " is " « student.get_avg() « endl; return 0; }',
        Answer: [
          {
            Key: 1912,
            Text: "Полную информацию о студенте;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 427,
          },
          {
            Key: 1913,
            Text: "Оценки студента;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 427,
          },
          {
            Key: 1914,
            Text: "Среднее значение оценок студента;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 427,
          },
          {
            Key: 1915,
            Text: "Поиск студента по фамилии;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 427,
          },
          {
            Key: 1916,
            Text: "Поиск студента по успеваемости.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 427,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат данной программы при значениях 3 и 19? #include <iostream> using namespace std; struct List { int data; List* next; }; List* head = NULL; void add(int data) { List* curr = new List; List* ptr = head; curr->data = data; curr->next = head; if (head != NULL) { while (ptr->next != head) { ptr = ptr->next; } ptr->next = curr; } else { curr->next = curr; } head = curr; } void f(int m) { List* ptr; ptr = head; int k = 0; do { ptr->data++; k++; ptr = ptr->next; } while (k != m); } void print(int n) { List* ptr; ptr = head; int k = 0; do { cout « ptr->data « " "; k++; ptr = ptr->next; } while (k != n + 1); } int main() { int n, m; cout « "Count a number of Emma`s friends:\n"; cout « "n = "; cin » n; cout « "Enter a number of sweets:\n"; cout « "m = "; cin » m; for (int j = 1; j <= n + 1; j++) { add(0); } f(m); cout « "Output of the program:\n"; print(n); return 0; }',
        Answer: [
          {
            Key: 1917,
            Text: "5 5 5 4;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 428,
          },
          {
            Key: 1918,
            Text: "5 5 4 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 428,
          },
          {
            Key: 1919,
            Text: "4 4 4 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 428,
          },
          {
            Key: 1920,
            Text: "4 4 4 3;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 428,
          },
          {
            Key: 1921,
            Text: "5 5 5 5.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 428,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат работы программы? #include <iostream> class Numbers { public: \tint m_first; \tint m_second; \t \tvoid set(int first, int second) \t{ \t\tm_first = first; \t\tm_second = second; \t} \tvoid print() \t{ \t\tstd::cout « "Numbers(" « m_first « ", " « m_second « ")\n"; \t} }; int main() { \tNumbers n1; \tn1.set(3, 3); \tNumbers n2{ 4, 4 }; \tn1.print(); \tn2.print(); \treturn 0; }',
        Answer: [
          {
            Key: 1922,
            Text: "3, 3 4, 4; ",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 429,
          },
          {
            Key: 1923,
            Text: "4, 4 4, 4;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 429,
          },
          {
            Key: 1924,
            Text: "3, 3 3, 3;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 429,
          },
          {
            Key: 1925,
            Text: "Ошибка компиляции;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 429,
          },
          {
            Key: 1926,
            Text: "Сбой работы программы.",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 429,
          },
        ],
        TestKey: "79",
      },
      {
        Header:
          'Каким будет результат работы программы при значениях 5, 7? #include <iostream> using namespace std; class summa { int x,y; public: void get_xy() { cout « "Wwedi X: "; cin » x; cout « "Wwedi Y: "; cin » y; } int sum_xy() { return x+y; } } s1; int main() { s1.get_xy(); cout « s1.x « `\n`; }',
        Answer: [
          {
            Key: 1927,
            Text: "5",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 430,
          },
          {
            Key: 1928,
            Text: "12",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 430,
          },
          {
            Key: 1929,
            Text: "Ошибка компиляции;",
            Img_Key: null,
            IsCorrect: 1,
            Question_Key: 430,
          },
          {
            Key: 1930,
            Text: "Сбой работы программы;",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 430,
          },
          {
            Key: 1931,
            Text: "7",
            Img_Key: null,
            IsCorrect: 0,
            Question_Key: 430,
          },
        ],
        TestKey: "79",
      },
    ];

    // onMounted(() => {
    //   console.log("jija");
    //     axios.get(server + "getTest?testKey=79")
    //     .then((res) => {
    //     if (res == "Ошибочка") {
    //       M.toast({ html: "Серверная ошибка" });
    //     }
    //     question = res.data
    //     console.log(res.data);
    //     testReady.value = true
    //   });
    // });

    const start = ref(false);

    const startTest = () => {
      start.value = true;

      intervalValue = setInterval(() => {
        count.value += 1;
      }, 1000);
    };

    const onAnswer = (answer) => {
      if (answer == 1) {
        correctCount.value++;
      }
      if (i.value < question.length - 1) {
        i.value = i.value + 1;
      } else {
        results.value = true;
        clearInterval(intervalValue);
      }
    };
    let intervalValue;
    const count = ref(0);

    return {
      question,
      i,
      onAnswer,
      results,
      correctCount,
      testReady,
      start,
      startTest,
      count,
    };
  },
};
</script>

<style lang="scss" scoped>
.test-template {
  margin-top: 100px;
  padding: 15px;
  position:relative;
}

.test-startup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  background-color: #2f79ee !important;
}

.testing-student{
  position: absolute;
  bottom: 0;
  right: 25px;
}

.left-bottom{
  position: absolute;
  bottom: 0;
  left: 25px;
}

.big-margin-bottom{
  margin-bottom: 100px;
}
</style>