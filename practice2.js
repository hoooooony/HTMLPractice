const pageText = "자기소개 페이지";
const text = document.getElementById("page");
const togleSwitch = document.getElementById("togle_switch");
const myname = document.getElementById("name");
const age = document.getElementById("age");
const studentId = document.getElementById("student_id");
const phoneNumber = document.getElementById("phone_number");
const hobby = document.getElementById("hobby");
const interets = document.getElementById("interests");
const privateDatas = document.querySelectorAll(".private");

text.innerText = pageText;
myname.innerText = "이름:   최정훈";
age.innerText = "나이:    25";
studentId.innerText = "학번:    2019136134";
phoneNumber.innerText = "전화번호:    010-4080-3160";
hobby.innerText = "취미:   기타";
interets.innerText = "관심있는 분야:   프론트엔드";

function toggle() {
  if (togleSwitch.value == "개인정보 숨기기") {
    privateDatas.forEach((privatedata) => {
      privatedata.style.display = "none";
    });
    togleSwitch.value = "개인정보 보기";
  } else {
    privateDatas.forEach((privatedata) => {
      privatedata.style.display = "block";
    });
    togleSwitch.value = "개인정보 숨기기";
  }
}

function show() {}
