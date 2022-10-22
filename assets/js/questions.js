//Array of question number, questions, options and answers of different levels
const questions = [
    {
    num: 1,
    question: 61 + 4,
    difficulty: "easy",
    answers: [
        { text: "65", correct: true},
        { text: "69", correct: false}
    ]
},

{
    num: 2,
    question: 15 - 8,
    option
    answer: 7,
    difficulty: "easy"
},
   
{
    num: 3,
    question: 6 + 4 + 8,
    answer: 18,
    difficulty: "easy"
},

{
    num: 4,
    question: "3 + ? = 12",
    answer: 9,
    difficulty: "easy"
},

{
    num: 5,
    question: 5 + 4 + 9,
    answer: 18,
    difficulty: "easy"
},

{
    num: 6,
    question: "Increase 17 by 8",
    answer: 25,
    difficulty: "easy"
},

{
    num: 7,
    question: "How many days are there in three weeks",
    answer: 21,
    difficulty: "easy"
},

{
    num: 8,
    question: 16 - 7,
    answer: 9,
    difficulty: "easy"
},

{
    num: 9,
    question: "What is the sixth letter of the alphabets ?",
    answer: "F",
    difficulty: "easy"
},

{
    num: 10,
    question: "6 x 2 = 3 x ?",
    answer: 4,
    difficulty: "easy"
},
] 

// Level 2 Questions
let questionsLevel2 = [
    {
    num: 1,
    question: "7 x 4 = 30 - ?",
    answer: 2,
    difficulty: "medium"
},

{
    num: 2,
    question: "What is one quarter of 20 ?",
    answer: 5,
    difficulty: "medium"
},
   
{
    num: 3,
    question: "Find the sum of one 10p and three 5p",
    answer: 25,
    difficulty: "medium"
},

{
    num: 4,
    question: "? + 7 = 15",
    answer: 8,
    difficulty: "medium"
},

{
    num: 5,
    question:" 8 / 2 = 16 / ?",
    answer: 4,
    difficulty: "medium"
},

{
    num: 6,
    question: "What is one-fifth of thirty ?",
    answer: 6,
    difficulty: "medium"
},

{
    num: 7,
    question: "3 x 9 = 9 + 9 + ?",
    answer: 9,
    difficulty: "medium"
},

{
    num: 8,
    question: "How much less is seven 2ps than 20p ?",
    answer: 6,
    difficulty: "medium"
},

{
    num: 9,
    question: "What is half an hour minus ten minutes ?",
    answer: 20,
    difficulty: "medium" 
},

{
    num: 10,
    question: 44 - 9,
    answer: 35,
    difficulty: "medium"
},
]

// Level 3 Questions
let questionsLevel3 = [
    {
    num: 1,
    question: "Subtract the product of 6 and 7 from 50",
    answer: 8,
    difficulty: "hard"
},

{
    num: 2,
    question: "A metre is divided into 10 equal parts. How long is each part ?",
    answer: "10 cm",
    difficulty: "hard"
},
   
{
    num: 3,
    question: 820 - 40,
    answer: 780,
    difficulty: "hard"
},

{
    num: 4,
    question: 1009 - 100,
    answer: 909,
    difficulty: "hard"
},

{
    num: 5,
    question: "From the sum of 39 and 6, Subtract 20",
    answer: 25,
    difficulty: "hard"
},

{
    num: 6,
    question: "From 5 take away 3.08 ?",
    answer: 1.92,
    difficulty: "hard"
},

{
    num: 7,
    question: "What is 378cm to the nearest metre ?",
    answer: 4,
    difficulty: "hard"
},

{
    num: 8,
    question: "Divide 1.50 by 6 ?",
    answer: 0.25,
    difficulty: "hard"
},

{
    num: 9,
    question: "7 x 9 = 50 + ?",
    answer: 13,
    difficulty: "hard" 
},

{
    num: 10,
    question: "99 plus 99 plus 99",
    answer: 297,
    difficulty: "hard"
},
]

// let selectedLevel = document.getElementById("diffulty");

// let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);