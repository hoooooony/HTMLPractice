const emailcheckbox = document.getElementById("email-check");
const pwCheckBox = document.getElementById("pw-check-box");
let email =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function emailCheck() {
  const emailInput = document.getElementById("id");
  if (emailInput.value.match(email)) {
    emailcheckbox.innerText = "올바른 이메일 입력";
    emailcheckbox.style.color = "black";
  } else {
    emailcheckbox.innerText = "틀린 이메일 형식";
    emailcheckbox.style.color = "red";
  }
}

function pwCheck() {
  const pwInput = document.getElementById("pw");
  const pwCheckInput = document.getElementById("pw-check");
  console.log(pwInput.value, pwCheckInput.value);
  if (pwInput.value === pwCheckInput.value) {
    pwCheckBox.innerText = "동일 비밀번호 입력";
    pwCheckBox.style.color = "black";
  } else {
    pwCheckBox.innerText = "다른 비밀번호 입력";
    pwCheckBox.style.color = "red";
  }
}
