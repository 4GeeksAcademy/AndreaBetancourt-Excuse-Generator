/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generatorExcuse(who, action, what, when) {
    // variables para generar excusas aleatorias.
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);

    return (
      who[randomWho] +
      " " +
      action[randomAction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen]
    );
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuseFinal = generatorExcuse(who, action, what, when);

  document.querySelector("#excuse").innerHTML = excuseFinal;
};
