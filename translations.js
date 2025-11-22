// ================= TRANSLATION SYSTEM =================
const translations = {
  en: {
    nav: {
      about: "About",
      results: "Results",
      services: "Services",
      process: "Process",
      portfolio: "Portfolio",
      faq: "FAQ",
      contact: "Contact",
      insights: "Insights",
    },
    hero: {
      badge1: "Meta Partner",
      badge2: "Trusted by 30+ Dubai Businesses",
      badge3: "3+ Years of Results",
      title: "Performance Marketer & Full-Stack Web Builder",
      subtitle:
        "I build fast, SEO-ready websites and run profitable ads: GA4/GTM tracking, clear reporting, relentless A/B tests.",
      cta: "Chat on WhatsApp",
      portfolio: "See my work",
      service1: "Expert in Google Ads Search & Display • YouTube Ads • Meta Ads",
      service2: "Landing Pages • Corporate Websites • A/B Tests",
      service3: "CMS & no-code: Webflow • Tilda • Wordpress",
      service4: "Custom coding: JavaScript • HTML • CSS",
      service5: "SEO: tech stack, sitemaps, schema markups",
      service6: "GA4 & GTM: conversion tracking & analytics",
      metric1: {
        label: "Returned",
        desc: "Return on Ad Spend",
        small: "Key metric for marketing efficiency",
      },
      metric2: {
        label: "Converted",
        desc: "More Conversions",
        small: "Lift achieved for new brand",
      },
      metric3: {
        label: "Lifted",
        desc: "Site Speed Score",
        small: "Performance for landing pages",
      },
      metric4: {
        label: "Boosted",
        desc: "Conversion Rate",
        small: "Increase after test cycle",
      },
    },
  },
  ru: {
    nav: {
      about: "О себе",
      results: "Результаты",
      services: "Услуги",
      process: "Процесс",
      portfolio: "Портфолио",
      faq: "Вопросы",
      contact: "Контакты",
      insights: "Инсайты",
    },
    hero: {
      badge1: "Партнер Meta",
      badge2: "30+ бизнесов в Дубае доверяют мне",
      badge3: "3+ года результатов",
      title: "Performance-маркетолог и Full-Stack веб-разработчик",
      subtitle:
        "Создаю быстрые SEO-готовые сайты и веду прибыльную рекламу: отслеживание GA4/GTM, прозрачная отчетность, постоянные A/B тесты.",
      cta: "Написать в WhatsApp",
      portfolio: "Посмотреть работы",
      service1: "Эксперт в Google Ads (Поиск, КМС) • YouTube Ads • Meta Ads",
      service2: "Лендинги • Корпоративные сайты • A/B тесты",
      service3: "CMS и no-code: Webflow • Tilda • Wordpress",
      service4: "Разработка: JavaScript • HTML • CSS",
      service5: "SEO: техническая оптимизация, карты сайта, schema-разметка",
      service6: "GA4 и GTM: отслеживание конверсий и аналитика",
      metric1: {
        label: "Возврат",
        desc: "Возврат инвестиций в рекламу",
        small: "Ключевой показатель эффективности маркетинга",
      },
      metric2: {
        label: "Конверсия",
        desc: "Рост конверсий",
        small: "Рост для нового бренда",
      },
      metric3: {
        label: "Скорость",
        desc: "Скорость загрузки сайта",
        small: "Производительность лендингов",
      },
      metric4: {
        label: "Прирост",
        desc: "Коэффициент конверсии",
        small: "Увеличение после тестирования",
      },
    },
  },
}

// Get nested translation by path (e.g., "hero.title")
function getTranslation(lang, path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[lang]) || path
}

// Initialize language from localStorage or browser language
let currentLanguage = localStorage.getItem("siteLanguage") || (navigator.language.startsWith("ru") ? "ru" : "en")

// Update all elements with data-i18n attribute
function updateTranslations() {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n")
    const translation = getTranslation(currentLanguage, key)

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translation
    } else {
      el.textContent = translation
    }
  })

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage

  // Update language switcher text
  const langText = document.getElementById("currentLang")
  if (langText) {
    langText.textContent = currentLanguage === "en" ? "RU" : "EN"
  }

  // Save to localStorage
  localStorage.setItem("siteLanguage", currentLanguage)

  console.log(`[v0] Language switched to: ${currentLanguage}`)
}

// Toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ru" : "en"
  updateTranslations()
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateTranslations()

  // Add event listener to language switcher
  const switcher = document.getElementById("languageSwitcher")
  if (switcher) {
    switcher.addEventListener("click", toggleLanguage)
  }
})
