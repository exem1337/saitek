var questions = [
    {
        "question" : "Что такое алгоритм?",
        "variants" : [
            "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи",
            "Последовательность действий, выполнение которых ведёт к концу",
            "Наборопределений и понятий, определенных в языке С++",
            "Повтор действий, приводящих к решению задачи"
        ],
        "correct" : "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи"
    },
    {
        "question" : "Что такое алгоритм?",
        "variants" : [
            "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи",
            "Последовательность действий, выполнение которых ведёт к концу",
            "Набор определений и понятий, определенных в языке С++",
            "Повтор действий, приводящих к решению задачи"
        ],
        "correct" : "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи"
    },
    {
        "question" : "Что такое алгоритм?",
        "variants" : [
            "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи",
            "Последовательность действий, выполнение которых ведёт к концу",
            "Набор определений и понятий, определенных в языке С++",
            "Повтор действий, приводящих к решению задачи"
        ],
        "correct" : "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи"
    },
    {
        "question" : "Что такое алгоритм?",
        "variants" : [
            "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи",
            "Последовательность действий, выполнение которых ведёт к концу",
            "Набор определений и понятий, определенных в языке С++",
            "Повтор действий, приводящих к решению задачи"
        ],
        "correct" : "Совокупность чётко определенных действий, выполнение которых ведёт к решению задачи"
    },
]

const questionCard = document.querySelector("#question");
const questionContainer = document.querySelector(".questionContainer");

document.addEventListener('DOMContentLoaded', function(){  
    createQuestion();
    //viewresult();
})


let currentQuestion = 1; 

function changequestion() {
  
    const nextQuenstion = document.querySelectorAll("#next-question");

    // nextQuenstion.forEach((el) => {
    //     el.addEventListener('click', () => {
            let passed = false;
            
            document.querySelector(`.question${currentQuestion}`).querySelector("form").querySelectorAll("p").forEach((el) => {
                if(el.querySelector("label").querySelector("input").checked === true) 
                { 
                    passed = true; 
                    questionsArr.push(el.querySelector("label").querySelector("span").innerHTML);
                }  
            })
           
            if(!passed) M.toast({html: 'Нужно ответить на вопрос.'});
            else {
                if(currentQuestion < questions.length){
                    var currentCard = document.querySelector(`.question${currentQuestion}`);
                    
                    currentCard.classList.add("scale-out");
                    setTimeout(() => {
                        currentCard.style.display = "none";
                    }, 500);
                    setTimeout(() => {
                    currentQuestion++;
                    console.log(`current ${currentQuestion}`);
                    console.log(`questions: ${questions.length}`);
                    // currentCard = document.querySelector(`.question${currentQuestion}`);
                    // currentCard.style.display = "block";
                    // currentCard.classList.remove("scale-out");
                    
                    createQuestion();
                    
                    }, 500); 
                }
                if(currentQuestion === questions.length) {
                    var currentCard = document.querySelector(`.question${currentQuestion}`);
                    currentCard.classList.add("scale-out");
                    setTimeout(() => {
                        currentCard.style.display = "none";
                    }, 500);
                    setTimeout(() => {
                        viewresult();
                    }, 500);
                } 
            }
        }
    //})

var questionsArr = [];

function viewresult(){
    const testResultCard = document.querySelector(".testResult");
    let rightCounter = 0;
    for(let i = 0; i < questions.length; i++) {
        if(questionsArr[i] === questions[i].correct) rightCounter++;
    }
    let total = rightCounter / questions.length;

    testResultCard.querySelector(".determinate").style.width = `${total*100}%`;

    testResultCard.querySelector(".correctCount").innerHTML = rightCounter;

    testResultCard.style.display = "block";
}

function createQuestion() {
    var card = document.createElement("div");
    card.classList.add("card-panel"); 
    card.classList.add("scale-transition"); 
    card.classList.add("scale-transition"); 
    card.classList.add(`question${currentQuestion}`); 
    card.style.border = "1.5px solid #424242";
    // if(questionCounter > 1) 
    // {
    //     card.classList.add("scale-out");
    //     card.style.display = "none";
    // }
    var questionCounterText = document.createElement("h5");
    questionCounterText.innerHTML = `Вопрос ${currentQuestion}`;
    questionCounterText.classList.add("question-count");

    card.appendChild(questionCounterText);

    var questionTitle = document.createElement("h4");
    questionTitle.classList.add("question-title");
    questionTitle.classList.add("center");
    questionTitle.style.marginBottom = "30px";
    questionTitle.innerHTML = questions[currentQuestion-1].question;

    card.appendChild(questionTitle);

    var form = document.createElement("form");
    form.action = "#";
    for(let i = 0; i < questions[currentQuestion-1].variants.length; i++) {
        var variant = document.createElement("p");
        var label = document.createElement("label");
        
        var input = document.createElement("input");
        input.name = "group1";
        input.type = "radio";

        label.appendChild(input);

        var varText = document.createElement("span");
        varText.classList.add("grey-text");
        varText.classList.add("text-darken-3");
        varText.style.fontSize = "1.5em";
        varText.innerHTML = questions[currentQuestion-1].variants[i];

        label.appendChild(varText);

        variant.appendChild(label);

        form.appendChild(variant);
    }

    card.appendChild(form);

    var btn = document.createElement("a");
    btn.classList.add("waves-effect");
    btn.classList.add("waves-light");
    btn.classList.add("btn-large");
    btn.id = "next-question";
    btn.style.marginTop = "30px";
    btn.innerHTML = "Следующий вопрос";
    btn.addEventListener('click', changequestion);
    card.appendChild(btn);
    questionContainer.appendChild(card);


}