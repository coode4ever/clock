setInterval(getTime, 1000);
var hour = document.querySelector(".h");
var minute = document.querySelector(".m");
var second = document.querySelector(".s");
function getTime() {
  hour.style.transform = "rotate(" + new Date().getHours() * 30 + "deg)";
  minute.style.transform = "rotate(" + new Date().getMinutes() * 6 + "deg)";
  second.style.transform = "rotate(" + new Date().getSeconds() * 6 + "deg)";
}
