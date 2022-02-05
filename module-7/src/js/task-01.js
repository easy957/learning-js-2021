const categories = document.querySelectorAll('.item');

console.log(`В списке ${categories.length} категорий`);

categories.forEach(category => {
  console.log(`Категория: ${category.firstElementChild.innerText}`);
  console.log(`Количество элементов: ${category.querySelectorAll('li').length}`);
})