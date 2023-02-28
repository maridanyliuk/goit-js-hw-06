// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEL = document.querySelector('#ingredients');
const listItemsArray = [];
ingredients.forEach(ingredient =>{
  const liEl = document.createElement('li')
  liEl.textContent = ingredient;
  liEl.classList.add("item")
  listItemsArray.push(liEl)
})
ulEL.append(...listItemsArray)


//Чому треба робити пустий масив? Викладач цього не показував// 

