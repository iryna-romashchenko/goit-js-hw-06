
//1//
const list = document.querySelector('#categories');
const listEl = document.querySelectorAll('.item');
const listElTitle = document.querySelectorAll('h2');

console.log(`Number of categories: ${listEl.length}`);

console.log(`Category: ${listElTitle[0].textContent}`);
console.log(`Elements: ${listEl[0].querySelectorAll('li').length}`);

console.log(`Category: ${listElTitle[1].textContent}`);
console.log(`Elements: ${listEl[1].querySelectorAll('li').length}`);

console.log(`Category: ${listElTitle[2].textContent}`);
console.log(`Elements: ${listEl[2].querySelectorAll('li').length}`);

//2//
// let categories = '';
// let elementsSum = 0;
// const list = document.querySelector('#categories').children.length;
// const listEl = document.querySelectorAll('li.item');
// console.log(`Number of categories: ${list}`);

// listEl.forEach(element => {
//     categories = element.firstElementChild.textContent;
//     elementsSum = element.querySelectorAll('li').length;
//     const category = `Category: ${categories}`;
//     const elements = `Elements: ${elementsSum}`;
//     console.log(category);
//     console.log(elements);
// });