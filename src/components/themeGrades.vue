<template>
    <div class="container">
        <h3 class="teal-text">Оценки студентов по теме {{ course.courseThemeName }}</h3>
        <button @click="sortByGroup" class="waves-effect waves-light btn"><i class="material-icons left">sort</i>Отсортировать по группам</button>
            <ul class="collection" style="width: 100%">
                <li v-for="student in course.students" :key="student.studentID" class="collection-item avatar userCard">
                    <img src="https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg" alt="" class="circle">
                    <span class="title">{{student.studentLastName}} {{student.studentName}} {{student.studentPatronim}}</span>
                    <p>Группа {{student.studentGroup}} <br>
                        Дата последнего тестирования: {{student.studenPassTime}} 
                    </p>
                    <a href="#!" class="secondary-content valign-wrapper"><i class="material-icons">grade</i>Оценка: {{ student.studentGrade }}/100 </a>
                </li>
            </ul>
    </div> 
</template>

<script>
    export default {
        data () {
            return {
                course: {
                    courseThemeName: "Тема 1",
                    students: 
                    [
                        {
                            studentID: 1,
                            studentName: "Данила",
                            studentLastName: "Акладский",
                            studentPatronim: "Вячеславович",
                            studentGrade: 75,
                            studenPassTime: "12.10.2021",
                            studentGroup: "19ИВТ(б)-ПОВТ"
                        },
                        {
                            studentID: 2,
                            studentName: "Данила",
                            studentLastName: "Акладский",
                            studentPatronim: "Вячеславович",
                            studentGrade: 75,
                            studenPassTime: "12.10.2021",
                            studentGroup: "19ИВТ(б)-ВМК"
                        },
                        {
                            studentID: 3,
                            studentName: "Данила",
                            studentLastName: "Акладский",
                            studentPatronim: "Вячеславович",
                            studentGrade: 75,
                            studenPassTime: "12.10.2021",
                            studentGroup: "19ИВТ(б)-ПОВТ"
                        },
                        {
                            studentID: 4,
                            studentName: "Данила",
                            studentLastName: "Акладский",
                            studentPatronim: "Вячеславович",
                            studentGrade: 75,
                            studenPassTime: "12.10.2021",
                            studentGroup: "19ИВТ(б)-ПОВТ"
                        },
                        {
                            studentID: 5,
                            studentName: "Данила",
                            studentLastName: "Акладский",
                            studentPatronim: "Вячеславович",
                            studentGrade: 75,
                            studenPassTime: "12.10.2021",
                            studentGroup: "19ИВТ(б)-ПОВТ"
                        }
                    ]
                }
            }
        },
        mounted () {
            var elems = document.querySelectorAll('.material-tooltip');
            elems.forEach((el) => {
            el.parentElement.removeChild(el);
            })
            M.AutoInit();
        },
        methods: {
            dynamicSort(property) {
                var sortOrder = 1;
                if(property[0] === "-") {
                    sortOrder = -1;
                    property = property.substr(1);
                }
                return function (a,b) {
                    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                    return result * sortOrder;
                }
            },
            sortByGroup() {
                this.course.students.sort(this.dynamicSort("studentGroup"));
            }
        }
    }
</script>

<style lang="scss" scoped>
    .userCard {
        border-radius: 0 !important;
        transition: background-color .2s ease;
        &:hover {
            background-color: darken(#fff, 10%) !important;
        }
    }
</style>