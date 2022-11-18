/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  function generateExcuse() {
    const pronoun = ["A", "The"];
    const subject = [
      "jogger",
      "racoon",
      "dog",
      "driver",
      "comedian",
      "pincone"
    ];
    const action = [
      "took my",
      "threw my",
      "yelled at my",
      "stole my",
      "bit my"
    ];

    const possetion = ["homework", "toe", "car", "shoe"];
    const where = ["on the street", "in my house", "in my driveway"];

    const pronounIndex = Math.floor(Math.random() * pronoun.length);
    const subjectIndex = Math.floor(Math.random() * subject.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const possetionIndex = Math.floor(Math.random() * possetion.length);
    const whereIndex = Math.floor(Math.random() * where.length);

    return (
      pronoun[pronounIndex] +
      " " +
      subject[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      possetion[possetionIndex] +
      " " +
      where[whereIndex]
    );
  }
  const excuse = document.querySelector(".js-excuse");
  excuse.innerHTML = generateExcuse();
};
