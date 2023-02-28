
//Напиши скрипт створення і очищення колекції елементів. 
//Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число. 
//Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const inputEl = document.querySelector('#controls>input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const elemToAdd = []
  for (let i = 0; i < amount; i ++ ) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`
    divEl.style.height = `${30 + 10 * i}px`
    divEl.style.background = getRandomHexColor()
    elemToAdd.push(divEl)
  }
  return elemToAdd
}

const destroyBoxes = () => {
  boxesEl.innerHTML=''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputEl.value)
	boxes.append(...boxesToAdd)
})

btnDestroy.addEventListener('click', event => {
  destroyBoxes()
}
)


