"use strict";

const allUlEl = document.querySelectorAll("li.item").length;

console.log(`Number of categories: ${allUlEl}`);

const allItems = document.querySelectorAll("li.item");

allItems.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const itemLength = el.querySelectorAll("li").length;
  console.log(`Elements: ${itemLength}`);
});
