var slugify = require('slugify');

const title1 = slugify("hello world");
const title2 = slugify("hello world","+");

console.log(`title 1 : ${title1}`);
console.log(`title 2 : ${title2}`);