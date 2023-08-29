Date.prototype.getWeek = function () {
  var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
};



const themeToggle = document.getElementById("themeToggle");
const wrapper = document.getElementById("wrapper");
const menu = document.getElementById("menu");
const link = document.querySelectorAll(".menu__link");
let isDarkMode = false;

themeToggle.addEventListener("click", function () {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    wrapper.style.backgroundColor = "#2b2b2b";
    wrapper.style.color = "white";
    menu.style.backgroundColor = "rgba(43, 43, 43, 0.95)";
    themeToggle.style.backgroundImage = "url(img/sun.svg)";
    link.forEach(function (link) {
      link.style.color = "white";
    });

  } else {
    wrapper.style.backgroundColor = "white";
    wrapper.style.color = "black";
    menu.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    menu.style.color = "black";
    themeToggle.style.backgroundImage = "url(img/moon.svg)";
    link.forEach(function (link) {
      link.style.color = "black";
    });
  }
});


function getDayInfo(dateString) {
  const dateParts = dateString.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);
  const week = date.getWeek() % 4 + 1
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat('ru-RU', options);
  let [a, b] = formatter.format(date).split(',')
  return [a, `, ${week} неделя`, b].join("")
}


function productRender() {
  let e = document.getElementById("categories")
  let categories = DATA

  for (categoryId in categories) {
    let category = categories[categoryId]

    const products = category.products.map(product => {
      return `<article class="product-card">
        <img src="${product.url}" alt="${product.name}" class="product-card__image">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__date"><span class="product-card__date-value">${getDayInfo(product.date)}</span></p>
        <div class="product-card_block">
          <p class="product-card__price">${product.price}</p>
          <button class="product-card__button" id="Buy">Купить</button>
        </div>
       </article>`
    }).join("")

    let res = `<section class="category" id="${categoryId}">
      <h2 class="category__title">${category.title}</h2>
      <div class="category__card">${products}</div>
    </section>`

    e.insertAdjacentHTML('beforeend', res);

  }

}
productRender()



const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();


const buyButtons = document.querySelectorAll(".product-card__button");
const buyForm = document.getElementById("buyForm");
const submitButton = document.getElementById("submitBtn");
const closeButton = document.getElementById("closeBtn");
const Body = document.querySelector("body");

buyButtons.forEach(buyButton => {
  buyButton.addEventListener("click", function () {
    buyForm.style.display = "block";
    Body.style.overflow = "hidden"
  });
})
submitButton.addEventListener("click", function () {
  alert("Товар успешно куплен!");
  buyForm.style.display = "none";
  Body.style.overflow = "visible"
});
closeButton.addEventListener("click", function () {
  buyForm.style.display = "none";
  Body.style.overflow = "visible"
});