// mobile menu

const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector(".burger-menu-overlay");
const burgerMenuClose = document.querySelector(".mobile-menu__btn-close");
const mobileBtns = document.querySelectorAll(".mobile-menu__item-link");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu--open");
  burgerMenu.style.maxHeight = "100vh";
  document.body.style.overflow = "hidden";
});

burgerMenuClose.addEventListener("click", (e) => {
  e.stopPropagation();
  burgerMenu.style.maxHeight = "0vh";
  mobileMenu.classList.remove("mobile-menu--open");
  document.body.style.overflow = "auto";
});

mobileBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    burgerMenuClose.click();
  })
);

// lang

const allLang = ["ru", "en"];
let currentLang = "en";

const contactsTexts = {
  "header-menu": {
    ru: [
      "Функционал",
      "Преимущества",
      "Тех. поддержка",
      "Интеграция",
      "Комиссия",
      "Бизнес",
      "Ставки",
      "Связаться с нами",
    ],
    en: [
      "Features",
      "Advantages",
      "Technical support",
      "Integration",
      "Fees",
      "Business",
      "Gambling",
      "Contact us",
    ],
  },
  "header-mobile-menu": {
    ru: [
      "Функционал",
      "Преимущества",
      "Тех. поддержка",
      "Интеграция",
      "Комиссия",
      "Бизнес",
      "Ставки",
      "Связаться с нами",
      "Вход",
    ],
    en: [
      "Features",
      "Advantages",
      "Technical support",
      "Integration",
      "Fees",
      "Business",
      "Gambling",
      "Contact us",
      "Sign in",
    ],
  },
  "header-btn": {
    ru: ["Вход"],
    en: ["Sign in"],
  },
  contact: {
    ru: ["СВЯЗАТЬСЯ С НАМИ"],
    en: ["Contact Us"],
  },
  breadcrumbs: {
    ru: ["Главная", "Связаться с нами"],
    en: ["Home", "Contact Us"],
  },
  "contact-text": {
    ru: [
      "Нам нравится работать с крутыми руководителями и амбициозными проектами. Оставь свой номер телефона или e-mail и 1 из 4 наших менеджеров свяжется с вами для подробно узнать о вашем проекте.",
    ],
    en: [
      "We like working with cool CEOs and ambitious projects. Leave yourphone number or e-mail and 1 of 4 of our managers will contact you to in detail learn about your project.",
    ],
  },
  "contact-email": {
    ru: [
      "Для поддержки и других вопросов",
      "По вопросам партнерства",
      "По вопросам API",
    ],
    en: [
      "For support and other queries",
      "For partnership queries",
      "For API issues",
    ],
  },
  "contact-btn": {
    ru: ["Отправить запрос"],
    en: ["Send a request"],
  },
  "contact-description": {
    ru: [
      "NOWPayments чрезвычайно легко интегрируется в существующие веб-сайты. Вы даже можете использовать наши ссылки для пожертвований для отображения в социальных сетях. Счета. Для интернет-магазинов мы предлагаем настраиваемые виджеты, кнопки и плагины для всех основных существующих платформ электронной коммерции! Принятие криптоплатежи никогда не были проще, и лучше всего то, что только проходит несколько минут между приемом биткойнов в качестве оплаты на вашем Интернет-магазин.",
      "NOWPayments может активировать кнопку «Оформить заказ с криптовалютой» в вашем интернет-магазине или кнопку «Пожертвовать криптовалюту» на вашем веб-сайте. Помимо кнопок, которые перенаправляют пользователей на наш сайт, не стесняйтесь использовать виджеты оплаты криптовалютой, где пользователь может ввести всю необходимую информацию и завершить транзакцию, не покидая ваш сайт! Наш шлюз криптовалютных платежей безопасен, и мы никоим образом не удерживаем и не храним ваши средства. Будущее за блокчейном, и использование нашего процессора криптоплатежей — лучший способ продвижения вашего онлайн-бизнеса, магазина или услуги.",
      "Однако мы не останавливаемся на предложении виджетов, кнопок и других простых формы приема биткойнов в качестве оплаты. Приглашаем всех желающих индивидуальные решения для использования нашего API, ознакомьтесь с документацией и создавать собственные платежные решения для любых целей. API простой и интуитивно понятен и идеально подходит для всех, кто хотел бы строить что-то более сложное с NOWPayments, обрабатывающим криптобиржи. Для больше информации, не стесняйтесь обращаться к нам!",
    ],
    en: [
      "NOWPayments is extremely easy to integrate into existing websites, andyou can even use our donation links to display on your social media accounts. For online stores, we offer custom widgets, buttons, and plugins for every major e-commerce platform in existence! Accepting crypto payments has never been easier, and the best thing is that only several minutes stand between accepting Bitcoin as payment at your online store.",
      "NOWPayments can power the Checkout With Crypto button at your online store, or a Donate Crypto button on your website. Besides buttons that redirect users to our website, feel free to use cryptocurrency payment widgets, where the user can input all required info and complete the transaction without ever leaving your website! Our crypto payment gateway is secure, and we don’t hold or store your funds in any way. The future is in the blockchain, and using our crypto payment processor is the best way forward for your online business, store, or service.",
      "However, we don’t stop at offering widgets, buttons, and other easy forms of accepting Bitcoin as payment. We encourage everyone who wants customized solutions to use our API, check out the documentation, and create custom payment solutions for any purpose. The API is simple and intuitive, and it’s perfect for everyone who would love to build something more complex with NOWPayments handling crypto exchanges. For more information, feel free to contact us!",
    ],
  },
  "footer-social": {
    ru: ["Наши социальные сети"],
    en: ["Our social media"],
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const newLang = window.location.href.slice(-2);

  if (currentLang != newLang && (newLang == "ru" || newLang == "en")) {
    currentLang = newLang;
    changeBtnLang();
    changePageLang();
    updateLinks(headerLinks);
    updateLinks(headerMobileLinks);
  } else {
    changeBtnLang();
  }

  document.body.dataset.lang = `${currentLang}`;
});

