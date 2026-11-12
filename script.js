"use strict";
const defaultLang = "va";
const translations = {};
const languageSelect = document.getElementById("language");
async function setLanguage(lang) {
  if (!Object.hasOwn({va:1,es:1,gl:1,eu:1},lang)) lang=defaultLang;
  try {
    if (!translations[lang]) {
      const response = await fetch(`locales/${lang}.json`);
      if (!response.ok) throw new Error("Translation unavailable");
      translations[lang] = await response.json();
    }
    const t=translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key=element.dataset.i18n;
      if (Object.hasOwn(t,key)) element.textContent=t[key];
    });
    document.documentElement.lang=lang === "va" ? "ca-valencia" : lang;
    languageSelect.value=lang;
  } catch(error) {
    console.warn("Language file could not be loaded; open this site through a web server.",error);
  }
}
languageSelect.addEventListener("change", event => setLanguage(event.target.value));
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage(defaultLang);
