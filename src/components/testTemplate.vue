<template>
    <div class="container">
        <h3 class="grey-text text-darken-2 headText z-depth-1">Тест по теме 1</h3>
        <div class="card horizontal edit" style="padding: 15px">
            <test-item :question="questions" />
        </div>
    </div>
</template>

<script>
import testItem from '@/components/testItem.vue'
export default {
    data() {
        return {
            quesions: [
                {
                    key: 1,
                    text: 'Вопрос 1',
                    correct: 'Вариант 1',
                    vars: [
                        {
                            varKey: 1,
                            text: 'Вариант 1'
                        },
                        {
                            varKey: 2,
                            text: 'Вариант 2'
                        },
                        {
                            varKey: 3,
                            text: 'Вариант 3'
                        },
                        {
                            varKey: 4,
                            text: 'Вариант 4'
                        },
                        {
                            varKey: 5,
                            text: 'Вариант 5'
                        },
                    ]
                },
                {
                    key: 2,
                    text: 'Вопрос 2',
                    correct: 'Вариант 1',
                    vars: [
                        {
                            varKey: 1,
                            text: 'Вариант 1'
                        },
                        {
                            varKey: 2,
                            text: 'Вариант 2'
                        },
                        {
                            varKey: 3,
                            text: 'Вариант 3'
                        },
                        {
                            varKey: 4,
                            text: 'Вариант 4'
                        },
                        {
                            varKey: 5,
                            text: 'Вариант 5'
                        },
                    ]
                },
            ],
            currentQuestion: 0
        }
    },
    components: {
        testItem
    }
}
</script>