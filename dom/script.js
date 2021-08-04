//

let form = document.getElementsByTagName("form");
let p = document.getElementById("time");
console.log(form[0]);

form[0].addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(new Date().toLocaleString("en-US", { hour12: false }));

  //   write an algoritm that checks if current matches the alarm time and play a sound
});
function timer2() {
  p.innerText = new Date().toLocaleString("en-US", { hour12: false });
}
let timer = setInterval(timer2, 1000);

setTimeout(() => {
  console.log("after 4 seconds");
  //   let audio = new Audio("https://www.w3schools.com/html/horse.ogg");
  //   audio.play();
  //   clearInterval(timer);
}, 4000);

// Alarm clock
// calculate difference between times
