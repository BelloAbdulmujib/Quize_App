// script.js

const questions = [
    {
        stage: 1,
        questions: [
            { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
            { q: "Which is a vowel?", options: ["b", "c", "a", "d"], correct: 2 },
            { q: "What is 5 * 3?", options: ["15", "10", "5", "20"], correct: 0 },
            { q: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correct: 2 },
            { q: "Which word is a noun?", options: ["run", "quickly", "apple", "very"], correct: 2 },
            { q: "What is 10 - 4?", options: ["6", "5", "7", "8"], correct: 0 },
            { q: "Which is a verb?", options: ["jump", "red", "slow", "high"], correct: 0 },
            { q: "What is 7 + 5?", options: ["11", "12", "13", "14"], correct: 1 },
            { q: "Which is an adjective?", options: ["fast", "cat", "jump", "the"], correct: 0 },
            { q: "What is 9 / 3?", options: ["1", "2", "3", "4"], correct: 2 },
            { q: "Which number is even?", options: ["1", "3", "5", "8"], correct: 3 },
            { q: "What is 3 + 4?", options: ["5", "6", "7", "8"], correct: 2 },
        ],
    },
    {
        stage: 2,
        questions: [
            { q: "What is 8 / 2?", options: ["2", "4", "8", "6"], correct: 1 },
            { q: "Which is a consonant?", options: ["e", "i", "u", "t"], correct: 3 },
            { q: "What is 9 - 4?", options: ["4", "5", "6", "7"], correct: 1 },
            { q: "What is the opposite of 'hot'?", options: ["warm", "cold", "cool", "freezing"], correct: 1 },
            { q: "Which word is a pronoun?", options: ["he", "quickly", "run", "apple"], correct: 0 },
            { q: "What is 12 + 3?", options: ["14", "15", "16", "17"], correct: 1 },
            { q: "Which is a preposition?", options: ["under", "run", "quick", "very"], correct: 0 },
            { q: "What is 6 * 2?", options: ["10", "11", "12", "13"], correct: 2 },
            { q: "Which is a conjunction?", options: ["and", "quick", "dog", "yellow"], correct: 0 },
            { q: "What is 15 - 5?", options: ["10", "9", "11", "12"], correct: 0 },
            { q: "Which word means 'large'?", options: ["small", "tiny", "big", "little"], correct: 2 },
            { q: "What is 4 + 4?", options: ["6", "7", "8", "9"], correct: 2 },
        ],
    },
    {
        stage: 3,
        questions: [
            { q: "What is 7 * 2?", options: ["12", "14", "16", "18"], correct: 1 },
            { q: "Which is a noun?", options: ["run", "dog", "quickly", "very"], correct: 1 },
            { q: "What is 10 / 2?", options: ["4", "5", "6", "7"], correct: 1 },
            { q: "What is the capital of Italy?", options: ["Rome", "Madrid", "Berlin", "Paris"], correct: 0 },
            { q: "Which word is a verb?", options: ["run", "quickly", "apple", "very"], correct: 0 },
            { q: "What is 20 - 4?", options: ["16", "17", "18", "19"], correct: 0 },
            { q: "Which is an adjective?", options: ["big", "jump", "fast", "the"], correct: 0 },
            { q: "What is 3 * 3?", options: ["6", "7", "8", "9"], correct: 3 },
            { q: "Which is a preposition?", options: ["in", "run", "quick", "very"], correct: 0 },
            { q: "What is 18 / 2?", options: ["7", "8", "9", "10"], correct: 2 },
            { q: "What is 5 + 7?", options: ["11", "12", "13", "14"], correct: 1 },
            { q: "Which number is odd?", options: ["2", "4", "6", "9"], correct: 3 },
        ],
    },
    {
        stage: 4,
        questions: [
            { q: "What is 4 * 3?", options: ["10", "11", "12", "13"], correct: 2 },
            { q: "Which is a pronoun?", options: ["he", "quickly", "run", "apple"], correct: 0 },
            { q: "What is 12 / 3?", options: ["3", "4", "5", "6"], correct: 1 },
            { q: "What is the capital of Germany?", options: ["Berlin", "Madrid", "Rome", "Paris"], correct: 0 },
            { q: "Which word is an adjective?", options: ["big", "quickly", "apple", "very"], correct: 0 },
            { q: "What is 15 - 7?", options: ["7", "8", "9", "10"], correct: 1 },
            { q: "Which is a verb?", options: ["run", "big", "fast", "the"], correct: 0 },
            { q: "What is 5 * 4?", options: ["19", "20", "21", "22"], correct: 1 },
            { q: "Which is a conjunction?", options: ["and", "quick", "dog", "yellow"], correct: 0 },
            { q: "What is 25 / 5?", options: ["3", "4", "5", "6"], correct: 2 },
            { q: "Which word means 'fast'?", options: ["quick", "slow", "tall", "short"], correct: 0 },
            { q: "What is 9 + 6?", options: ["14", "15", "16", "17"], correct: 1 },
        ],
    },
    {
        stage: 5,
        questions: [
            { q: "What is 6 * 3?", options: ["17", "18", "19", "20"], correct: 1 },
            { q: "Which is a noun?", options: ["run", "dog", "quickly", "very"], correct: 1 },
            { q: "What is 14 / 2?", options: ["6", "7", "8", "9"], correct: 1 },
            { q: "What is the capital of Spain?", options: ["Rome", "Madrid", "Berlin", "Paris"], correct: 1 },
            { q: "Which word is a verb?", options: ["jump", "quickly", "apple", "very"], correct: 0 },
            { q: "What is 30 - 4?", options: ["25", "26", "27", "28"], correct: 3 },
            { q: "Which is an adjective?", options: ["big", "jump", "fast", "the"], correct: 0 },
            { q: "What is 4 * 4?", options: ["14", "15", "16", "17"], correct: 2 },
            { q: "Which is a preposition?", options: ["under", "run", "quick", "very"], correct: 0 },
            { q: "What is 21 / 3?", options: ["5", "6", "7", "8"], correct: 2 },
            { q: "What is 11 + 11?", options: ["20", "21", "22", "23"], correct: 2 },
            { q: "Which number is even?", options: ["3", "7", "10", "15"], correct: 2 },
        ],
    },
    {
        stage: 6,
        questtions: [
            { q: "What is the square root of 64?", options: ["6", "7", "8", "9"], correct: 2 },
            { q: "Which word is an antonym of 'happy'?", options: ["sad", "joyful", "glad", "pleased"], correct: 0 },
            { q: "What is 45 / 5?", options: ["7", "8", "9", "10"], correct: 2 },
            { q: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], correct: 2 },
            { q: "Which sentence is in the past tense?", options: ["He runs fast.", "She will run.", "They ran quickly.", "I am running."], correct: 2 },
            { q: "What is 11 * 11?", options: ["120", "121", "122", "123"], correct: 1 },
            { q: "Which is a synonym of 'quick'?", options: ["slow", "fast", "happy", "big"], correct: 1 },
            { q: "What is 100 - 47?", options: ["51", "52", "53", "54"], correct: 2 },
            { q: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "H2"], correct: 1 },
            { q: "Which sentence is correct?", options: ["Their going to school.", "They're going to school.", "There going to school.", "The're going to school."], correct: 1 },
        ]
    },
    {
        stage: 7,
        questions:  [
            { q: "What is 12 * 12?", options: ["142", "143", "144", "145"], correct: 2 },
            { q: "Which is a prime number?", options: ["10", "12", "15", "17"], correct: 3 },
            { q: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2 },
            { q: "Which is a compound word?", options: ["sun", "shine", "sunshine", "bright"], correct: 2 },
            { q: "What is the perimeter of a square with side length 5?", options: ["20", "15", "10", "25"], correct: 0 },
            { q: "Which word is a homophone of 'sea'?", options: ["see", "she", "say", "sew"], correct: 0 },
            { q: "What is the value of Pi (π) up to two decimal places?", options: ["3.12", "3.14", "3.15", "3.16"], correct: 1 },
            { q: "Which sentence uses the correct form of 'their'?", options: ["Their coming over.", "There coming over.", "They're coming over.", "Their coming over."], correct: 2 },
            { q: "What is the boiling point of water in Celsius?", options: ["90", "95", "100", "105"], correct: 2 },
            { q: "Which is an adverb in the sentence 'She sings beautifully.'?", options: ["She", "sings", "beautifully", "song"], correct: 2 },
        ],
    },
];

