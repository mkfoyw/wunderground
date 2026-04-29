// Add more cities here. Keep one object per city with a unique id, timeZone, and URLs.
const DEFAULT_CITY_ID = "chengdu";

const CITY_CONFIG = sortCitiesByTimeZone([
  {
    id: "chengdu",
    name: "Chengdu",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZUUU",
    description: "中国成都 · ZUUU",
    overview: "https://www.wunderground.com/weather/cn/chengdu/ZUUU",
    hourly: "https://www.wunderground.com/hourly/cn/chengdu/ZUUU",
    history: "https://www.wunderground.com/history/daily/cn/chengdu/ZUUU",
  },
  {
    id: "chongqing",
    name: "Chongqing",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZUCK",
    description: "中国重庆 · ZUCK",
    overview: "https://www.wunderground.com/weather/cn/chongqing/ZUCK",
    hourly: "https://www.wunderground.com/hourly/cn/chongqing/ZUCK",
    history: "https://www.wunderground.com/history/daily/cn/chongqing/ZUCK",
  },
  {
    id: "shanghai",
    name: "Shanghai",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZSPD",
    description: "中国上海 · ZSPD",
    overview: "https://www.wunderground.com/weather/cn/shanghai/ZSPD",
    hourly: "https://www.wunderground.com/hourly/cn/shanghai/ZSPD",
    history: "https://www.wunderground.com/history/daily/cn/shanghai/ZSPD",
  },
  {
    id: "tokyo",
    name: "Tokyo",
    timeZone: "Asia/Tokyo",
    buttonMeta: "JP / RJTT",
    description: "日本东京 · RJTT",
    overview: "https://www.wunderground.com/weather/jp/tokyo/RJTT",
    hourly: "https://www.wunderground.com/hourly/jp/tokyo/RJTT",
    history: "https://www.wunderground.com/history/daily/jp/tokyo/RJTT",
  },
  {
    id: "wellington",
    name: "Wellington",
    timeZone: "Pacific/Auckland",
    buttonMeta: "NZ / NZWN",
    description: "新西兰惠灵顿 · NZWN",
    overview: "https://www.wunderground.com/weather/nz/wellington/NZWN",
    hourly: "https://www.wunderground.com/hourly/nz/wellington/NZWN",
    history: "https://www.wunderground.com/history/daily/nz/wellington/NZWN",
  },
  {
    id: "seoul",
    name: "Seoul",
    timeZone: "Asia/Seoul",
    buttonMeta: "KR / RKSI",
    description: "韩国首尔 · RKSI",
    overview: "https://www.wunderground.com/weather/kr/incheon/RKSI",
    hourly: "https://www.wunderground.com/hourly/kr/incheon/RKSI",
    history: "https://www.wunderground.com/history/daily/kr/incheon/RKSI",
  },
  {
    id: "london",
    name: "London",
    timeZone: "Europe/London",
    buttonMeta: "GB / EGLC",
    description: "英国伦敦 · EGLC",
    overview: "https://www.wunderground.com/weather/gb/london/EGLC",
    hourly: "https://www.wunderground.com/hourly/gb/london/EGLC",
    history: "https://www.wunderground.com/history/daily/gb/london/EGLC",
  },
  {
    id: "singapore",
    name: "Singapore",
    timeZone: "Asia/Singapore",
    buttonMeta: "SG / WSSS",
    description: "新加坡 · WSSS",
    overview: "https://www.wunderground.com/weather/sg/singapore/WSSS",
    hourly: "https://www.wunderground.com/hourly/sg/singapore/WSSS",
    history: "https://www.wunderground.com/history/daily/sg/singapore/WSSS",
  },
  {
    id: "munich",
    name: "Munich",
    timeZone: "Europe/Berlin",
    buttonMeta: "DE / EDDM",
    description: "德国慕尼黑 · EDDM",
    overview: "https://www.wunderground.com/weather/de/munich/EDDM",
    hourly: "https://www.wunderground.com/hourly/de/munich/EDDM",
    history: "https://www.wunderground.com/history/daily/de/munich/EDDM",
  },
  {
    id: "miami",
    name: "Miami",
    timeZone: "America/New_York",
    buttonMeta: "US / KMIA",
    description: "美国迈阿密 · KMIA",
    overview: "https://www.wunderground.com/weather/us/fl/miami/KMIA",
    hourly: "https://www.wunderground.com/hourly/us/fl/miami/KMIA",
    history: "https://www.wunderground.com/history/daily/us/fl/miami/KMIA",
  },
  {
    id: "milan",
    name: "Milan",
    timeZone: "Europe/Rome",
    buttonMeta: "IT / LIMC",
    description: "意大利米兰 · LIMC",
    overview: "https://www.wunderground.com/weather/it/milan/LIMC",
    hourly: "https://www.wunderground.com/hourly/it/milan/LIMC",
    history: "https://www.wunderground.com/history/daily/it/milan/LIMC",
  },
  {
    id: "paris",
    name: "Paris",
    timeZone: "Europe/Paris",
    buttonMeta: "FR / LFPB",
    description: "法国博讷伊-昂-法兰西 · LFPB",
    overview: "https://www.wunderground.com/weather/fr/bonneuil-en-france/LFPB",
    hourly: "https://www.wunderground.com/hourly/fr/bonneuil-en-france/LFPB",
    history: "https://www.wunderground.com/history/daily/fr/bonneuil-en-france/LFPB",
  },
  {
    id: "beijing",
    name: "Beijing",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZBAA",
    description: "中国北京 · ZBAA",
    overview: "https://www.wunderground.com/weather/cn/beijing/ZBAA",
    hourly: "https://www.wunderground.com/hourly/cn/beijing/ZBAA",
    history: "https://www.wunderground.com/history/daily/cn/beijing/ZBAA",
  },
  {
    id: "helsinki",
    name: "Helsinki",
    timeZone: "Europe/Helsinki",
    buttonMeta: "FI / EFHK",
    description: "芬兰万塔 · EFHK",
    overview: "https://www.wunderground.com/weather/fi/vantaa/EFHK",
    hourly: "https://www.wunderground.com/hourly/fi/vantaa/EFHK",
    history: "https://www.wunderground.com/history/daily/fi/vantaa/EFHK",
  },
  {
    id: "madrid",
    name: "Madrid",
    timeZone: "Europe/Madrid",
    buttonMeta: "ES / LEMD",
    description: "西班牙马德里 · LEMD",
    overview: "https://www.wunderground.com/weather/es/madrid/LEMD",
    hourly: "https://www.wunderground.com/hourly/es/madrid/LEMD",
    history: "https://www.wunderground.com/history/daily/es/madrid/LEMD",
  },
  {
    id: "taipei",
    name: "Taipei",
    timeZone: "Asia/Taipei",
    buttonMeta: "TW / RCSS",
    description: "台灣台北 · RCSS",
    overview: "https://www.wunderground.com/weather/tw/taipei/RCSS",
    hourly: "https://www.wunderground.com/hourly/tw/taipei/RCSS",
    history: "https://www.wunderground.com/history/daily/tw/taipei/RCSS",
  },
  {
    id: "shenzhen",
    name: "Shenzhen",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZGSZ",
    description: "中国深圳 · ZGSZ",
    overview: "https://www.wunderground.com/weather/cn/shenzhen/ZGSZ",
    hourly: "https://www.wunderground.com/hourly/cn/shenzhen/ZGSZ",
    history: "https://www.wunderground.com/history/daily/cn/shenzhen/ZGSZ",
  },
  {
    id: "lagos",
    name: "Lagos",
    timeZone: "Africa/Lagos",
    buttonMeta: "NG / DNMM",
    description: "尼日利亚拉各斯 · DNMM",
    overview: "https://www.wunderground.com/weather/ng/lagos/DNMM",
    hourly: "https://www.wunderground.com/hourly/ng/lagos/DNMM",
    history: "https://www.wunderground.com/history/daily/ng/lagos/DNMM",
  },
  {
    id: "ankara",
    name: "Ankara",
    timeZone: "Europe/Istanbul",
    buttonMeta: "TR / LTAC",
    description: "土耳其丘布克 · LTAC",
    overview: "https://www.wunderground.com/weather/tr/%C3%A7ubuk/LTAC",
    hourly: "https://www.wunderground.com/hourly/tr/%C3%A7ubuk/LTAC",
    history: "https://www.wunderground.com/history/daily/tr/%C3%A7ubuk/LTAC",
  },
  {
    id: "wuhan",
    name: "Wuhan",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZHHH",
    description: "中国武汉 · ZHHH",
    overview: "https://www.wunderground.com/weather/cn/wuhan/ZHHH",
    hourly: "https://www.wunderground.com/hourly/cn/wuhan/ZHHH",
    history: "https://www.wunderground.com/history/daily/cn/wuhan/ZHHH",
  },
  {
    id: "mexico_city",
    name: "Mexico",
    timeZone: "America/Mexico_City",
    buttonMeta: "MX / MMMX",
    description: "墨西哥城 · MMMX",
    overview: "https://www.wunderground.com/weather/mx/mexico-city/MMMX",
    hourly: "https://www.wunderground.com/hourly/mx/mexico-city/MMMX",
    history: "https://www.wunderground.com/history/daily/mx/mexico-city/MMMX",
  },
  {
    id: "denver",
    name: "Denver",
    timeZone: "America/Denver",
    buttonMeta: "US / KBKF",
    description: "美国奥罗拉 · KBKF",
    overview: "https://www.wunderground.com/weather/us/co/aurora/KBKF",
    hourly: "https://www.wunderground.com/hourly/us/co/aurora/KBKF",
    history: "https://www.wunderground.com/history/daily/us/co/aurora/KBKF"
  } // Aurora
  ,
  {
    id: "lucknow",
    name: "Lucknow",
    timeZone: "Asia/Kolkata",
    buttonMeta: "IN / VILK",
    description: "印度勒克瑙 · VILK",
    overview: "https://www.wunderground.com/weather/in/lucknow/VILK",
    hourly: "https://www.wunderground.com/hourly/in/lucknow/VILK",
    history: "https://www.wunderground.com/history/daily/in/lucknow/VILK"
  } // Lucknow
  ,
  {
    id: "warsaw",
    name: "Warsaw",
    timeZone: "Europe/Warsaw",
    buttonMeta: "PL / EPWA",
    description: "波兰华沙 · EPWA",
    overview: "https://www.wunderground.com/weather/pl/warsaw/EPWA",
    hourly: "https://www.wunderground.com/hourly/pl/warsaw/EPWA",
    history: "https://www.wunderground.com/history/daily/pl/warsaw/EPWA"
  } // Warsaw
  ,
  {
    id: "panama_city",
    name: "Panama",
    timeZone: "America/Panama",
    buttonMeta: "PA / MPMG",
    description: "巴拿马巴拿马城 · MPMG",
    overview: "https://www.wunderground.com/weather/pa/panama-city/MPMG",
    hourly: "https://www.wunderground.com/hourly/pa/panama-city/MPMG",
    history: "https://www.wunderground.com/history/daily/pa/panama-city/MPMG"
  } // Panama City
  ,
  {
    id: "sao-paulo",
    name: "Sao Paulo",
    timeZone: "America/Sao_Paulo",
    buttonMeta: "BR / SBGR",
    description: "巴西瓜鲁柳斯 · SBGR",
    overview: "https://www.wunderground.com/weather/br/guarulhos/SBGR",
    hourly: "https://www.wunderground.com/hourly/br/guarulhos/SBGR",
    history: "https://www.wunderground.com/history/daily/br/guarulhos/SBGR"
  } // Guarulhos
  ,
  {
    id: "manila",
    name: "Manila",
    timeZone: "Asia/Manila",
    buttonMeta: "PH / RPLL",
    description: "菲律宾马尼拉 · RPLL",
    overview: "https://www.wunderground.com/weather/ph/manila/RPLL",
    hourly: "https://www.wunderground.com/hourly/ph/manila/RPLL",
    history: "https://www.wunderground.com/history/daily/ph/manila/RPLL"
  } // Manila
  ,
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    timeZone: "America/Argentina/Buenos_Aires",
    buttonMeta: "AR / SAEZ",
    description: "阿根廷布宜诺斯艾利斯 · SAEZ",
    overview: "https://www.wunderground.com/weather/ar/ezeiza/SAEZ",
    hourly: "https://www.wunderground.com/hourly/ar/ezeiza/SAEZ",
    history: "https://www.wunderground.com/history/daily/ar/ezeiza/SAEZ"
  } // Ezeiza
  ,
  {
    id: "toronto",
    name: "Toronto",
    timeZone: "America/Toronto",
    buttonMeta: "CA / CYYZ",
    description: "加拿大米西索加 · CYYZ",
    overview: "https://www.wunderground.com/weather/ca/mississauga/CYYZ",
    hourly: "https://www.wunderground.com/hourly/ca/mississauga/CYYZ",
    history: "https://www.wunderground.com/history/daily/ca/mississauga/CYYZ"
  } // Mississauga
  ,
  {
    id: "karachi",
    name: "Karachi",
    timeZone: "Asia/Karachi",
    buttonMeta: "PK / OPKC",
    description: "巴基斯坦卡拉奇 · OPKC",
    overview: "https://www.wunderground.com/weather/pk/karachi/OPKC",
    hourly: "https://www.wunderground.com/hourly/pk/karachi/OPKC",
    history: "https://www.wunderground.com/history/daily/pk/karachi/OPKC"
  } // Karachi
  ,
  {
    id: "kuala-lumpur",
    name: "Kuala Lumpur",
    timeZone: "Asia/Kuala_Lumpur",
    buttonMeta: "MY / WMKK",
    description: "马来西亚雪邦区 · WMKK",
    overview: "https://www.wunderground.com/weather/my/sepang-district/WMKK",
    hourly: "https://www.wunderground.com/hourly/my/sepang-district/WMKK",
    history: "https://www.wunderground.com/history/daily/my/sepang-district/WMKK"
  } // kuala-lumpur
  ,
  {
    id: "cape-town",
    name: "Cape Town",
    timeZone: "Africa/Johannesburg",
    buttonMeta: "ZA / FACT",
    description: "南非开普敦 · FACT",
    overview: "https://www.wunderground.com/weather/za/matroosfontein/FACT",
    hourly: "https://www.wunderground.com/hourly/za/matroosfontein/FACT",
    history: "https://www.wunderground.com/history/daily/za/matroosfontein/FACT"
  } // Cape Town
  ,
  {
    id: "guangzhou",
    name: "Guangzhou",
    timeZone: "Asia/Shanghai",
    buttonMeta: "CN / ZGGG",
    description: "中国广州 · ZGGG",
    overview: "https://www.wunderground.com/weather/cn/guangzhou/ZGGG",
    hourly: "https://www.wunderground.com/hourly/cn/guangzhou/ZGGG",
    history: "https://www.wunderground.com/history/daily/cn/guangzhou/ZGGG"
  } // Guangzhou
  ,
  {
    id: "jakarta",
    name: "Jakarta",
    timeZone: "Asia/Jakarta",
    buttonMeta: "ID / WIHH",
    description: "印度尼西亚雅加达 · WIHH",
    overview: "https://www.wunderground.com/weather/id/jakarta/WIHH",
    hourly: "https://www.wunderground.com/hourly/id/jakarta/WIHH",
    history: "https://www.wunderground.com/history/daily/id/jakarta/WIHH"
  } // Jakarta
  ,
  {
    id: "amsterdam",
    name: "Amsterdam",
    timeZone: "Europe/Amsterdam",
    buttonMeta: "NL / EHAM",
    description: "荷兰阿姆斯特丹 · EHAM",
    overview: "https://www.wunderground.com/weather/nl/schiphol/EHAM",
    hourly: "https://www.wunderground.com/hourly/nl/schiphol/EHAM",
    history: "https://www.wunderground.com/history/daily/nl/schiphol/EHAM"
  } // Amsterdam
  ,
  {
    id: "jeddah",
    name: "Jeddah",
    timeZone: "Asia/Riyadh",
    buttonMeta: "SA / OEJN",
    description: "沙特阿拉伯吉达 · OEJN",
    overview: "https://www.wunderground.com/weather/sa/jeddah/OEJN",
    hourly: "https://www.wunderground.com/hourly/sa/jeddah/OEJN",
    history: "https://www.wunderground.com/history/daily/sa/jeddah/OEJN"
  } // Jeddah
  ,
  {
    id: "busan",
    name: "Busan",
    timeZone: "Asia/Seoul",
    buttonMeta: "KR / RKPK",
    description: "韩国釜山 · RKPK",
    overview: "https://www.wunderground.com/weather/kr/busan/RKPK",
    hourly: "https://www.wunderground.com/hourly/kr/busan/RKPK",
    history: "https://www.wunderground.com/history/daily/kr/busan/RKPK"
  } // Busan
]);

