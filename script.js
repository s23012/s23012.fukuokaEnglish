// 多言語対応スクリプト
let currentLang = "ja";

const translations = {
  en: {
    title: "Fukuoka Public Transport Guide",
    busTitle: "Nishitetsu Bus",
    busDesc:
      "Nishitetsu Bus is a convenient way to travel around Fukuoka City. Enter from the front or middle door and exit from the rear. Please keep quiet and offer seats to those in need.",
    subwayTitle: "Fukuoka City Subway",
    subwayDesc:
      "The subway connects major areas such as Tenjin, Hakata, and the Airport. Keep good manners—don’t run, line up, and lower your music volume.",
    footer: "© 2025 Fukuoka Public Transport Guide",
    button: "日本語"
  },
  ja: {
    title: "福岡の公共交通ガイド",
    busTitle: "西鉄バス",
    busDesc:
      "西鉄バスは福岡市内を広く走る便利な交通手段です。乗車時は前方または中央のドアから乗り、降車は後方ドアから行います。車内では静かにし、席をゆずり合いましょう。",
    subwayTitle: "福岡市営地下鉄",
    subwayDesc:
      "地下鉄は天神・博多・空港など主要エリアを結びます。駅構内では走らない、列に並ぶ、音楽の音量を下げるなどのマナーを守りましょう。",
    footer: "© 2025 福岡公共交通ガイド",
    button: "English"
  }
};

document.getElementById("lang-btn").addEventListener("click", () => {
  currentLang = currentLang === "ja" ? "en" : "ja";
  const t = translations[currentLang];
  document.getElementById("title").textContent = t.title;
  document.querySelector("#bus h2").textContent = t.busTitle;
  document.getElementById("bus-desc").textContent = t.busDesc;
  document.querySelector("#subway h2").textContent = t.subwayTitle;
  document.getElementById("subway-desc").textContent = t.subwayDesc;
  document.getElementById("footer-text").textContent = t.footer;
  document.getElementById("lang-btn").textContent = t.button;
});
