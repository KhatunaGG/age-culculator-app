const inputs = Array.from(document.querySelectorAll("input"));
const button = document.querySelector("button");
let inputDay = document.querySelector(".input__day");
let inputMonth = document.querySelector(".input__month");
let inputYear = document.querySelector(".input__year");
let outputDay = document.querySelector(".day__number");
let outputMonth = document.querySelector(".month__number");
let outputYear = document.querySelector(".year__number");
let small = document.querySelectorAll(".small");
let label = document.querySelectorAll("label");

console.log(label);

let date = new Date();
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();

let bDay;
let bMonth;
let bYear;
let birthDay;
let birthDate;
button.addEventListener("click", (e) => {
  e.preventDefault();

  culcAge();
});

function setError() {
  if (!inputDay.value || !inputMonth.value || !inputYear.value) {
    outputYear = "";
    outputMonth = "";
    outputDay = "";
    inputs.forEach((el) => (el.style.border = "1px solid red"));
    small.forEach((el) => el.classList.remove("none"));

    label.forEach((el) => el.classList.add("error__lable"));
  }
}

function culcAge() {
  bDay = +inputDay.value;
  bMonth = +inputMonth.value;
  bYear = +inputYear.value;
  console.log(bYear);

  if (
    bDay > 0 &&
    bDay < 31 &&
    bMonth > 0 &&
    bMonth < 12 &&
    bYear > 0 &&
    bYear < currentYear
  ) {
    birthDay = `${bMonth}/${bDay}/${bYear}`;
    birthDate = new Date(birthDay);

    let year = birthDate.getFullYear();
    let month = birthDate.getMonth();
    let day = birthDate.getDate();

    if (currentDay < day) {
      outputDay.innerHTML = day + (currentDay - day);
    } else {
      outputDay.innerHTML = currentDay - day;
    }

    outputMonth.innerHTML = currentMonth - month;
    outputYear.innerHTML = currentYear - year;
  } else {
    checkInputValues();
  }
}

function checkInputValues() {
  if (bDay < 0 || bDay > 31) {
    let d = document.querySelector(".bDay");
    d.classList.remove("none");
    d.innerHTML = "Must be a valid date";
    inputDay.style.border = "1px solid red";
  } else if (bMonth < 0 || bMonth > 12) {
    let m = document.querySelector(".bMonth");
    m.classList.remove("none");
    m.innerHTML = "Must be a valid date";
    inputMonth.style.border = "1px solid red";
  } else if (bYear < 0 || bYear > currentYear) {
    let y = document.querySelector(".bYear");
    y.classList.remove("none");
    y.innerHTML = "Must be a valid date";
    inputYear.style.border = "1px solid red";
  } else {
    setError();
  }
}
