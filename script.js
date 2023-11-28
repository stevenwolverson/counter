const displayNo = document.querySelector("h2");
let initialNo = 0;
const btn = document.querySelectorAll("button");
const increaseBtn = document.querySelector("increase");
const decreaseBtn = document.querySelector("decrease");
const resetBtn = document.querySelector("reset");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (displayNo.innerHTML > 0 || displayNo.innerHTML === 0) {
      displayNo.style.color = "green";
    } else {
      displayNo.style.color = "red";
    }

    if (e.currentTarget.id === "increase") {
      displayNo.innerText = initialNo++;
    }

    if (e.currentTarget.id === "decrease") {
      displayNo.innerText = initialNo--;
    }

    if (e.currentTarget.id === "reset") {
      displayNo.innerText = "0";
      displayNo.style.color = "#000";
    }
  });
});
