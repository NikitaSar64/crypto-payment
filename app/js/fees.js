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

// fees

const showMoreBtn = document.querySelector(".withdrawal__btn");
const withdrawalBlock = document.querySelector(".withdrawal__content");
const withdrawalItemsHide = document.querySelectorAll(
  '.withdrawal__box-item[data-item="hide"]'
);

const withdrawalBlockMinHeight = 285 + "px";
let withdrawalBlockMaxHeight = withdrawalBlock.scrollHeight + 5 + "px";

withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight;

showMoreBtn.addEventListener("click", () => {
  setVisibleWithdrawal();
  showMoreBtn.classList.toggle("withdrawal__btn--active");
});

function setVisibleWithdrawal() {
  if (withdrawalBlock.style.maxHeight < withdrawalBlockMaxHeight) {
    withdrawalBlock.style.maxHeight = withdrawalBlockMaxHeight;
  } else {
    withdrawalBlock.style.maxHeight = withdrawalBlockMinHeight;
  }

  for (let node of withdrawalItemsHide) {
    node.classList.toggle("withdrawal__box-item--border");
    Array.from(node.children).forEach((children) =>
      children.classList.toggle("withdrawal__box-item--hide")
    );
  }
}

// lang

const allLang = ["ru", "en"];
let currentLang = "en";

const feesTexts = {
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
  breadcrumbs: {
    ru: ["Главная", "Комиссия"],
    en: ["Home", "Fees"],
  },
  transaction: {
    ru: ["ОДНА", "КОМИССИЯ ЗА ТРАНЗАКЦИЮ"],
    en: ["ONE SIMPLE", "TRANSACTION FEE"],
  },
  "transaction-text": {
    ru: [
      "Нам нравится, чтобы все было легко. Мы взимаем комиссию 0,5% за входящую криптовалюту платежи. Никаких сборов за установку, никаких ежемесячных платежей, никаких скрытых платежей.",
      "* Комиссия в размере 1% взимается с входящих токен платежей",
    ],
    en: [
      "We like to keep things easy. We charge a 0.5% fee on incoming crypto payments*. No setup fees, no monthly fees, no hidden fees. payments.",
      "* A 1% fee is charged on incoming token payments",
    ],
  },
  payments: {
    ru: ["Входящие платежи"],
    en: ["Incoming Payments"],
  },
  "payment-card-1": {
    ru: ["Баланс", "Платежи зачисляются на ваш кошелек CoinPayments", "0.5%"],
    en: [
      "To Balance",
      "Payments are deposited to your CoinPayments wallet",
      "0.5%",
    ],
  },
  "payment-card-2": {
    ru: ["Платежи пересылаются на внешний адрес", "0,5% + Комиссия сети"],
    en: ["Payments are forwarded to an external address", "0.5% + Network Fee"],
  },
  "payment-card-3": {
    ru: [
      "Ночью",
      "Платежи накапливаются и пересылаются на адрес одним ночным пакетом",
      "0,5% + Комиссия сети",
    ],
    en: [
      "Nightly",
      "Payments are accumulated and forwarded to an address in one nightly batch",
      "0.5% + Network Fee",
    ],
  },
  "payments-fees": {
    ru: ["О комиссии сети"],
    en: ["About Network Fees"],
  },
  "payments-fees-text": {
    ru: [
      "Чтобы отправить криптовалюту, вам необходимо оплатить комиссию сети майнеры криптовалюты. Сетевые сборы различаются в зависимости от того, криптовалюта, которую вы пытаетесь отправить, и насколько загружены сети являются.",
    ],
    en: [
      "In order to send cryptocurrency, you need to pay a network fee to the cryptocurrency miners. Network fees vary based on which cryptocurrency you are trying to send and how busy the networks are.",
    ],
  },
  withdrawal: {
    ru: ["Текущая комиссия за вывод/сетевая комиссия"],
    en: ["Current Withdrawal/Network Fees"],
  },
  "withdrawal-text-1": {
    ru: ["Валюта", "Комиссия"],
    en: ["Currency", "TX Fee"],
  },
  "withdrawal-text-2": {
    ru: ["Валюта", "Комиссия"],
    en: ["Currency", "TX Fee"],
  },
  "withdrawal-btn": {
    ru: ["Показать больше"],
    en: ["Show more"],
  },
  "footer-title": {
    ru: ["СВЯЗАТЬСЯ С НАМИ"],
    en: ["Contact us"],
  },
  "footer-text": {
    ru: [
      "Мы с нетерпением ждем сотрудничества с успешными владельцами компаний и участия в амбициозных проектах. Не стесняйтесь оставлять свой номер телефона или адрес электронной почты, и один из наших менеджеров незамедлительно свяжется с Вами.",
    ],
    en: [
      "We like working with cool CEOs and ambitious projects. Leave your phone number or e-mail and 1 of 4 of our managers will contact you to in detail learn about your project.",
    ],
  },
  "footer-social": {
    ru: ["Наши социальные сети"],
    en: ["Our social media"],
  },
  "footer-btn": {
    ru: ["Отправить запрос"],
    en: ["Send a request"],
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
  for (const key in feesTexts) {
    const elements = document.querySelectorAll(`[data-lang=${key}]`);

    if (elements) {
      elements.forEach((elem, index) => {
        elem.textContent = feesTexts[key][currentLang][index];
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
