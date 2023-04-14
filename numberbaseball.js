let count = 0;
let strike = 0;
let ball = 0;
let max = 0;

const numberlist = [];
const inputNumberBox = document.querySelector(".numberInput");
const orderText = document.querySelector(".orderText");
const numberText = document.querySelector(".numberText");
const resultText = document.querySelector(".resultText");
const answerText = document.getElementById("answer-box");
const worringText = document.getElementById("worring");

let answer = [];
function createAnswer(n) {
  answer = [];
  let answerTmp = [];
  while (answerTmp.length < n) {
    const digit = getRandomInt(1, 9);
    if (!answerTmp.includes(digit)) {
      answerTmp.push(digit);
    }
  }
  answer = answerTmp;
  answerText.innerText = answer;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function checkInput(inputNumber) {
  worringText.innerText = "같은 숫자를 입력하지 마시오.";
  let inputList = inputNumber.split("");
  for (let i = 0; i < inputList.length; i++) {
    if (inputList.indexOf(inputList[i]) !== i) {
      worringText.innerText = "같은 숫자 입력";

      return false;
    }
  }
  return true;
}

function inputMaxThree() {
  resultClear();
  alert("최대 3자리 숫자를 입력하세요.");
  max = 3;
  inputNumberBox.maxLength = 3;
  createAnswer(3);
}
function inputMaxFour() {
  resultClear();
  alert("최대 4자리 숫자를 입력하세요.");
  max = 4;
  inputNumberBox.maxLength = 4;
  createAnswer(4);
}
function inputMaxFive() {
  resultClear();
  alert("최대 5자리 숫자를 입력하세요.");
  max = 5;
  inputNumberBox.maxLength = 5;
  createAnswer(5);
}

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function inputNumberPush() {
  const inputNumber = document.querySelector(".numberInput").value;
  let numberList = inputNumber.toString();
  if (checkInput(numberList)) {
    numberBaseballGame(numberList);
    count++;
    orderText.innerText += count + "\n";
    numberText.innerText += numberList + "\n";
    resultText.innerText += `S:${strike} B:${ball}\n`;
    inputNumberBox.value = "";
    if (strike == max) {
      alert("성공");
    }
  }
}

function resultClear() {
  orderText.innerText = "";
  numberText.innerText = "";
  resultText.innerText = "";
  count = 0;
}

function numberBaseballGame(numList) {
  strike = 0;
  ball = 0;
  for (let i = 0; i < answer.length; i++) {
    const index = numList.indexOf(answer[i]);
    if (index > -1) {
      if (index === i) {
        strike += 1;
      } else {
        ball += 1;
      }
    }
  }
}

function resetGame() {
  resultClear();
}
