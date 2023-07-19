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

// faq

const accordions = document.querySelectorAll(".accordion");

Array.from(accordions).forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("accordion--active");

    const panel = accordion.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// lang

const allLang = ["ru", "en"];
let currentLang = "en";

const businessTexts = {
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
    ru: ["Главная", "Бизнес"],
    en: ["Home", "Business"],
  },
  "tools-title": {
    ru: ["ТОРГОВЫЕ", "ИНСТРУМЕНТЫ"],
    en: ["MERCHANT", "TOOLS"],
  },
  "tools-text": {
    ru: [
      "CoinPayments предлагает различные способы приема криптоплатежей для ваших клиентов.",
      "Начните настраивать свою учетную запись CoinPayments и принимать криптовалютные платежи, следуя нашей пошаговой инструкции.",
    ],
    en: [
      "CoinPayments offers a variety of ways to accept crypto payments from your customers.",
      "Get started setting up your CoinPayments account and accepting crypto payments by following along in our Step-by-Step Integration Guide.",
    ],
  },
  "tools-btn": {
    ru: ["Отправить запрос"],
    en: ["Send a request"],
  },
  "shopping-card-1": {
    ru: [
      "Магазин плагинов",
      "Наши готовые плагины для всех основных платформ электронной коммерции, настройте свой магазин с помощью CoinPayments за считанные минуты",
      "Узнать больше",
    ],
    en: [
      "Shopping Cart Plugins",
      "Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes",
      "Find out more",
    ],
  },
  "shopping-card-2": {
    ru: [
      "Магазин плагинов",
      "Наши готовые плагины для всех основных платформ электронной коммерции, настройте свой магазин с помощью CoinPayments за считанные минуты",
      "Узнать больше",
    ],
    en: [
      "Shopping Cart Plugins",
      "Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes",
      "Find out more",
    ],
  },
  "shopping-card-3": {
    ru: [
      "Магазин плагинов",
      "Наши готовые плагины для всех основных платформ электронной коммерции, настройте свой магазин с помощью CoinPayments за считанные минуты",
      "Узнать больше",
    ],
    en: [
      "Shopping Cart Plugins",
      "Our prebuilt plugins for all the major ecommerce platforms will get your store set up with CoinPayments in minutes",
      "Find out more",
    ],
  },
  "questions-title": {
    ru: ["Часто задаваемые вопросы"],
    en: ["Frequently Asked Questions"],
  },
  "questions-1": {
    ru: ["Как подключиться к CryptoTransfer?"],
    en: ["How do I connect to CryptoTransfer?"],
  },
  "answer-1": {
    ru: [
      "Перейдите на",
      "сайт",
      "Зарегистрируйтесь",
      "Для активации учетной записи перейдите в раздел «Контакты» (введите свои данные и нажмите «Отправить запрос»);",
      "После c этого с вами свяжется наш менеджер мы поможем вам ознакомиться с функционалом",
      "CryptoTransfer",
      "и активицией вашего аккаунта для дальнейшей интеграции;",
      "Вы будете интегрировать платежную систему в соответствии с документацией, содержащейся в вашем аккаунте.",
      "(Меню/Настройки/Управление/Руководство по интеграции платежей);",
      "После того, как интеграция будет завершена и платежи будут протестированы, мы установим комиссию за обработку депозита клиента продавца, корректируя ее в соответствии с оборотом продавца.",
    ],
    en: [
      "Go to",
      "site",
      "Register",
      "To activate your account, go to the Contact Us block (enter your details and click on send request);",
      "After contacting our manager, we will help you get acquainted with",
      "CryptoTransfer",
      "functionality and activate your account for further integration;",
      "You will integrate the payment system according to the documentation contained in your merchant account",
      "menu Settings/Merchant Management/Payment Integration Guide);",
      "Once the integration is complete and the payments have been tested, we will set the processing fee on the merchant’s customers deposit, adjusting it according to the merchant`s turnover.",
    ],
  },
  "questions-2": {
    ru: ["Как работает CryptoTransfer?"],
    en: ["How does CryptoTransfer work?"],
  },
  "answer-2": {
    ru: [
      "Интеграция платежной системы и платформы мерчанта осуществляется через API.",
      "(Меню/Настройки/Управление/Руководство по подключению платежей).",
      "Депозит средств:",
      "При внесении средств клиент запрашивает платежную форму;",
      "Платежная форма генерируется с уникальным адресом кошелька для оплаты. По умолчанию сумма, указанная в платежной форме с фиксированной суммой, включает сетевую комиссию для оплаты транзакций в хранилище мерчанта или хедж-фонде. При желании для некоторых валют сетевая комиссия может быть переключена на сторону продавца",
      "(Меню/Настройки/Общие настройки);",
      "При оплате средства клиента переводятся на кошелек процессинговой системы, если валюта и сумма соответствуют условиям платежа, он считается успешным и отправляется в хранилище мерчанта на платформе CryptoTransfer.com или отправляется в Хедж-фонд (если функция хеджирования включена). Из хедж-фонда сумма, конвертированная в стейблкоин, отправляется в хранилище мерчанта при достижении определенной минимальной суммы в настройках мерчант-аккаунта.",
      "(Меню/Настройки/Управление).",
      "Вывод средств:",
      "Клиент мерчанта делает запрос на вывод средств в форме мерчанта;",
      "Продавец может установить лимит снятия средств для своих клиентов:",
      "если запрашивается сумма ниже лимита, сумма выводится на кошелек клиента продавца;",
      "если запрашивается сумма выше лимита, сумма не будет снята до тех пор, пока менеджер магазина не подтвердит транзакцию. Роль мерчант-менеджера добавлена ​​в настройки мерчант-аккаунта",
      "(Меню/Настройки/Управление).",
      "Для вывода средств покупателю на балансе мерчант-аккаунта должна быть ликвидность в соответствующей криптовалюте.",
      "При наличии ликвидности на балансе счета мерчанта и подтверждении суммы вывода платеж отправляется в хранилище мерчанта с вычетом комиссии сети.",
      "Для пополнения своей ликвидности и вывода средств мерчант может использовать соответствующие методы API",
      "(Меню/настройки/Управление/Инструкции по подключению платежа).",
    ],
    en: [
      "Integration of the payment system and the merchant's platform is done via the API",
      "(menu Settings/Merchant Management/Payment connection guide).",
      "Deposit of funds:",
      "When depositing funds, the customer requests a payment form;",
      "A payment form is generated with a unique wallet address for payment. By default, the amount specified in the payment form with a fixed amount includes a network fee to pay for transactions in the merchant`s storage or Hedge Fund. If desired for some currencies the network fee can be switched to the merchant side",
      "(menu Settings/General Settings);",
      "Upon payment, customer funds are transferred to the processing system wallet, if the currency and amount meet the payment conditions, it is considered successful and sent to the storage of the merchant on the CryptoTransfer.com platform or sent to the Hedge Fund (if the hedging function is enabled). From the Hedge Fund the amount converted into Stablecoin is sent to the merchant storage when a certain minimum amount is reached in the merchant account settings",
      "(Settings menu/Merchant management).",
      "Withdrawal of funds:",
      "The merchant`s customer makes a withdrawal request in the merchant`s form;",
      "The merchant can set a withdrawal limit for its customers:",
      "if an amount below the limit is requested, the amount is withdrawn to the merchant`s customer`s wallet;",
      "if an amount higher than the limit is requested, the amount will not be withdrawn until the merchant manager confirms the transaction. The merchant manager role is added to the merchant account settings",
      "(Settings menu/ Merchant Management).",
      "In order to withdraw funds to the customer, the merchant account balance must have liquidity in the appropriate cryptocurrency.",
      "If there is liquidity on the balance of the merchant`s account and the withdrawal amount is confirmed, the payment is sent to the merchant`s storage with the deduction of the network fee.",
      "To deposit its liquidity and withdraw funds, the merchant can use the relevant API methods",
      "(Settings menu/Setup merchant management/Payment connection instructions).",
    ],
  },
  "questions-3": {
    ru: ["Сколько стоит использование CryptoTransfer?"],
    en: ["How much does it cost to use CryptoTransfer?"],
  },
  "answer-3": {
    ru: [
      "За использование платежной системы взимается комиссия за депозит в размере 0,4% и выше (в зависимости от месячного оборота мерчанта).",
      "Комиссия вычитается из каждого платежа, поступающего на баланс мерчанта, и всегда оплачивается мерчантом.",
      "По умолчанию платеж клиента включает также сетевую комиссию, которая покрывает сетевую комиссию за транзакции внутри процессингового центра. (Из системного кошелька в торговое хранилище или хедж-фонд) При желании вы можете переключить сетевую комиссию на сторону мерчанта для некоторых валют",
      "(Меню настроек/Общие настройки).",
      "Вывод средств с CryptoTransfer.com не облагается какими-либо дополнительными комиссиями, взимается только сетевая комиссия за транзакцию.",
    ],
    en: [
      "There is a deposit fee of 0.4% or more for using the payment system (depending on the merchant's monthly turnover).",
      "The fee is deducted from each payment received on the merchant's balance and is always paid by the merchant.",
      "By default, the customer's payment also includes a network fee, which covers the network fee for transactions within the processing centre. (From system wallet to merchant vault or hedge fund) If you wish, you can switch the network commission to the merchant side for some currencies",
      "(Settings/General Settings menu).",
      "Withdrawals from CryptoTransfer.com are not subject to any additional fees, only the network fee per transaction is charged.",
    ],
  },
  "questions-4": {
    ru: ["Кто может подключиться к CryptoTransfer?"],
    en: ["Who can connect CryptoTransfer?"],
  },
  "answer-4": {
    ru: [
      "Платформу для криптовалютных платежей можно подключить к любому физическому или юридическому лицу, вы можете уточнить условия подключения, оставив контактную информацию в форме обратной связи на сайте",
      "CryptoTransfer.com",
    ],
    en: [
      "The platform for cryptocurrency payments can be connected to any individual or legal entity, you can specify the terms of connection with our manager leaving contact information in feedback form on website",
      "CryptoTransfer.com",
    ],
  },
  "help-title": {
    ru: ["Нужна помощь?"],
    en: ["Need Help?"],
  },
  "help-text": {
    ru: [
      "Ищете дополнительную информацию? Свяжитесь с нашей командой, чтобы получить помощь, которая вам нужна.",
    ],
    en: [
      "Looking for more information? Talk to our team to get help with anything you need.",
    ],
  },
  "help-btn": {
    ru: ["Поддержка"],
    en: ["Contact support"],
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

const btnLang = document.querySelector(".header__btn-lang");
const mobileBtnLang = document.querySelector(".mobile-menu__item-link--lang");
const logoLink = document.querySelector(".logo");
const breadcrumbsLinks = document.querySelectorAll(".breadcrumbs a");

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

updateLinks(headerLinks);
updateLinks(headerMobileLinks);

function changePageLang() {
  for (const key in businessTexts) {
    const elements = document.querySelectorAll(`[data-lang=${key}]`);

    if (elements) {
      elements.forEach((elem, index) => {
        elem.textContent = businessTexts[key][currentLang][index];
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
