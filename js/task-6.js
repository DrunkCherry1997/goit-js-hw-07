// Функція для генерації випадкового кольору в форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримання посилань на елементи DOM
const input = document.querySelector('input'); // Поле вводу
const createButton = document.querySelector('[data-create]'); // Кнопка "Create"
const destroyButton = document.querySelector('[data-destroy]'); // Кнопка "Destroy"
const boxesContainer = document.querySelector('#boxes'); // Контейнер для блоків

// Додавання обробників подій до кнопок
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

// Функція для створення блоків
function createBoxes() {
  // Отримання значення з поля вводу
  const amount = input.value;

  // Перевірка на валідність введеного значення
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  // Виклик функції для очищення колекції перед створенням нових блоків
  destroyBoxes();

  let size = 30;

  // Цикл для створення блоків та їхнього додавання в контейнер
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10; // Збільшення розміру для наступного блоку
  }

  // Очищення поля вводу після створення блоків
  input.value = '';
}

// Функція для очищення колекції блоків
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
