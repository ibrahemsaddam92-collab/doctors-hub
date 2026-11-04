
const langBtn = document.getElementById("langBtn");

let currentLang = "ar";

const translations = {
  ar: {
    heroTitle: "بوابتك إلى عالم<br><span>الطب الحديث</span>",
    heroText: "منصة متكاملة تجمع الأطباء للتعلم، تبادل الخبرات، ومناقشة الحالات السريرية.",
    casesTitle: "حالات سريرية مميزة",
    libraryTitle: "المكتبة الطبية",
    libraryText: "مصدر معرفتك الطبية المستمر.",
    communityTitle: "مجتمع الأطباء",
    communityText: "معاً نبني مجتمعاً طبياً أقوى.",
    casesButton: "استكشف الحالات السريرية",
    communityButton: "مجتمع الأطباء",
    joinButton: "انضم عبر Telegram",
    langButton: "English"
  },

  en: {
    heroTitle: "Your Gateway to<br><span>Modern Medicine</span>",
    heroText: "A platform connecting doctors to learn, share knowledge, and discuss clinical cases.",
    casesTitle: "Featured Clinical Cases",
    libraryTitle: "Medical Library",
    libraryText: "Your continuous source of medical knowledge.",
    communityTitle: "Doctors Community",
    communityText: "Together, we build a stronger medical community.",
    casesButton: "Explore Clinical Cases",
    communityButton: "Doctors Community",
    joinButton: "Join via Telegram",
    langButton: "العربية"
  }
};

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  langBtn.textContent = translations[currentLang].langButton;

  document.querySelector(".hero h1").innerHTML =
    translations[currentLang].heroTitle;

  document.querySelector(".hero p").textContent =
    translations[currentLang].heroText;

  document.querySelector(".section-heading h2").textContent =
    translations[currentLang].casesTitle;

  document.querySelector(".library h2").textContent =
    translations[currentLang].libraryTitle;

  document.querySelector(".library p").textContent =
    translations[currentLang].libraryText;

  document.querySelector(".community h2").textContent =
    translations[currentLang].communityTitle;

  document.querySelector(".community p").textContent =
    translations[currentLang].communityText;
});

console.log("Doctors Hub initialized successfully!");
