var btn = document.getElementById("btn");
var close_btn = document.getElementById("close_btn");

var modal = document.querySelector(".modal");
btn.onclick = function (ev) {
  modal.style.display = "block";
};
close_btn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (ev) {
  if (ev.target === modal) {
    modal.style.display = "none";
  }
};
