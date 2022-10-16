/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var domain = [".es", ".com", ".cat", ".net"];
  let excuse =
    getExcuseDomain(pronoun) +
    getExcuseDomain(adj) +
    getExcuseDomain(noun) +
    getExcuseDomain(domain);

  document.querySelector("#excuse").innerHTML = excuse;
  function getExcuseDomain(array) {
    let position = getRandomInt(array.length);
    return array[position];
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
};
