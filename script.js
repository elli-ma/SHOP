// Получаем ссылку на кнопку "Купить"
const buyButton = document.getElementById("Buy");

// Получаем ссылку на блок формы
const buyForm = document.getElementById("buyForm");

// Получаем ссылки на кнопки внутри формы
const submitButton = document.getElementById("submitBtn");
const closeButton = document.getElementById("closeBtn");
const Body = document.querySelector("body");

// Обработчик клика на кнопку "Купить"
buyButton.addEventListener("click", function () {
  // Показываем блок формы
  buyForm.style.display = "block";
  Body.style.overflow = "hidden"
});

// Обработчик клика на кнопку "Купить" внутри формы
submitButton.addEventListener("click", function () {
  // Выполняем логику покупки товара
  // ...

  // Показываем сообщение о покупке (например, через alert)
  alert("Товар успешно куплен!");

  // Скрываем блок формы
  buyForm.style.display = "none";
  Body.style.overflow = "visible"
});

// Обработчик клика на кнопку "Закрыть" внутри формы
closeButton.addEventListener("click", function () {
  // Скрываем блок формы
  buyForm.style.display = "none";
  Body.style.overflow = "visible"
});







// Получаем ссылку на кнопку переключения темы
const themeToggle = document.getElementById("themeToggle");

// Получаем ссылку на элемент body
const wrapper = document.getElementById("wrapper");
const menu = document.getElementById("menu");
const link = document.querySelectorAll(".menu__link");


// Переменная для отслеживания текущей темы
let isDarkMode = false;

// Обработчик клика на кнопку переключения темы
themeToggle.addEventListener("click", function () {
  // Переключаем флаг текущей темы
  isDarkMode = !isDarkMode;

  // Применяем соответствующую тему
  if (isDarkMode) {
    // Темная тема
    wrapper.style.backgroundColor = "#2b2b2b";
    wrapper.style.color = "white";
    menu.style.backgroundColor = "rgba(43, 43, 43, 0.95)";
    themeToggle.style.backgroundColor = "white";
    // menu.style.color = "white";
    link.forEach(function (link) {
      // Здесь вы можете применить нужные стили к каждой ссылке при нажатии на кнопку
      link.style.color = "white";

    });

  } else {
    // Светлая тема
    wrapper.style.backgroundColor = "white";
    wrapper.style.color = "black";
    menu.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    menu.style.color = "black";
    themeToggle.style.backgroundColor = "#828282";

    link.forEach(function (link) {
      // Здесь вы можете применить нужные стили к каждой ссылке при нажатии на кнопку
      link.style.color = "black"; // Пример изменения цвета ссылки
    });
    // Примените остальные стили для светлой темы
  }
});