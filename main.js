let result = document.getElementById("result");
let hourHand = document.querySelector(".hourhand");
let minuteHand = document.querySelector(".minutehand");
let secondHand = document.querySelector(".secondhand");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hourHand.style.rotate = hour * 30 + minute / 2 + "deg";
  minuteHand.style.rotate = minute * 6 + "deg";
  secondHand.style.rotate = second * 6 + "deg";

  result.innerText = date.toLocaleTimeString();
}, 1000);
