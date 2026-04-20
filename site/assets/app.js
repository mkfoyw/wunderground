// Add more cities here. Keep one object per city with a unique id and two URLs.
const CITY_CONFIG = [
  {
    id: "chengdu",
    name: "Chengdu",
    buttonMeta: "CN / ZUUU",
    description: "中国成都 · ZUUU",
    overview: "https://www.wunderground.com/weather/cn/chengdu/ZUUU",
    hourly: "https://www.wunderground.com/hourly/cn/chengdu/ZUUU",
    history: "https://www.wunderground.com/history/daily/cn/chengdu/ZUUU",
  },
  {
    id: "chongqing",
    name: "Chongqing",
    buttonMeta: "CN / ZUCK",
    description: "中国重庆 · ZUCK",
    overview: "https://www.wunderground.com/weather/cn/chongqing/ZUCK",
    hourly: "https://www.wunderground.com/hourly/cn/chongqing/ZUCK",
    history: "https://www.wunderground.com/history/daily/cn/chongqing/ZUCK",
  },
  {
    id: "shanghai",
    name: "Shanghai",
    buttonMeta: "CN / ZSPD",
    description: "中国上海 · ZSPD",
    overview: "https://www.wunderground.com/weather/cn/shanghai/ZSPD",
    hourly: "https://www.wunderground.com/hourly/cn/shanghai/ZSPD",
    history: "https://www.wunderground.com/history/daily/cn/shanghai/ZSPD",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    buttonMeta: "JP / RJTT",
    description: "日本东京 · RJTT",
    overview: "https://www.wunderground.com/weather/jp/tokyo/RJTT",
    hourly: "https://www.wunderground.com/hourly/jp/tokyo/RJTT",
    history: "https://www.wunderground.com/history/daily/jp/tokyo/RJTT",
  },
  {
    id: "wellington",
    name: "Wellington",
    buttonMeta: "NZ / NZWN",
    description: "新西兰惠灵顿 · NZWN",
    overview: "https://www.wunderground.com/weather/nz/wellington/NZWN",
    hourly: "https://www.wunderground.com/hourly/nz/wellington/NZWN",
    history: "https://www.wunderground.com/history/daily/nz/wellington/NZWN",
  },
];

const CITY_BY_ID = Object.fromEntries(
  CITY_CONFIG.map((city) => [city.id, city])
);

const CITY_ALIASES = {
  toyko: "tokyo",
};

const cityList = document.querySelector("#city-list");
const hourlyFrame = document.querySelector("#hourly-frame");
const historyFrame = document.querySelector("#history-frame");
const overviewFrame = document.querySelector("#overview-frame");
const hourlyCardLink = document.querySelector("#hourly-card-link");
const historyCardLink = document.querySelector("#history-card-link");
const overviewCardLink = document.querySelector("#overview-card-link");

let cityButtons = [];
let activeCityId = null;

function renderCityButtons() {
  cityList.innerHTML = CITY_CONFIG.map(
    (city) => `
      <button class="city-button" type="button" data-city="${city.id}" aria-pressed="false">
        <span class="city-name">${city.name}</span>
        <span class="city-meta">${city.buttonMeta}</span>
      </button>
    `
  ).join("");

  cityButtons = [...cityList.querySelectorAll("[data-city]")];
}

function getInitialCity() {
  const searchParams = new URLSearchParams(window.location.search);
  const requested = searchParams.get("city");
  const normalized = CITY_ALIASES[requested] ?? requested;
  return CITY_BY_ID[normalized] ? normalized : CITY_CONFIG[0].id;
}

function setCity(cityId) {
  const city = CITY_BY_ID[cityId];
  if (!city) {
    return;
  }

  activeCityId = cityId;
  overviewFrame.src = city.overview;
  hourlyFrame.src = city.hourly;
  historyFrame.src = city.history;

  overviewCardLink.href = city.overview;
  hourlyCardLink.href = city.hourly;
  historyCardLink.href = city.history;

  cityButtons.forEach((button) => {
    const isActive = button.dataset.city === cityId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("city", cityId);
  window.history.replaceState({}, "", nextUrl);
}

cityList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-city]");
  if (!button) {
    return;
  }

  setCity(button.dataset.city);
});

renderCityButtons();
setCity(getInitialCity());
