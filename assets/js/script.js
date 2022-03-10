const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Functions

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Quiz Questions

const questions = [
    {
        question: 'Is coding fun?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true },
            { text: 'Yes', correct: true }
            
        ]  
      },  
    {
        question: 'Commonly used data types DO NOT Include:?',
        answers: [
            { text: 'Strings', correct: false },
            { text: 'Booleans', correct: true },
            { text: 'Alerts', correct: false },
            { text: 'Numbers', correct: false }
        ]  
      },
      {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        answers: [
            { text: 'Commas', correct: false },
            { text: 'Curly Brackets', correct: false },
            { text: 'Quotes', correct: true },
            { text: 'Parenthesis', correct: false }
        ]  
      },
      {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'Terminal/Bash', correct: false },
            { text: 'For Loops', correct: false },
            { text: 'console.log', correct: true }
        ]  
      },
      {
        question: 'Arrays in JavaScript can be used to store _______.',
        answers: [
            { text: 'Numbers and Strings', correct: false },
            { text: 'Other Arrays', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'All of the above', correct: true }
        ]  
      },  
]

// Countdown Timer

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}