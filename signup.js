const $emailcheckbox = document.getElementById("email-check");
const $pwCheckBox = document.getElementById("pw-check-box");
const $studentId = document.getElementById("student-number");
const $maiorSelect = document.getElementById("maior");
const $studentNumberCheck = document.getElementById("student-number-check");

let email =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function emailCheck() {
  const emailInput = document.getElementById("id");
  if (emailInput.value.match(email)) {
    $emailcheckbox.innerText = "올바른 이메일 입력";
    $emailcheckbox.style.color = "black";
  } else {
    $emailcheckbox.innerText = "틀린 이메일 형식";
    $emailcheckbox.style.color = "red";
  }
}

function pwCheck() {
  const pwInput = document.getElementById("pw");
  const pwCheckInput = document.getElementById("pw-check");
  console.log(pwInput.value, pwCheckInput.value);
  if (pwInput.value === pwCheckInput.value) {
    $pwCheckBox.innerText = "동일 비밀번호 입력";
    $pwCheckBox.style.color = "black";
  } else {
    $pwCheckBox.innerText = "다른 비밀번호 입력";
    $pwCheckBox.style.color = "red";
  }
}

function selectOption() {
  let studentIdText = $studentId.value.toString();
  if (checkStudentId(studentIdText)) {
    let maiorNumber = studentIdText.substr(5, 2);
    switch (maiorNumber) {
      case "20":
        $maiorSelect.value = "1";
        break;
      case "80":
        $maiorSelect.value = "2";
        break;
      case "35":
      case "36":
        console.log(maiorNumber);
        $maiorSelect.value = "3";
        break;
      case "40":
        $maiorSelect.value = "4";
        break;
      case "85":
        $maiorSelect.value = "5";
        break;
      case "51":
        $maiorSelect.value = "6";
        break;
      case "74":
        $maiorSelect.value = "7";
        break;
      case "61":
        $maiorSelect.value = "8";
        break;
      case "72":
        $maiorSelect.value = "9";
        break;
      default:
        $maiorSelect.value = "0";
    }
  }
}

function checkStudentId(studentIdText) {
  if (studentIdText.length != 10) {
    $studentNumberCheck.innerText = "올바르지 못한 형식";
    return false;
  } else {
    $studentNumberCheck.innerText = "올바른 형식";
    return true;
  }
}

function changePhoneNumber() {
  const $PhoneNumber = document.getElementById("phone-number");
  let check = /\d/;
  const $PhoneNumberCheck = document.getElementById("Phone-number-check");
  if ($PhoneNumber.value.match(check)) {
    $PhoneNumberCheck.innerText = "올바른 형식";
    $PhoneNumberCheck.style.color = "black";
    if ($PhoneNumber.value.substr(0, 3) == "010") {
      $PhoneNumber.value = `${$PhoneNumber.value.substr(
        0,
        3
      )} - ${$PhoneNumber.value.substr(3, 4)} - ${$PhoneNumber.value.substr(
        7,
        4
      )}`;
    } else if ($PhoneNumber.value.substr(0, 2) == "02") {
      $PhoneNumber.value = `${$PhoneNumber.value.substr(
        0,
        2
      )} - ${$PhoneNumber.value.substr(2, 4)} - ${$PhoneNumber.value.substr(
        6,
        4
      )}`;
    } else {
      $PhoneNumber.value = `${$PhoneNumber.value.substr(
        0,
        3
      )} - ${$PhoneNumber.value.substr(3, 3)} - ${$PhoneNumber.value.substr(
        6,
        4
      )}`;
    }
  } else {
    $PhoneNumberCheck.innerText = "잘못된 형식 숫자로 입력하시오.";
    $PhoneNumberCheck.style.color = "red";
  }
}
