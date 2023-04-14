const boxElement = document.querySelectorAll(".box");

function changeBackGround() {
  boxElement.style.backgroundColor = "red";
}
function showAlert() {
  alert(`캡쳐링: ${boxElement.item}`);
}
function listenerEX() {
  showAlert();
}
boxElement.addEventListener("click", listenerEX, true);
