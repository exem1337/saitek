<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-3">Оценки студентов по теме {{ course.courseThemeName }}</h3>
        <ul class="collection z-depth-3 white" style="width: 100%; margin-top:0">
            <li class="white" style="margin: 15px"><button @click="sortByGroup" class="waves-effect waves-light btn" style="background-color: #2f79ee;"><i class="material-icons left">sort</i>Отсортировать по группам</button></li>
            <li v-for="student in course.students" :key="student.studentID" class="collection-item avatar userCard">
                <img src="https://11m1a41kw68b2skba3uj53p1-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/avatar-male.jpg" alt="" class="circle">
                <span class="title">{{student.studentLastName}} {{student.studentName}} {{student.studentPatronim}}</span>
                <p>Группа {{student.studentGroup}} <br>
                    Дата последнего тестирования: {{student.studenPassTime}}
                </p>
                <a href="#!" class="secondary-content valign-wrapper" style="color: #2f79ee;"><i class="material-icons" style="color: #2f79ee;">grade</i>Оценка: {{ student.studentGrade }}/100 </a>
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
    .headText{
        position: relative;
        z-index: 1;
        width: fit-content;
        background-color: #fff;
        padding: 15px;
        margin-top: 15px;
        margin-bottom: 0;
        border-radius: 20px 20px 0 0 ;
    }
    .btn-wrapper{
        display: flex;
        .white-space{
            width: 100%;
            position: relative;
            z-index: 2;
        }
    }
    .collection{
        position: relative;
        z-index: 1;
    }
</style>