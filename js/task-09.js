// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
//по кліку на button.change - color і виводить значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const color = document.querySelector('.color')

buttonEl.addEventListener('click', event => {

  let colorChange = getRandomHexColor()
  bodyEl.style.backgroundColor = colorChange
  color.textContent=colorChange
})