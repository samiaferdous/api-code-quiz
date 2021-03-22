//Creating Variables

var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".start-quiz");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".questions");
var hElement = document.querySelector("#title");
var oderListEl = document.querySelector("#list-questions");
var finishDiv = document.querySelector(".the-end");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#staticEmail");
var firstPageEl = document.querySelector(".intro");

// Quiz Questions
var questions = [
    {
        title: "Which of the following functions combines the text of two strings and returns a new string?",
        choices: ["add()", "merge()", "combine()", "concat()"],
        answer: "concat()",
    },
    {
        title: "Which method adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["last()", "put()", "push()", "None of the Above"],
        answer: "push()",
    },
    {
        title: "Which of the following is a server-side Javascript object?",
        choices: ["Function", "File", "FileUpload", "Date"],
        answer: "Function",
    },
    {
        title: "To insert a JavaScript into an html page, which tag is used?",
        choices: ["script='java'", "<javascript>", "<script>", "<js>"],
        answer: "<script>",
    },
    {
        title: "Which of these symbols is used in JavaScript to insert special characters?",
        choices: ["&","+","-","%"],
        answer: "&",
    }
]