function getTimeZoneOffsetMinutes(timeZone, referenceDate = new Date()) {
  const dateParts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      hourCycle: "h23",
    })
      .formatToParts(referenceDate)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value])
  );

  const utcTimestamp = Date.UTC(
    Number(dateParts.year),
    Number(dateParts.month) - 1,
    Number(dateParts.day),
    Number(dateParts.hour),
    Number(dateParts.minute),
    Number(dateParts.second)
  );

  return Math.round((utcTimestamp - referenceDate.getTime()) / 60000);
}

function sortCitiesByTimeZone(cities) {
  const referenceDate = new Date();
  const offsetsByTimeZone = new Map(
    [...new Set(cities.map((city) => city.timeZone))].map((timeZone) => [
      timeZone,
      getTimeZoneOffsetMinutes(timeZone, referenceDate),
    ])
  );

  // Sort east to west using the current UTC offset so DST-aware cities stay grouped correctly.
  return [...cities].sort(
    (left, right) =>
      offsetsByTimeZone.get(right.timeZone) -
      offsetsByTimeZone.get(left.timeZone)
  );
}

const CITY_BY_ID = Object.fromEntries(
  CITY_CONFIG.map((city) => [city.id, city])
);

const CITY_ALIASES = {
  toyko: "tokyo",
};

