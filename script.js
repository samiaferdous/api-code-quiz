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

// Display Questions one after the other
function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });
}

// Timer Function
 var timer = 100;
var timeCount;       

function setupTimer() {    
        timeCount = setInterval(function () {
            timer--;
            var timeReset = timeElement.textContent = "Time:" + " " + timer;
           timer = timer;
            if (timer <= 0) {         
                clearInterval(timeCount);
                  
                timeElement.textContent = timeReset;
                 
            }
        }, 1000)
    }


// Event Listener to Start the Timer
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestions();
    }

})

var i = 0;

//Check Answers and Display if Correct or Incorrect
function onclickHandler(event) {
     
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
        displayResult();
    }
    var answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        responsDiv.setAttribute("style", "color: green")
        responsDiv.textContent = "Correct";
    } else {

        responsDiv.setAttribute("style", "color: red")
        responsDiv.textContent = "Wrong";
        timer = timer - 15;
     }
    
      
     
    if (i < questions.length-1) {

      i++;

      setTimeout(function () {
      displayQuestions();
      responsDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            responsDiv.textContent = "";
            displayResult();
            clearInterval(timeCount);
          
        }, 500)
    

        divContEL.innerHTML = '';
     }

// Display User Final Score
function displayResult() {
    finishDiv.style.visibility = "visible";
    timeElement.textContent = "Time:" + " " + timer;
    var HighScores = timer;
    localStorage.getItem(HighScores)
    finalScore.textContent = "Your final score is: " + HighScores;
     localStorage.setItem("HighScores", HighScores)

}
}
// High Score Page
function renderLastItem() {
var yourScore = localStorage.getItem("HighScores");
 var yourInitial = localStorage.getItem("Initial");
 if (yourScore && yourInitial === "") {
    return
}
finishDiv.textContent = "";
var finaPageEl = document.querySelector(".last-section");
finaPageEl.style.visibility = "visible";
var initialAndScore = document.querySelector("#staticEmail");
initialAndScore.value = yourInitial + ":" + " " + yourScore;

}

// Submitting Score to Local Storage
document.addEventListener("submit", function (event) {
event.preventDefault();
var initialInput = document.querySelector("#inputInitial").value;
if (initialInput === "") {
    errMsg.setAttribute("style", "color: red")
    errMsg.textContent = "Initial input field cannot be empty"
} else {
    errMsg.textContent = "";
    localStorage.getItem(initialInput)
    localStorage.setItem("Initial", initialInput)
     renderLastItem()
}
})
//Restart Game Function
function init() {
    location.reload();
   }
   // Clear All Scores
   function clearScore() {
   initialAndScore.value = "";
   }