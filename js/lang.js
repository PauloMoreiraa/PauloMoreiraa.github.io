let translations = {};

async function loadTranslations() {

  const response = await fetch("js/lang.json");
  translations = await response.json();

  const savedLang = localStorage.getItem("lang") || "pt";

  setLanguage(savedLang);

}


function setLanguage(lang) {

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }

  });

  localStorage.setItem("lang", lang);

  updateFlag(lang);

}

function updateFlag(lang) {

  const flag = lang === "en"
    ? "img/flags/reino-unido.png"
    : "img/flags/brasil.png";

  const label = lang === "en" ? "EN" : "PT";

  document.querySelectorAll(".lang-selected img").forEach(img => {
    img.src = flag;
  });

  document.querySelectorAll(".lang-selected span").forEach(span => {
    span.textContent = label;
  });

}

document.querySelectorAll(".lang-select").forEach(select => {

  const selected = select.querySelector(".lang-selected");
  const options = select.querySelectorAll(".lang-option");

  selected.addEventListener("click", () => {
    select.classList.toggle("active");
  });

  options.forEach(option => {

    option.addEventListener("click", () => {

      const lang = option.dataset.lang;

      setLanguage(lang);

      select.classList.remove("active");

    });

  });

});

document.addEventListener("click", (e) => {

  document.querySelectorAll(".lang-select").forEach(select => {

    if (!select.contains(e.target)) {
      select.classList.remove("active");
    }

  });

});

loadTranslations();