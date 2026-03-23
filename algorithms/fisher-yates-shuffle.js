"use strict";

function shuffle(array) {
  for (let i = arr.length - 1; i > 0; i--) {
    // random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));

    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
}