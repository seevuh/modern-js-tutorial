"use strict";

// Find all occurrences of the substring
let str = `As sly as a fox, as strong as an ox`;
let target = `as`;

// implementation
let pos = 0;
while (true) {
  pos = str.indexOf(target, pos);
  if (pos == -1) break;
  console.log(pos);
  pos++;
}

// same algorithm - shorter
pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}