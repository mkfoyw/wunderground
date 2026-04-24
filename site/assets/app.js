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
  {
    id: "incheon",
    name: "Incheon",
    buttonMeta: "KR / RKSI",
    description: "韩国仁川 · RKSI",
    overview: "https://www.wunderground.com/weather/kr/incheon/RKSI",
    hourly: "https://www.wunderground.com/hourly/kr/incheon/RKSI",
    history: "https://www.wunderground.com/history/daily/kr/incheon/RKSI",
  }
  ,
  {
    id: "london",
    name: "London",
    buttonMeta: "GB / EGLC",
    description: "英国伦敦 · EGLC",
    overview: "https://www.wunderground.com/weather/gb/london/EGLC",
    hourly: "https://www.wunderground.com/hourly/gb/london/EGLC",
    history: "https://www.wunderground.com/history/daily/gb/london/EGLC",
  }
  ,
  {
    id: "singapore",
    name: "Singapore",
    buttonMeta: "SG / WSSS",
    description: "新加坡 · WSSS",
    overview: "https://www.wunderground.com/weather/sg/singapore/WSSS",
    hourly: "https://www.wunderground.com/hourly/sg/singapore/WSSS",
    history: "https://www.wunderground.com/history/daily/sg/singapore/WSSS",
  }
  ,
  {
    id: "munich",
    name: "Munich",
    buttonMeta: "DE / EDDM",
    description: "德国慕尼黑 · EDDM",
    overview: "https://www.wunderground.com/weather/de/munich/EDDM",
    hourly: "https://www.wunderground.com/hourly/de/munich/EDDM",
    history: "https://www.wunderground.com/history/daily/de/munich/EDDM",
  }
  ,
  {
    id: "miami",
    name: "Miami",
    buttonMeta: "US / KMIA",
    description: "美国迈阿密 · KMIA",
   overview: "https://www.wunderground.com/weather/us/fl/miami/KMIA",
    hourly: "https://www.wunderground.com/hourly/us/fl/miami/KMIA",
    history: "https://www.wunderground.com/history/daily/us/fl/miami/KMIA",
  }
  ,
  {
    id: "milan",
    name: "Milan",
    buttonMeta: "IT / LIMC",
    description: "意大利米兰 · LIMC",
    overview: "https://www.wunderground.com/weather/it/milan/LIMC",
    hourly: "https://www.wunderground.com/hourly/it/milan/LIMC",
    history: "https://www.wunderground.com/history/daily/it/milan/LIMC",
  }
  ,
  {
    id: "paris",
    name: "Paris",
    buttonMeta: "FR / LFPB",
    description: "法国博讷伊-昂-法兰西 · LFPB",
    overview: "https://www.wunderground.com/weather/fr/bonneuil-en-france/LFPB",
    hourly: "https://www.wunderground.com/hourly/fr/bonneuil-en-france/LFPB",
    history: "https://www.wunderground.com/history/daily/fr/bonneuil-en-france/LFPB",
  }
  ,
  {
    id: "beijing",
    name: "Beijing",
    buttonMeta: "CN / ZBAA",
    description: "中国北京 · ZBAA",
    overview: "https://www.wunderground.com/weather/cn/beijing/ZBAA",
    hourly: "https://www.wunderground.com/hourly/cn/beijing/ZBAA",
    history: "https://www.wunderground.com/history/daily/cn/beijing/ZBAA",
  }
  ,
  {
    id: "helsinki",
    name: "Helsinki",
    buttonMeta: "FI / EFHK",
    description: "芬兰万塔 · EFHK",
    overview: "https://www.wunderground.com/weather/fi/vantaa/EFHK",
    hourly: "https://www.wunderground.com/hourly/fi/vantaa/EFHK",
    history: "https://www.wunderground.com/history/daily/fi/vantaa/EFHK",
  }
  ,
  {
    id: "madrid",
    name: "Madrid",
    buttonMeta: "ES / LEMD",
    description: "西班牙马德里 · LEMD",
    overview: "https://www.wunderground.com/weather/es/madrid/LEMD",
    hourly: "https://www.wunderground.com/hourly/es/madrid/LEMD",
    history: "https://www.wunderground.com/history/daily/es/madrid/LEMD",
  }
  ,
  {
    id: "taipei",
    name: "Taipei",
    buttonMeta: "TW / RCSS",
    description: "台灣台北 · RCSS",
    overview: "https://www.wunderground.com/weather/tw/taipei/RCSS",
    hourly: "https://www.wunderground.com/hourly/tw/taipei/RCSS",
    history: "https://www.wunderground.com/history/daily/tw/taipei/RCSS",
  }
  ,
  {
    id: "shenzhen",
    name: "Shenzhen",
    buttonMeta: "CN / ZGSZ",
    description: "中国深圳 · ZGSZ",
    overview: "https://www.wunderground.com/weather/cn/shenzhen/ZGSZ",
    hourly: "https://www.wunderground.com/hourly/cn/shenzhen/ZGSZ",
    history: "https://www.wunderground.com/history/daily/cn/shenzhen/ZGSZ",
  }
  ,
  {
    id: "lagos",
    name: "Lagos",
    buttonMeta: "NG / DNMM",
    description: "尼日利亚拉各斯 · DNMM",
    overview: "https://www.wunderground.com/weather/ng/lagos/DNMM",
    hourly: "https://www.wunderground.com/hourly/ng/lagos/DNMM",
    history: "https://www.wunderground.com/history/daily/ng/lagos/DNMM",
  }
  ,
  {
    id: "cubuk",
    name: "Çubuk",
    buttonMeta: "TR / LTAC",
    description: "土耳其丘布克 · LTAC",
    overview: "https://www.wunderground.com/weather/tr/%C3%A7ubuk/LTAC",
    hourly: "https://www.wunderground.com/hourly/tr/%C3%A7ubuk/LTAC",
    history: "https://www.wunderground.com/history/daily/tr/%C3%A7ubuk/LTAC",
  }
  ,
  {
    id: "wuhan",
    name: "Wuhan",
    buttonMeta: "CN / ZHHH",
    description: "中国武汉 · ZHHH",
    overview: "https://www.wunderground.com/weather/cn/wuhan/ZHHH",
    hourly: "https://www.wunderground.com/hourly/cn/wuhan/ZHHH",
    history: "https://www.wunderground.com/history/daily/cn/wuhan/ZHHH",
  }
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