const btnLang = document.querySelector(".header__btn-lang");
const mobileBtnLang = document.querySelector(".mobile-menu__item-link--lang");
const logoLink = document.querySelector(".logo");
const breadcrumbsLinks = document.querySelectorAll(".breadcrumbs a");

document.body.dataset.lang = `${currentLang}`;

function changePageLang() {
  for (const key in contactsTexts) {
    const elements = document.querySelectorAll(`[data-lang=${key}]`);

    if (elements) {
      elements.forEach((elem, index) => {
        elem.textContent = contactsTexts[key][currentLang][index];
      });
    }
  }

  const inputs = document.querySelectorAll(`[data-lang=footer-input`);

  if (currentLang == "ru") {
    inputs[0].placeholder = "Имя";
    inputs[1].placeholder = "Номер телефона";
    inputs[2].placeholder = "Адрес электронной почты";
  }

  if (currentLang == "en") {
    inputs[0].placeholder = "Name";
    inputs[1].placeholder = "Phone number";
    inputs[2].placeholder = "Email adress";
  }
}

changePageLang();

const headerLinks = document.querySelectorAll(
  '.menu__item-link[data-lang="header-menu"]'
);

const headerMobileLinks = document.querySelectorAll(
  '.mobile-menu__item-link[data-lang="header-mobile-menu"]'
);

btnLang.addEventListener("click", () => {
  changeLang();
});

mobileBtnLang.addEventListener("click", () => {
  changeLang();
});

const linkArr = [
  "index.html#features",
  "index.html#advantages",
  "index.html#support",
  "index.html#integration",
  "fees.html",
  "business.html",
  "gambling.html",
  "contacts.html",
];

function changeBtnLang() {
  btnLang.textContent = allLang.filter((elem) => elem != currentLang);
  mobileBtnLang.textContent = allLang.filter((elem) => elem != currentLang);
}

function changeLang() {
  currentLang = allLang.filter((elem) => elem != currentLang);
  document.body.dataset.lang = `${currentLang}`;

  changeBtnLang();
  changePageLang();
  updateLinks(headerLinks);
  updateLinks(headerMobileLinks);
}

function updateLinks(links) {
  linkArr.forEach((linkText, index) => {
    links[index].href = linkText + `?lang=${currentLang}`;
  });
  logoLink.href = `index.html?lang=${currentLang}`;
  breadcrumbsLinks[0].href = `index.html?lang=${currentLang}`;
  breadcrumbsLinks[1].href = `contacts.html?lang=${currentLang}`;
}

updateLinks(headerLinks);
updateLinks(headerMobileLinks);