const cityList = document.querySelector("#city-list");
const hourlyFrame = document.querySelector("#hourly-frame");
const overviewFrame = document.querySelector("#overview-frame");
const hourlyCardLink = document.querySelector("#hourly-card-link");
const overviewCardLink = document.querySelector("#overview-card-link");
const historyCards = [...document.querySelectorAll("[data-history-offset]")];

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
  if (CITY_BY_ID[normalized]) {
    return normalized;
  }

  return CITY_BY_ID[DEFAULT_CITY_ID] ? DEFAULT_CITY_ID : CITY_CONFIG[0].id;
}

function getCityDateParts(city, offsetDays = 0, referenceDate = new Date()) {
  const dateParts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: city.timeZone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
      .formatToParts(referenceDate)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, Number(value)])
  );

  const localDate = new Date(
    Date.UTC(dateParts.year, dateParts.month - 1, dateParts.day)
  );
  localDate.setUTCDate(localDate.getUTCDate() - offsetDays);

  return {
    year: localDate.getUTCFullYear(),
    month: localDate.getUTCMonth() + 1,
    day: localDate.getUTCDate(),
  };
}

function formatHistoryDate(dateParts) {
  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

function buildHistoryUrl(city, offsetDays) {
  if (offsetDays === 0) {
    return city.history;
  }

  return `${city.history.replace(/\/$/, "")}/date/${formatHistoryDate(
    getCityDateParts(city, offsetDays)
  )}`;
}

function updateHistoryCards(city) {
  historyCards.forEach((card) => {
    const offsetDays = Number(card.dataset.historyOffset);
    const dateText = formatHistoryDate(getCityDateParts(city, offsetDays));
    const historyUrl = buildHistoryUrl(city, offsetDays);
    const title = card.querySelector(".history-title");
    const frame = card.querySelector(".history-frame");
    const link = card.querySelector(".history-card-link");

    title.textContent = `History Daily · ${dateText}`;
    frame.title = `Weather Underground History Daily ${dateText}`;
    frame.src = historyUrl;
    link.href = historyUrl;
  });
}

function setCity(cityId) {
  const city = CITY_BY_ID[cityId];
  if (!city) {
    return;
  }

  activeCityId = cityId;
  overviewFrame.src = city.overview;
  hourlyFrame.src = city.hourly;
  updateHistoryCards(city);

  overviewCardLink.href = city.overview;
  hourlyCardLink.href = city.hourly;

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