// Shuffling function for repeating stages
function shuffleQuestions(stageIndex) {
    const stageQuestions = questions[stageIndex].questions;
    for (let i = stageQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stageQuestions[i], stageQuestions[j]] = [stageQuestions[j], stageQuestions[i]];
    }
}

let currentStage = 0;
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;

const stageHeader = document.getElementById("stage-header");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const questionData = questions[currentStage].questions[currentQuestion];
    questionElement.textContent = questionData.q;
    optionsElement.innerHTML = "";

    const labelsData = ["(a)", "(b)", "(c)", "(d)"];
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = `(${labels[index]}) ${option}`;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    nextBtn.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentStage].questions[currentQuestion];
    if (selectedIndex === questionData.correct) {
        correctAnswers++;
    }

    if (currentQuestion < questions[currentStage].questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        evaluateStage();
    }
}

function evaluateStage() {
    if (correctAnswers >= 7) {
        resultElement.textContent = `Congratulations! You passed Stage ${currentStage + 1}.`;
        if (currentStage < questions.length - 1) {
            currentStage++;
            currentQuestion = 0;
            correctAnswers = 0;
            loadStage();
        } else {
            resultElement.textContent += " You have completed all stages!";
        }
    } else {
        resultElement.textContent = `You scored ${correctAnswers}/10. Please try Stage ${currentStage + 1} again.`;
        shuffleQuestions(currentStage); // Shuffle questions if stage needs to be repeated
        currentQuestion = 0;
        currentQuestion = 0;
        correctAnswers = 0;
        loadQuestion();
    }
}

function loadStage() {
    stageHeader.textContent = `Stage ${currentStage + 1}`;
    resultElement.textContent = "";
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadStage);
/*command to run the app in the terminal "xdg-open index.html" */
/* or http-server */