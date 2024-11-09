'use strict';

const categoryList = document.querySelector('#categories');
const categoryItem = document.querySelectorAll('.item');
console.log(`Namber of categories: ${categoryItem.length}`);
categoryItem.forEach(item => {
  const titleName = item.querySelector('h2');
  titleName.classList.add('category-title');

  const lengthCategory = item.querySelectorAll('li');
  lengthCategory.forEach(li => li.classList.add('category-item'));
  console.log(`Category: ${titleName.textContent}`);
  console.log(`Elements: ${lengthCategory.length}`);
});
