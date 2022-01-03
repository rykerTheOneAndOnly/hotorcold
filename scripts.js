var headerEl = document.getElementById("header");
var headerInner = headerEl.innerHTML;
var randNum = 1;
var firstNum = 0;
var secondNum = 0;
var firstNumReplace = 0;
var secondNumReplace = 0;

function callRand() {
    randNum = Math.floor(Math.random() * 50);

    while (randNum == 0) {
    randNum = Math.floor(Math.random() * 50);
    }

    firstNum = randNum - (Math.floor(Math.random() * 45) + 1);
    secondNum = randNum + (Math.floor(Math.random() * 45) + 1);
    firstNumReplace = headerInner.replace("firstNum", firstNum);
    secondNumReplace = firstNumReplace.replace("secondNum", secondNum);

    headerEl.innerHTML = secondNumReplace;
}

callRand();

var userInputEl = document.getElementById("userInput");
var inputStatusEl = document.getElementById("inputStatus");

function relevancyCalc(randNumParm, userInputValueParm) {
    if (randNumParm < userInputValueParm) {
        return Math.abs(randNumParm / userInputValueParm);
    }
    if (userInputValueParm < randNumParm) {
        return Math.abs(userInputValueParm / randNumParm);
    }
}

function userInputOnSubmit(event) {
    if (event.keyCode == 13) {
        var randNum = this.randNum;
        var userInputEl = this.userInputEl;
        var userInputValue = (parseInt(userInputEl.value));
        if ((relevancyCalc(randNum, userInputValue)) < 0.2) {
            inputStatusEl.innerHTML = "Freezing! Brrrr!";
        }
        if (relevancyCalc(randNum, userInputValue) >= 0.2 && (relevancyCalc(randNum, userInputValue)) < 0.4) {
            inputStatusEl.innerHTML = "It's getting chilly out";
        }
        if (relevancyCalc(randNum, userInputValue) >= 0.4 && relevancyCalc(randNum, userInputValue) < 0.6) {
            inputStatusEl.innerHTML = "Cold";
        }
        if (relevancyCalc(randNum, userInputValue) >= 0.6 && relevancyCalc(randNum, userInputValue) < 0.8) {
            inputStatusEl.innerHTML = "Warm";
        }
        if (relevancyCalc(randNum, userInputValue) >= 0.8 && relevancyCalc(randNum, userInputValue) < 1) {
            inputStatusEl.innerHTML = "Hot! Hot!";
        }
        if (relevancyCalc(randNum, userInputValue) >= 0.9 && relevancyCalc(randNum, userInputValue) < 1) {
            inputStatusEl.innerHTML = "You're melting";
        }
        if (userInputValue < firstNum || userInputValue > secondNum) {
            inputStatusEl.innerHTML = "<strong>NOT EVEN CLOSE!!!</strong>";
        }
        if (userInputValue == 0) {
            inputStatusEl.innerHTML = "<em>It will never be zero</em>";
        }
        if (userInputEl.value == "" || isNaN(userInputValue)) {
            inputStatusEl.innerHTML = "<em>Please type a </em><strong>number</strong>";
        }
        if (userInputValue == randNum) {
            inputStatusEl.innerHTML = "You got it";
            callRand();
        }
        userInputEl.value = "";
    }
}