let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");

let formChat1 = document.querySelector("#chatForm1");
let formChat2 = document.querySelector("#chatForm2");

let textInput1 = document.querySelector("#textInput1");
let textInput2 = document.querySelector("#textInput2");

let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

let time = document.querySelector("#time");

let arr = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  card1.innerHTML +=
    "  <div style='margin-left:15rem;'><img style='width: 50px; height: 50px; border-radius: 50%' src='profile.png' > You: " +
    "<span style=' background: black; color: white; padding:10px;  border-radius: 25px 25px 25px 0px; display: flex; flex-wrap: wrap;'>" +
    textInput1.value +
    "</span>" +
    "</div>" +
    "<br>";

  card2.innerHTML +=
    "<img style='width:50px; height: 50px; border-radius: 50%' src='profile.png'> Toshmat: " +
    "<span style=' background: black; color: white; padding:10px; border-radius: 25px 25px 25px 0px;  display: flex; flex-wrap: wrap;'>" +
    textInput1.value +
    "</span>" +
    "<br>";

  formChat1.reset();
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  card2.innerHTML +=
    "  <div style='margin-left:15rem;'><img style='width: 50px; height: 50px; border-radius: 50%' src='profile2.jpeg' > You: " +
    "<span style=' background: black; width:auto; color: white; padding:10px; border-radius: 25px 25px 25px 0px; display: flex; flex-wrap: wrap;'>" +
    textInput2.value +
    "</span>" +
    "</div>" +
    "<br>";

  card1.innerHTML +=
    "<img style='width:50px; height: 50px; border-radius: 50%' src='profile2.jpeg'> Eshmat: " +
    "<span style=' background: black; color: white; padding:10px; border-radius: 25px 25px 25px 0px; display: flex; flex-wrap: wrap;'>" +
    textInput2.value +
    "</span>" +
    "<br>";
  formChat2.reset();
});


