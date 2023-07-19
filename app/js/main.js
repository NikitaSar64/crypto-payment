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

// hero

const heroBtn = document.querySelector(".hero__btn");

heroBtn.addEventListener("click", () => {
  window.scroll({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

// comparison

const showMoreBtn = document.querySelector(".comparsion__btn");
const comparisonBlock = document.querySelector(".comparsion__content");

const comparisonBlockMinHeight = 430;
const comparisonBlockMaxHeight =
  comparisonBlock.offsetHeight + comparisonBlockMinHeight;

comparisonBlock.style.maxHeight = comparisonBlockMinHeight + "px";

showMoreBtn.addEventListener("click", () => {
  setVisibleComparsion();
  showMoreBtn.classList.toggle("comparsion__btn--active");
});

function setVisibleComparsion() {
  comparisonBlock.classList.toggle("comparsion__content--hide");

  if (!comparisonBlock.classList.contains("comparsion__content--hide")) {
    comparisonBlock.style.maxHeight = comparisonBlockMaxHeight + "px";
  } else {
    comparisonBlock.style.maxHeight = comparisonBlockMinHeight + "px";
  }

  const thirdComparisonElem = document.querySelector(
    ".comparison__item:nth-child(3)"
  ).childNodes;

  thirdComparisonElem[1].classList.toggle("comparison__item--hide");
  thirdComparisonElem[3].classList.toggle("comparison__item-content--hide");

  for (let node of thirdComparisonElem[3].childNodes) {
    node.classList?.toggle("comparison__item--hide");
  }
}

// features

const featuresBtn = document.querySelector(".features__btn");
const featuresTextItem = Array.from(
  document.querySelectorAll(".features__text")
);
const featuresBox = document.querySelector(".features__box");

let featuresBoxMaxHeight = null;
const featuresBoxMinHeight = 0;

featuresBtn.addEventListener("click", () => {
  if (!featuresBoxMaxHeight) {
    featuresBoxMaxHeight = featuresTextItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (featuresBox.classList.contains("features__box--show")) {
    featuresBox.style.maxHeight = featuresBoxMinHeight + "px";
  } else {
    featuresBox.style.maxHeight = featuresBoxMaxHeight + "px";
  }

  featuresBtn.classList.toggle("features__btn--rotate");
  featuresBox.classList.toggle("features__box--show");
});

// advantages

const advantagesBtn = document.querySelector(".advantages__item--line-5");
const advantagesBlock = document.querySelector(".advantages__more-list");
const advantagesItem = Array.from(
  document.querySelectorAll(".advantages__more-item")
);

let advantagesBlockMaxHeight = null;
const advantagesBlockMinHeight = 0;

advantagesBlock.style.maxHeight = advantagesBlockMinHeight + "px";

advantagesBtn.addEventListener("click", () => {
  if (!advantagesBlockMaxHeight) {
    advantagesBlockMaxHeight = advantagesItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (advantagesBlock.classList.contains("advantages__more-list--hide")) {
    advantagesBlock.style.maxHeight = advantagesBlockMaxHeight + "px";
  } else {
    advantagesBlock.style.maxHeight = advantagesBlockMinHeight + "px";
  }
  advantagesBlock.classList.toggle("advantages__more-list--hide");
  advantagesBtn.classList.toggle("advantages__item-more--show");
});

// additional features

const additionalBtn = document.querySelector(".whitelabel__btn");
const additionalTextItem = Array.from(
  document.querySelectorAll(".additional__item")
);
const additionalBox = document.querySelector(".additional__list");

let additionalBoxMaxHeight = null;
const additionalBoxMinHeight = 0;

additionalBtn.addEventListener("click", () => {
  if (!additionalBoxMaxHeight) {
    additionalBoxMaxHeight = additionalTextItem.reduce(
      (prev, acum) => (prev += acum.offsetHeight),
      0
    );
  }

  if (additionalBox.classList.contains("additional__list--hide")) {
    additionalBox.style.maxHeight = additionalBoxMaxHeight + "px";
  } else {
    additionalBox.style.maxHeight = additionalBoxMinHeight + "px";
  }

  additionalBox.classList.toggle("additional__list--hide");
  additionalBtn.classList.toggle("whitelabel__btn--show");
});

// fees

// slick slider

import "slick-carousel";
import $ from "jquery";

$(".features__slider").slick({
  dots: false,
  arrows: false,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: "linear",
  infinite: true,
});

// change lang

const allLang = ["ru", "en"];
let currentLang = "en";
const indexTexts = {
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
  "hero-title": {
    ru: ["КРИПТО", "ПЛАТЕЖНАЯ", "СИСТЕМА"],
    en: ["CRYPTO", "PAYMENT", "GATEWAY"],
  },
  "hero-description": {
    ru: [
      "ЛЕГКО ИНТЕГРИРУЕМОЕ РЕШЕНИЕ",
      "SaaS сервис для процессинга платежей",
      "ЛЕГКО ИНТЕГРИРУЕМОЕ РЕШЕНИЕ",
      "SaaS сервис для процессинга платежей",
    ],
    en: [
      "Easily integrated solutions",
      "Payment processing, Software as a Service (SaaS), and standalone packages",
      "Easily integrated solutions",
      "Payment processing, Software as a Service (SaaS), and standalone packages",
    ],
  },
  "hero-btn": {
    ru: ["Отправить запрос"],
    en: ["Send a request"],
  },
  "hero-text": {
    ru: [
      "Высочайший уровень технологий и безопасности в индустрии платежных сервисов.",
    ],
    en: ["Highest level of technology and security in the payment industry."],
  },
  "comparison-title": {
    ru: ["Сравнение площадок по обработке платежей:"],
    en: ["A comparison of payment processing platforms:"],
  },

  "comparison-name": {
    ru: [
      "Большое количество криптовалют",
      "Хеджирование в стейблкоин",
      "KYC / KYB",
      "Конвертер в популярные фиатные валюты",
      "Комиссии",
      "Ограничения на оплату по гео",
      "Бесплатная интеграция",
      "Управления лимитами на вывод клиентов магазина",
      "Поддержка Web3 кошельков",
      "Отслеживание статуса транзакции в реальном времени",
      "Поддержка платежей в фиатной валюте",
    ],
    en: [
      "A large number of cryptocurrencies",
      "Hedging in stablecoin",
      "KYC / KYB",
      "Converter to popular fiat currencies",
      "Commissions",
      "Restrictions on geo-payment",
      "Free integration",
      "Managing shop customer withdrawal limits",
      "Web3 Wallet support",
      "Real-time transaction status tracking",
      "Support for fiat currency payments",
    ],
  },
  "comparison-item": {
    ru: [
      "Более 30 криптовалют и возможность быстро добавить новую валюту",
      "дополнительная комиссия",
      "Защита с помощью двойной авторизации",
      "Более 40 валют",
      "от 0,4 %",
      "от 0,5 %  до 1% и более",
      "около 10-15% Банковские переводы нередко занимают 3 дня и более",
      "Вы можете получать оплату от пользователей по всему миру без ограничений",
      "Полное сопровождение и помощь при интеграции",
      "Отдельный интерфейс для управления выводами",
      "Уведомления приходят через бот в телеграме, а также на почту",
    ],
    en: [
      "Over 30 cryptocurrencies and the ability to quickly add a new currency",
      "extra fee",
      "Double authorisation protection",
      "Over 40 currencies",
      "from 0.4 %",
      "0.5% to 1% or more",
      "about 10-15% Bank transfers often take 3 days or more",
      "You can receive payments from users worldwide without restriction",
      "Full support and assistance with integration",
      "Separate interface for managing the outputs",
      "Notifications come via a bot on Telegram and also to the post office",
    ],
  },
  "comparison-btn": {
    ru: ["Показать больше"],
    en: ["Show more"],
  },
  "features-title": {
    ru: ["Функционал"],
    en: ["features"],
  },
  "features-list": {
    ru: [
      "Интеграция с нами бесплатная, для нее не требуется никаких документов и лицензий. Кроме того, вы можете забрендировать 0xprocessing под свой продукт — для клиента 0xprocessing будет выглядеть как ваше платежное решение.",
      "Ваш личный кабинет будет защищен путем двойной авторизации. Вы можете добавить нескольких менеджеров для ведения личного аккаунта.",
      "Создание счет-фактуры формируется в стандартном виде для всех мерчантов (в документе нет нашего логотипа, по желанию можно видоизменить).",
      "Нет лимитов по вводу и выводу криптовалюты за исключением внутрисетевых лимитов (мерчант может установить лимиты самостоятельно в кабинете (используемая криптовалюта отображается в фиатном эквиваленте). Также есть тестовый ввод и вывод средств для тестирования платформы. ",
      "Статус транзакции на платформе отслеживается в режиме реального времени (уведомления приходят через бот в телеграм, а так же на почту). ",
      "В системе оповещения приходят по видам транзакций: success — платеж выполнен успешно; canceled — платеж отменен (причины: оплата прошла после закрытия окна платежа, оплата не поступила); insufficient — платеж недоплачен (платеж считается недоплаченным, если время окна платежа истекло, при этом платеж исполнен не полностью, а коллбек будет содержать в себе AmountUSD и Amount, соответствующие реальной сумме поступивших средств). ",
      "Техподдержка (рус.-англ.). С заказчиком формируется чат, пошагово обсуждается интеграция.",
    ],
    en: [
      "Integration with us is free, no documents or licenses are required. In addition, you can brand CryptoTransfer to your product — for the client, CryptoTransfer will look like your payment solution.",
      "Your personal area will be protected by dual authorization. You can add several managers to maintain a personal area.",
      "Creating an invoice is formed in a standard form for all merchants (the document does not have our logo, you can modify it if you want).",
      "There are no limits on deposit and withdrawal of cryptocurrency, except for intranet limits (merchant can set limits on his own in the personal area (used cryptocurrency is displayed in fiat equivalent). There is also a test deposit and withdrawal for testing the platform.)",
      "Tracking the status of transactions in the platform in real time (notifications are sent via the bot to the telegram, as well as to the mail).",
      "In the system, notifications come by types of transactions: success — payment is executed successfully; canceled —payment is canceled (reasons: payment was made after the payment window closed, payment was not received); insufficient — payment is underpaid (payment is considered underpaid if payment window time has expired, at that payment is not executed completely, and the callback will contain AmountUSD and Amount, corresponding to the real amount of received funds).",
      "Technical support (Russian-English). Chat is formed with the customer, integration is discussed step by step.",
    ],
  },
  "features-slider-1": {
    ru: [
      "Многоканальные и мультивалютные платежи",
      "Защита от мошенничества",
      "Постоянная прозрачная отчетность",
      "Популярные валюты",
      "Полный контроль вывода средств",
      "Многоканальные и мультивалютные платежи",
      "Защита от мошенничества",
      "Постоянная прозрачная отчетность",
      "Популярные валюты",
      "Полный контроль вывода средств",
      "Многоканальные и мультивалютные платежи",
    ],
    en: [
      "Multi-channel and multi-currency payments",
      "Powerful real-time reporting",
      "Fraud management",
      "Easy Integration",
      "Multi-channel and multi-currency payments",
      "Powerful real-time reporting",
      "Fraud management",
      "Easy Integration",
      "Multi-channel and multi-currency payments",
      "Easy Integration",
      "Powerful real-time reporting",
    ],
  },
  "features-slider-2": {
    ru: [
      "Полный контроль вывода средств",
      "Постоянная прозрачная отчетность",
      "Популярные валюты",
      "Многоканальные и мультивалютные платежи",
      "Полный контроль вывода средств",
      "Постоянная прозрачная отчетность",
      "Популярные валюты",
      "Многоканальные и мультивалютные платежи",
      "Постоянная прозрачная отчетность",
    ],
    en: [
      "Multi-channel and multi-currency payments",
      "Popular currencies",
      "Constant transparent reporting",
      "Multi-channel and multi-currency payments",
      "Popular currencies",
      "Multi-channel and multi-currency payments",
      "Constant transparent reporting",
      "Multi-channel and multi-currency payments",
      "Constant transparent reporting",
    ],
  },
  "advantages-title": {
    ru: ["ПРЕИМУЩЕСТВА"],
    en: ["Advantages"],
  },
  "advantages-subtitle": {
    ru: ["Преимущества работы с нами"],
    en: ["Key benefits of working with us"],
  },
  "advantages-tree": {
    ru: [
      "Низкие комиссии",
      "Индивидуальный подход",
      "Быстрая интеграция аккаунта",
      "Личный менеджер",
      "Подробнее",
    ],
    en: [
      "Low fees",
      "Individual approach",
      "Fast account integration",
      "Personal manager",
      "Read more",
    ],
  },
  "advantages-more": {
    ru: [
      "Мы поможем избежать сотрудничества с банками.",
      "Криптопроцессинг будет самым быстрым решением. Достаточно запустить наш сервис по API, и в считанные часы у вас будет подключен платежный шлюз.",
      "Вы расширите свои возможности заработка на колебании курса криптовалют (хеджирование вас защитит от волатильности рынка).",
      "Вы обезопасите себя от взломов и замораживания средств (все ваши доходы вы можете выводить на децентрализованный кошелек, которым управляете только вы).",
      "В Вашем личном кабинете есть возможность настроить автоматический вывод средств по запросу клиента и добавить менеджеров магазина, подтверждающих вывод средств клиентов от указанной Вами суммы.",
      "Техническая поддержка (русско-английская). С заказчиком формируется чат, поэтапно обсуждается интеграция.",
    ],
    en: [
      "We will allow you to avoid cooperation with banks.",
      "Cryptoprocessing will be the fastest solution. Enough launch our API service, and in a matter of hours you will have payment gateway connected.",
      "You will expand your opportunities to earn money on exchange rate fluctuations cryptocurrencies (hedging will protect you from market volatility).",
      "You will protect yourself from hacks and freezing of funds (all your you can withdraw income to a decentralized wallet, which only you manage).",
      "In your personal account, you can set up automatic withdrawal of funds at the request of the client and add store managers confirming the withdrawal of customer funds from the amount you specified.",
    ],
  },
  "advantages-text": {
    ru: [
      "Большое количество криптовалют",
      "с возможностью добавлять новые (",
      "по желанию мерчанта",
      "). Кроме того, мерчант может настроить любой из представленных стейбл-коинов.",
      "Поддерживаемые криптовалюты:",
    ],
    en: [
      "A large number of cryptocurrencies",
      "with the ability to add new ones (",
      "at the request of the merchant",
      "). In addition, the merchant can set up any of the stablecoins presented.",
      "Supported cryptocurrencies:",
    ],
  },
  "automated-title": {
    ru: ["Автоматическое хеджирование"],
    en: ["Automated hedging"],
  },
  "automated-other": {
    ru: ["Другие..."],
    en: ["Other..."],
  },
  "automated-text": {
    ru: [
      "Оно позволяет принимать любую криптовалюту от пользователя и конвертировать ее в stable coin, защищая от волатильности курса.",
    ],
    en: [
      "Automated hedging allows you to accept any cryptocurrency from the user, and without losing money on volatility, convert the cryptocurrency to your balance in stabelcoin.",
    ],
  },
  "automated-content": {
    ru: [
      "Курсы обмена в реальном времени.",
      "Для клиентов мерчанта в платеже отображается курс в местной валюте (по желанию). Возможно также отображение любых курсов.",
      "Поддерживаемые валюты",
    ],
    en: [
      "Real-time exchange rates.",
      "For clients of the merchant, the rate in the local currency (optional) is displayed in the payment. Also, displaying of any exchange rates is possible.",
      "Supported currencies",
    ],
  },
  "wallets-title": {
    ru: ["Интеграция Web 3.0 кошельков "],
    en: ["Web 3.0 wallets integration"],
  },
  "wallets-content": {
    ru: [
      "Подключить",
      "Интеграция с кошельками Web3.0 позволяет вам оплачивать свой товар или услугу всего за несколько кликов. Все транзакции контролируются цифровой подписью клиента. Клиенты магазина могут оплатить выставленный счёт в два клика через самый популярный криптовалютный кошелек в мире — Metamask.",
    ],
    en: [
      "Connect",
      "Integration with Web3.0 wallets allows you to pay for your product or service in a few clicks for the user. All transactions are controlled by the customer`s digital signature. Shop customers can pay their invoice in two clicks via the world`s most popular cryptocurrency wallet — Metamask.",
    ],
  },
  "whitelabel-title": {
    ru: ["White label для клиента"],
    en: ["Whitelabel for the client"],
  },
  "whitelabel-text": {
    ru: [
      "Это уникальная возможность для любого бизнеса организовать свой собственный крипто процессинг. Наши клиенты получают криптовалютную платежную систему под своим собственным брендом 'из коробки' в течение месяца. Мы берем на себя всю поддержку, чтобы клиенты могли сосредоточиться на развитии своего бизнеса.",
    ],
    en: [
      "This is a unique opportunity for businesses to start their own digital currency payment business. Our clients receive a crypto-payment processor under their own brand out of the box within a month. We handle all support, so customers can focus on growing their business.",
    ],
  },
  "whitelabel-list": {
    ru: [
      "Ваша собственная настраиваемая форма оплаты. Платежная система размещена на вашем домене.",
      "Готовая к использованию платежная система, включая автоматическое хеджирование платежей.",
      "Быстрый выход на рынок.",
    ],
    en: [
      "Your own customisable payment form. The payment system is hosted on your domain.",
      "Ready-to-use systems for receiving and making payments, including аutomated hedging.",
      "Fast entry to the market.",
    ],
  },
  "whitelabel-btn": {
    ru: ["Дополнительные возможности"],
    en: ["Additional features"],
  },
  "whitelabel-more": {
    ru: [
      "доработки под особенности мерчанта по заявке в техподдержку;",
      "добавление новых валют, расширение возможности API;",
      "корзина (по желанию мерчанта);",
      "выгрузки в excel (например, по транзакциям пользователей (по запросу);",
      "возможность встраивать через Iframe страницу с заявками для операторов в ERP или другую систему.",
    ],
    en: [
      "customization according to the merchant's features on request to the technical support;",
      "adding new currencies, extension of API;",
      "cart (on merchant request);",
      "exports to excel (for example, by user transactions (on request));",
      "the ability to embed a page with applications for operators in an ERP or other system via an Iframe.",
    ],
  },
  "support-title": {
    ru: ["ТЕХНИЧЕСКАЯ", "ПОДДЕРЖКА"],
    en: ["TECHNICAL", "SUPPORT"],
  },
  "support-list": {
    ru: [
      "Поддержка интеграции",
      "Устранение неполадок",
      "Технические вопросы",
      "Обновления и усовершенствование",
      "Настройка и персонализация",
      "Поддержка полного цикла",
    ],
    en: [
      "Integration support",
      "Troubleshooting",
      "Technical questions",
      "Updates and upgrades",
      "Customization and personalization",
      "Full cycle support",
    ],
  },
  "integration-title": {
    ru: ["Интеграция"],
    en: ["integration"],
  },
  "integration-subtitle": {
    ru: ["Как проходит интеграция"],
    en: ["How is the integration going"],
  },
  "integration-points": {
    ru: [
      "Регистрация личного кабинета",
      "Мерчант запрашивает у техподдержки активацию магазина, присылает email, указанный при регистрации, или ID магазина (на данный момент в ручном режиме)",
      "После активации можно интегрировать API, тестировать, запускать процессинг",
    ],
    en: [
      "Personal Area registration",
      "Merchant requests the technical support to activate the store, sends an email specified during registration or store ID (at the moment in manual mode)",
      "After activation, it is possible to integrate the API, test, start processing",
    ],
  },
  "integration-btn": {
    ru: ["Попробуйте"],
    en: ["Try"],
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
const headerLinks = document.querySelectorAll(
  '.menu__item-link[data-lang="header-menu"]'
);
const headerMobileLinks = document.querySelectorAll(
  '.mobile-menu__item-link[data-lang="header-mobile-menu"]'
);
const logoLink = document.querySelector(".logo");

window.addEventListener("DOMContentLoaded", () => {
  const newLang = window.location.href.slice(-2);

  if (currentLang != newLang && (newLang == "ru" || newLang == "en")) {
    currentLang = newLang;
    changeBtnLang();
    changePageLang();
    updateSlider();
    updateLinks(headerLinks);
    updateLinks(headerMobileLinks);
    updateAnchorLinks();
  } else {
    changeBtnLang();
  }

  document.body.dataset.lang = `${currentLang}`;
});

btnLang.addEventListener("click", () => {
  changeLang();
});

mobileBtnLang.addEventListener("click", () => {
  changeLang();
});

function changePageLang() {
  for (const key in indexTexts) {
    const elements = document.querySelectorAll(`[data-lang=${key}]`);

    if (elements) {
      elements.forEach((elem, index) => {
        elem.textContent = indexTexts[key][currentLang][index];
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

function changeLang() {
  currentLang = allLang.filter((elem) => elem != currentLang);
  document.body.dataset.lang = `${currentLang}`;

  changeBtnLang();
  changePageLang();
  updateSlider();
  updateLinks(headerLinks);
  updateLinks(headerMobileLinks);
  updateAnchorLinks();
}

function changeBtnLang() {
  btnLang.textContent = allLang.filter((elem) => elem != currentLang);
  mobileBtnLang.textContent = allLang.filter((elem) => elem != currentLang);
}

function updateSlider() {
  $(".features__slider").slick("unslick");
  $(".features__slider").slick({
    dots: false,
    arrows: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: "linear",
    infinite: true,
  });
}

function updateLinks(links) {
  linkArr.forEach((linkText, index) => {
    links[index].href = linkText + `?lang=${currentLang}`;
  });
  logoLink.href = `index.html?lang=${currentLang}`;
}

function updateAnchorLinks() {
  const prevLang = allLang.filter((lang) => lang != currentLang);

  document.getElementById(
    `support?lang=${prevLang}`
  ).id = `support?lang=${currentLang}`;
  document.getElementById(
    `integration?lang=${prevLang}`
  ).id = `integration?lang=${currentLang}`;
  document.getElementById(
    `advantages?lang=${prevLang}`
  ).id = `advantages?lang=${currentLang}`;
  document.getElementById(
    `features?lang=${prevLang}`
  ).id = `features?lang=${currentLang}`;
}

updateLinks(headerLinks);
updateLinks(headerMobileLinks);
