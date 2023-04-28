const digits = document.querySelectorAll(".digit");
const secondPage = document.getElementsByClassName("two")[0];
const reset = document.getElementsByClassName("reset")[0];
const equal = document.getElementsByClassName("equal")[0];
const deleteButton = document.getElementsByClassName("delete")[0];
const body = document.querySelector("body");
const screen = document.getElementById("screen");
const keyboard = document.getElementsByClassName("numbers")[0];
const calc = document.getElementsByClassName("calc")[0];
const toggle = document.getElementById("check");
const theme = document.getElementsByClassName("theme")[0];
const firstPage = document.getElementsByClassName("one")[0];
const thirdPage = document.getElementsByClassName("three")[0];
const hover = document.querySelectorAll(".hover");
secondPage.addEventListener("click", changeThemeTwo);
thirdPage.addEventListener("click", changeThemeThree);
firstPage.addEventListener("click", changeThemeOne);
const circle = document.querySelector(".circle");
function changeThemeTwo() {
  for (let i = 0; i < digits.length; i++) {
    digits[i].style.background = "#E5E4E1";
    deleteButton.style.color = "#ffffff";
    deleteButton.style.background = "#62B5BC";
    reset.style.color = "#FFFFFF";
    equal.style.color = "#FFFFFF";
    digits[i].style.color = "#36362C";
    reset.style.background = "#378187";
    equal.style.background = "#C85402";
  }
  digits.forEach((digit) => {
    digit.addEventListener("mouseenter", () => {
      digit.style.background = "#A79E91";
    });

    digit.addEventListener("mouseleave", () => {
      digit.style.background = "#E5E4E1";
    });
  });

  hover.forEach((hoverone) => {
    hoverone.addEventListener("mouseenter", () => {
      hoverone.style.background = "#62B5BC";
    });
    hoverone.addEventListener("mouseleave", () => {
      hoverone.style.background = "#378187";
    });
  });
  equal.addEventListener("mouseenter", () => {
    equal.style.background = "#FF8A38";
  });
  equal.addEventListener("mouseleave", () => {
    equal.style.background = "#C85402";
  });
  screen.style.color = "#36362C";
  secondPage.style.color = "#36362C";
  firstPage.style.color = "#36362C";
  thirdPage.style.color = "#36362C";
  body.style.background = "#F2F2F2";
  calc.style.color = "#36362C";
  screen.style.background = "#EEEEEE";
  keyboard.style.background = "#D2CDCD";
  toggle.style.background = "#D2CDCD";
  theme.style.color = "#36362C";
  circle.style.left = "27px";

  checkboxBefore.setProperty("left", "30px");
}
function changeThemeThree() {
  for (let i = 0; i < digits.length; i++) {
    digits[i].style.background = "#331C4D";
    digits[i].style.color = "#FFE53D";
    deleteButton.style.background = "#56077C";
    deleteButton.style.color = "#FFFFFF";
    reset.style.background = "#56077C";
    reset.style.color = "#FFFFFF";
    equal.style.background = "#00DED0";
  }
  digits.forEach((digit) => {
    digit.addEventListener("mouseenter", () => {
      digit.style.background = "#6C34AC";
    });

    digit.addEventListener("mouseleave", () => {
      digit.style.background = "#331C4D";
    });
  });
  hover.forEach((hoverone) => {
    hoverone.addEventListener("mouseenter", () => {
      hoverone.style.background = "#8631AF";
    });
    hoverone.addEventListener("mouseleave", () => {
      hoverone.style.background = "#331C4D";
    });
  });
  equal.addEventListener("mouseenter", () => {
    equal.style.background = "#93FFF8";
  });
  equal.addEventListener("mouseleave", () => {
    equal.style.background = "#00DED0";
  });
  secondPage.style.color = "#FFE53D";
  screen.style.color = "#FFE53D";
  firstPage.style.color = "#FFE53D";
  thirdPage.style.color = "#FFE53D";
  body.style.background = "#17062A";
  calc.style.color = "#FFE53D";
  screen.style.background = "#1E0936";
  keyboard.style.background = "#1E0936";
  toggle.style.background = "##1E0936";
  theme.style.color = "#FFE53D";
  circle.style.left = "52px";
}
function changeThemeOne() {
  for (let i = 0; i < digits.length; i++) {
    digits[i].style.background = "#EAE3DC";
    digits[i].style.color = "#434A59";
    deleteButton.style.background = "#647198";
    deleteButton.style.color = "#FFFFFF";
    reset.style.background = "#647198";
    reset.style.color = "#FFFFFF";
    equal.style.background = "#D03F2F";
  }
  digits.forEach((digit) => {
    digit.addEventListener("mouseenter", () => {
      digit.style.background = "#FFFFFE";
    });

    digit.addEventListener("mouseleave", () => {
      digit.style.background = "#EAE3DC";
    });
  });
  hover.forEach((hoverone) => {
    hoverone.addEventListener("mouseenter", () => {
      hoverone.style.background = "#A2B2E1";
    });
    hoverone.addEventListener("mouseleave", () => {
      hoverone.style.background = "#647198";
    });
  });
  equal.addEventListener("mouseenter", () => {
    equal.style.background = "#F96B5B";
  });
  equal.addEventListener("mouseleave", () => {
    equal.style.background = "#D03F2F";
  });
  secondPage.style.color = "#FFFFFF";
  screen.style.color = "#FFFFFF";
  firstPage.style.color = "#FFFFFF";
  thirdPage.style.color = "#FFFFFF";
  body.style.background = "#3A4663";
  calc.style.color = "#FFFFFF";
  screen.style.background = "#242D44";
  keyboard.style.background = "#242D44";
  toggle.style.background = "#242D44";
  theme.style.color = "#FFFFFF";
  circle.style.left = "0px";
}

digits.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", function () {
  console.log(screen.value);
  if (screen.value != "") {
    let result = eval(screen.value);
    let roundedResult = Math.floor(result * 100) / 100;
    screen.value = Number(roundedResult.toFixed(2));
  }
});
deleteButton.addEventListener("click", function () {
  screen.value = "";
});
