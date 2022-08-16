
const List = document.querySelector('#categories');
const ListEl = document.querySelectorAll('.item');
const ListElTitle = document.querySelectorAll('h2');

console.log(`Number of categories: ${ListEl.length}`);
console.log(`Category: ${ListElTitle[0].textContent}`);
console.log(`Elements: ${ListEl[0].querySelectorAll('li').length}`);

console.log(`Category: ${ListElTitle[1].textContent}`);
console.log(`Elements: ${ListEl[1].querySelectorAll('li').length}`);

console.log(`Category: ${ListElTitle[2].textContent}`);
console.log(`Elements: ${ListEl[2].querySelectorAll('li').length}`);