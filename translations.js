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
    ads: {
      featured: "FEATURED",
      platform: "Ad Platform Focus",
      featureList1: "Search & Performance Max campaigns",
      featureList2: "Lead Ads, WhatsApp Automation & Audiences",
      featureList3: "Server-side events & real-time analytics",
      statLabel: "Average Performance Increase",
      statRoi: "ROI Boost",
      statAutomation: "Automation Rate",
      card1: "Performance Analytics",
      card2: "SEO Optimization",
      card3: "Real-time Insights",
      card4: "Mobile First",
      ctaTitle: "Ready to Transform Your Advertising?",
      ctaSubtitle:
        "Join thousands of marketers using our platform to automate, optimize, and scale their ad campaigns.",
      ctaButton: "Start Free Trial",
    },
    results: {
      badge: "RESULTS",
      title: "Measurable Growth & Performance",
      description:
        "Real data from real campaigns. These numbers reflect the impact of strategic ad management and continuous optimization.",
      card1: {
        label: "ROAS Achieved",
        desc: "Average return on ad spend across all campaigns",
      },
      card2: {
        label: "Conversion Increase",
        desc: "Growth in qualified leads and sales",
      },
      card3: {
        label: "Page Load Speed",
        desc: "Lightning-fast websites for better UX",
      },
      card4: {
        label: "Conversion Rate Lift",
        desc: "After A/B testing and optimization",
      },
    },
    process: {
      title: "How projects move from audit to scale",
      description:
        "An agile rhythm keeps launch velocity high and results transparent. Every sprint ends with a review, insights deck and backlog reprioritisation.",
      steps: {
        1: {
          title: "Deep-dive audit",
          text: "GA4, CRM, ads, tech SEO review. Prioritised roadmap delivered within 5 days.",
        },
        2: {
          title: "Launch sprint",
          text: "Landing/s built with QA checklist, copy testing, tracking validation.",
        },
        3: {
          title: "Campaign builds",
          text: "Search, video, local, retargeting flows in Meta and Google Ads.",
        },
        4: {
          title: "Scale + optimization",
          text: "Weekly reviews, creative briefs, ad-spend pacing, and CRO experiments.",
        },
      },
      channels: {
        title: "Channels I work with",
        item1: "Meta Ads (Facebook, Instagram)",
        item2: "Google Ads (Search, P-Max, Display, YouTube)",
        item3: "Landing pages & conversion funnels",
        item4: "GA4 custom reports & Looker Studio",
        item5: "WhatsApp Business API, call tracking",
      },
      industries: {
        title: "Industries with proven ROI",
        item1: "Real estate & property development",
        item2: "E-commerce & direct-to-consumer",
        item3: "B2B SaaS & lead generation",
        item4: "Medical & wellness clinics",
        item5: "Education & coaching programs",
      },
    },
    insights: {
      badge: "INSIGHTS",
      title: "Deep Understanding of Your Business",
      description:
        "Data-driven insights that inform every decision. From audience behavior to campaign performance, we uncover what truly matters.",
      card1: {
        title: "Behavioral Analytics",
        text: "Track every user interaction with heatmaps, session recordings, and scroll depth analysis. Understand what engages visitors and what causes drop-offs.",
        stat1: "Tracking Accuracy",
        stat2: "Data Updates",
      },
      card2: {
        title: "Budget Optimization",
        text: "AI-powered spend allocation across channels. Maximize ROI by directing budget to top-performing campaigns automatically.",
      },
      card3: {
        title: "Audience Intelligence",
        text: "Deep demographic and psychographic profiling. Identify high-value segments and create laser-focused targeting strategies.",
      },
      card4: {
        title: "Performance Forecasting",
        text: "Predictive models that estimate campaign outcomes. Plan with confidence using historical data and trend analysis.",
      },
      card5: {
        title: "Competitor Analysis",
        text: "Monitor rival ad strategies, creative approaches, and market positioning. Stay ahead with competitive intelligence.",
      },
    },
    about: {
      title: "About",
      intro: "Hands-on marketer and builder strategy — execution → measurable growth.",
      card1: { title: "Web performance first", text: "Talented, clean HTML/JS, schema, lazy images." },
      card2: { title: "Reliable tracking", text: "GA4 events, GTM, WhatsApp & call tracking." },
      card3: { title: "Content that sells", text: "Photo/video for ads & websites" },
      card4: { title: "Iterate fast", text: "From idea to fresh CRO — sprints, dashboards." },
    },
    services: {
      title: "What I do — performance marketing, analytics & fast web builds",
      meta: {
        title: "Meta Ads (IG/FB)",
        text: "WhatsApp automation, lead gen, inbound calls.",
      },
      google: { title: "Google Ads", text: "Search, P-Max, Maps — optimized." },
      youtube: { title: "YouTube Ads", text: "Video funnels, bumper creatives, precise audiences." },
      web: { title: "Websites & Landing Pages", text: "Fast, SEO-ready." },
      seo: { title: "SEO & Local SEO", text: "Audits, schema, speed, content plan." },
      photo: { title: "Photo/Content", text: "Lifestyle, interiors, product shoots." },
    },
    portfolio: {
      title: "Recent Projects",
      subtitle: "A selection of campaigns and websites built for growth.",
      card1: {
        title: "Real Estate Landing Page",
        text: "High-converting landing page with WhatsApp integration and Google Ads campaign.",
        tag1: "Landing Page",
        tag2: "Google Ads",
        tag3: "WhatsApp",
      },
      card2: {
        title: "Bella Spa Dubai",
        text: "Premium wellness branding for Al Barsha Heights location. Meta & Google Ads campaigns.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Branding",
        tag4: "SEO",
      },
      card3: {
        title: "Jasmin Spa Dubai",
        text: "Al Barsha Heights spa website with booking system and WhatsApp integration.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Branding",
        tag4: "SEO",
      },
      card4: {
        title: "Touch Life Spa Dubai",
        text: "Al Barsha Heights luxury spa. Lead generation and customer retention campaigns.",
        tag1: "Google Ads",
        tag2: "WebSite",
        tag3: "SEO",
      },
      card5: {
        title: "Mirage Spa Dubai",
        text: "Jumeirah location. Full-service marketing with social media and email campaigns.",
        tag1: "Google Ads",
        tag2: "Branding",
        tag3: "SEO",
      },
      card6: {
        title: "Inn Spa Dubai",
        text: "Al Barsha South location. Performance marketing with WhatsApp automation.",
        tag1: "Google Ads",
        tag2: "Branding",
        tag3: "SEO",
      },
      card7: {
        title: "Velvet Touch Spa Dubai",
        text: "JBR location. SEO optimization and local search dominance strategy.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Website",
        tag4: "SEO",
        tag5: "Spa Photos",
      },
      card8: {
        title: "Castle European Spa Dubai",
        text: "Deira location. Premium positioning with luxury brand messaging campaigns.",
        tag1: "Google Ads",
        tag2: "Website",
        tag3: "SEO",
        tag4: "Spa Photos",
      },
      card9: {
        title: "Shiestar Spa Dubai",
        text: "Bur Dubai location. Complete marketing funnel from awareness to booking.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Website",
        tag4: "SEO",
        tag5: "Spa Photos",
      },
      card10: {
        title: "Effect Spa",
        text: "Al Barsha Heights (Tecom) location. Full-service digital growth with performance ads and social media.",
        tag1: "Google Ads",
        tag2: "WebSite",
        tag3: "SEO",
        tag4: "Meta Ads",
        tag5: "SMM",
      },
    },
    faq: {
      badge: "❓ FREQUENTLY ASKED QUESTIONS",
      title: "Got Questions? I've Got Answers.",
      subtitle:
        "Everything you need to know about my services, pricing, process, and what to expect when working with me.",
      q1: {
        title: "What's your process for new projects?",
        answer:
          "I start with a deep-dive audit of your current setup—GA4, ads, CRM, and tech stack. Within 5 days, you get a prioritized roadmap with quick wins and long-term strategy. Then we move into sprints: landing pages, campaign builds, tracking setup, and continuous optimization.",
      },
      q2: {
        title: "Do you work on retainer or project basis?",
        answer:
          "Both. Most clients prefer a 3-6 month retainer where we optimize campaigns weekly, run A/B tests, and scale what works. Project-based work is great for landing page builds, technical SEO audits, or ad account setup. Happy to discuss what fits your needs.",
      },
      q3: {
        title: "What industries have you worked with?",
        answer:
          "I've worked with 30+ Dubai businesses across e-commerce, SaaS, real estate, professional services, and F&B. Each industry has different KPIs and customer journeys, so I customize my approach. Whether you're B2B or B2C, I know how to optimize for your goals.",
      },
      q4: {
        title: "How long until I see results?",
        answer:
          "Quick wins typically show in 2-4 weeks: better landing page performance, ad account optimization, tracking fixes. Meaningful scale (50%+ ROI lift) usually takes 8-12 weeks of continuous testing and refinement. Patience with data is key—we measure everything.",
      },
      q5: {
        title: "What about reporting and transparency?",
        answer:
          "You get weekly or monthly dashboards (your choice) showing spend, ROAS, conversions, and test results. I provide strategic insights, not just numbers. Every sprint ends with a review call where we celebrate wins and reprioritize the backlog.",
      },
      q6: {
        title: "Can you handle my existing ad accounts and websites?",
        answer:
          "Yes. I work with Google Ads, Meta Ads, analytics platforms, CMS (Webflow, WordPress, Tilda), and custom code. I'll audit what you have, identify gaps, and optimize from there. No need to start fresh—I build on what already works.",
      },
      q7: {
        title: "What does your typical package cost?",
        answer:
          "Pricing depends on scope: landing page builds start at 1500 AED. Full-stack ad management retainers typically run 3000-8000 AED/month based on ad spend volume and complexity. Let's chat about your budget and needs—I'll propose something that makes sense.",
      },
      q8: {
        title: "Do you offer free consultations?",
        answer:
          "Absolutely. Hit me up on WhatsApp or email. We'll spend 15-20 minutes talking about your challenges, goals, and what success looks like. No sales pitch—just honest feedback on what might work for your business.",
      },
      cta: {
        text: "Still have questions?",
        button: "Message Me on WhatsApp",
      },
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Share your goals and budget. I'll propose a clear plan with KPIs and timeline.",
      location: "Dubai, UAE",
      formTitle: "Send a message",
      formSubtitle: "Fill out the form and I'll get back to you within 24 hours.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send Message",
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
    ads: {
      featured: "ОСНОВНОЕ",
      platform: "Фокус на рекламные платформы",
      featureList1: "Кампании Search и Performance Max",
      featureList2: "Lead Ads, автоматизация WhatsApp и аудитории",
      featureList3: "Серверные события и аналитика в реальном времени",
      statLabel: "Средний рост эффективности",
      statRoi: "Рост ROI",
      statAutomation: "Уровень автоматизации",
      card1: "Аналитика эффективности",
      card2: "SEO-оптимизация",
      card3: "Insights в реальном времени",
      card4: "Мобильный приоритет",
      ctaTitle: "Готовы прокачать вашу рекламу?",
      ctaSubtitle:
        "Тысячи маркетологов используют мой подход, чтобы автоматизировать, оптимизировать и масштабировать кампании.",
      ctaButton: "Начать бесплатный период",
    },
    results: {
      badge: "РЕЗУЛЬТАТЫ",
      title: "Измеримый рост и эффективность",
      description:
        "Реальные данные реальных кампаний. Эти цифры показывают эффект стратегического ведения рекламы и постоянной оптимизации.",
      card1: {
        label: "Достигнутый ROAS",
        desc: "Средний возврат инвестиций во всех кампаниях",
      },
      card2: {
        label: "Рост конверсий",
        desc: "Прирост квалифицированных лидов и продаж",
      },
      card3: {
        label: "Скорость загрузки",
        desc: "Молниеносные сайты для лучшего UX",
      },
      card4: {
        label: "Рост конверсии",
        desc: "После A/B тестов и оптимизации",
      },
    },
    process: {
      title: "Как проект идет от аудита до масштабирования",
      description:
        "Гибкий ритм сохраняет высокую скорость запуска и прозрачность результатов. Каждый спринт завершается ревью, инсайтами и обновленным бэклогом.",
      steps: {
        1: {
          title: "Глубокий аудит",
          text: "Проверяю GA4, CRM, рекламу, техническое SEO. Дорожная карта приоритетов за 5 дней.",
        },
        2: {
          title: "Запусковой спринт",
          text: "Создаю лендинг(и) с чек-листом QA, тестом текста и валидацией трекинга.",
        },
        3: {
          title: "Построение кампаний",
          text: "Поиск, видео, локальные и ретаргетинг-потоки в Meta и Google Ads.",
        },
        4: {
          title: "Масштабирование и оптимизация",
          text: "Еженедельные ревью, брифы по креативам, контроль бюджета и эксперименты CRO.",
        },
      },
      channels: {
        title: "Каналы, с которыми работаю",
        item1: "Meta Ads (Facebook, Instagram)",
        item2: "Google Ads (Поиск, P-Max, КМС, YouTube)",
        item3: "Лендинги и воронки конверсии",
        item4: "GA4 кастомные отчеты и Looker Studio",
        item5: "WhatsApp Business API, коллтрекинг",
      },
      industries: {
        title: "Отрасли с подтвержденным ROI",
        item1: "Недвижимость и девелопмент",
        item2: "E-commerce и D2C",
        item3: "B2B SaaS и лидогенерация",
        item4: "Медицинские и wellness-клиники",
        item5: "Образование и коучинг",
      },
    },
    insights: {
      badge: "ИНСАЙТЫ",
      title: "Глубокое понимание вашего бизнеса",
      description:
        "Инсайты на основе данных, которые влияют на каждое решение. От поведения аудитории до результатов кампаний выявляем то, что действительно важно.",
      card1: {
        title: "Поведенческая аналитика",
        text: "Отслеживаю каждое действие: тепловые карты, записи сессий, глубина скролла. Понимаю, что вовлекает, а что мешает.",
        stat1: "Точность трекинга",
        stat2: "Обновления данных",
      },
      card2: {
        title: "Оптимизация бюджета",
        text: "AI-распределение бюджета по каналам. Максимальный ROI за счет усиления эффективных кампаний.",
      },
      card3: {
        title: "Аналитика аудитории",
        text: "Глубокие демо- и психографические профили. Нахожу ценные сегменты и точные стратегии таргетинга.",
      },
      card4: {
        title: "Прогнозирование результатов",
        text: "Модели, прогнозирующие исход кампаний. Планирование на основе исторических данных и трендов.",
      },
      card5: {
        title: "Анализ конкурентов",
        text: "Мониторинг стратегий, креативов и позиционирования конкурентов. Опережаю рынок на основе конкурентной разведки.",
      },
    },
    about: {
      title: "Обо мне",
      intro: "Маркетолог-практик и билдер: стратегия → исполнение → измеримый рост.",
      card1: { title: "Приоритет — производительность", text: "Чистый HTML/JS, схема, ленивая загрузка изображений." },
      card2: { title: "Надежный трекинг", text: "События GA4, GTM, отслеживание WhatsApp и звонков." },
      card3: { title: "Контент, который продает", text: "Фото/видео для рекламы и сайтов" },
      card4: { title: "Быстрые итерации", text: "От идеи до нового CRO — спринты, дашборды." },
    },
    services: {
      title: "Что я делаю — performance-маркетинг, аналитика и быстрые сайты",
      meta: { title: "Meta Ads (IG/FB)", text: "Автоматизация WhatsApp, лидогенерация, входящие звонки." },
      google: { title: "Google Ads", text: "Поиск, P-Max, Карты — оптимизировано." },
      youtube: { title: "YouTube Ads", text: "Видеоворонки, bumper-креативы, точные аудитории." },
      web: { title: "Сайты и лендинги", text: "Быстрые, готовые к SEO." },
      seo: { title: "SEO и Local SEO", text: "Аудиты, схема, скорость, контент-план." },
      photo: { title: "Фото/Контент", text: "Lifestyle, интерьер, предметная съемка." },
    },
    portfolio: {
      title: "Недавние проекты",
      subtitle: "Подборка кампаний и сайтов, созданных для роста.",
      card1: {
        title: "Лендинг по недвижимости",
        text: "Конверсионный лендинг с интеграцией WhatsApp и кампанией Google Ads.",
        tag1: "Лендинг",
        tag2: "Google Ads",
        tag3: "WhatsApp",
      },
      card2: {
        title: "Bella Spa Dubai",
        text: "Брендинг wellness в Al Barsha Heights. Кампании Meta и Google Ads.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Брендинг",
        tag4: "SEO",
      },
      card3: {
        title: "Jasmin Spa Dubai",
        text: "Сайт спа в Al Barsha Heights с бронированием и интеграцией WhatsApp.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Брендинг",
        tag4: "SEO",
      },
      card4: {
        title: "Touch Life Spa Dubai",
        text: "Премиум-спа в Al Barsha Heights. Лидогенерация и удержание клиентов.",
        tag1: "Google Ads",
        tag2: "Сайт",
        tag3: "SEO",
      },
      card5: {
        title: "Mirage Spa Dubai",
        text: "Локация Jumeirah. Комплексный маркетинг с SMM и email-кампаниями.",
        tag1: "Google Ads",
        tag2: "Брендинг",
        tag3: "SEO",
      },
      card6: {
        title: "Inn Spa Dubai",
        text: "Al Barsha South. Performance-маркетинг с автоматизацией WhatsApp.",
        tag1: "Google Ads",
        tag2: "Брендинг",
        tag3: "SEO",
      },
      card7: {
        title: "Velvet Touch Spa Dubai",
        text: "Локация JBR. SEO-оптимизация и доминирование в локальном поиске.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Сайт",
        tag4: "SEO",
        tag5: "Фото спа",
      },
      card8: {
        title: "Castle European Spa Dubai",
        text: "Локация Deira. Премиальное позиционирование и люксовые сообщения бренда.",
        tag1: "Google Ads",
        tag2: "Сайт",
        tag3: "SEO",
        tag4: "Фото спа",
      },
      card9: {
        title: "Shiestar Spa Dubai",
        text: "Bur Dubai. Полная воронка маркетинга от узнаваемости до бронирования.",
        tag1: "Google Ads",
        tag2: "Meta Ads",
        tag3: "Сайт",
        tag4: "SEO",
        tag5: "Фото спа",
      },
      card10: {
        title: "Effect Spa",
        text: "Локация Al Barsha Heights (Tecom). Комплексное продвижение: performance-реклама и SMM.",
        tag1: "Google Ads",
        tag2: "Сайт",
        tag3: "SEO",
        tag4: "Meta Ads",
        tag5: "SMM",
      },
    },
    faq: {
      badge: "❓ ЧАСТЫЕ ВОПРОСЫ",
      title: "Есть вопросы? У меня есть ответы.",
      subtitle: "Все, что нужно знать о моих услугах, ценах, процессе и ожиданиях при работе со мной.",
      q1: {
        title: "Какой у вас процесс для новых проектов?",
        answer:
          "Начинаю с глубокого аудита текущей системы — GA4, рекламы, CRM, техстека. За 5 дней получаете приоритезированный план с быстрыми победами и долгосрочной стратегией. Далее спринты: лендинги, кампании, трекинг, постоянная оптимизация.",
      },
      q2: {
        title: "Работаете на ретейнере или по проекту?",
        answer:
          "И так, и так. Чаще всего клиенты выбирают ретейнер 3–6 месяцев: еженедельная оптимизация кампаний, A/B тесты и масштабирование. Проектный формат подходит для лендингов, техSEO-аудитов или настройки аккаунтов. Обсудим, что вам подходит.",
      },
      q3: {
        title: "С какими отраслями вы работали?",
        answer:
          "Работал с 30+ бизнесами Дубая: e-commerce, SaaS, недвижимость, профессиональные услуги, HoReCa. У каждой отрасли свои KPI и путь клиента, поэтому адаптирую подход. B2B или B2C — знаю, как оптимизировать под цели.",
      },
      q4: {
        title: "Когда будут результаты?",
        answer:
          "Первые улучшения за 2–4 недели: выше конверсия лендинга, оптимизация аккаунта, исправление трекинга. Значимый рост (50%+ ROI) обычно за 8–12 недель постоянных тестов и доработок. Терпение к данным — ключ, измеряем всё.",
      },
      q5: {
        title: "Как с отчетностью и прозрачностью?",
        answer:
          "Еженедельные или месячные дашборды (по выбору): расходы, ROAS, конверсии, результаты тестов. Даю стратегические выводы, не только цифры. Каждый спринт — созвон с итогами и приоритизацией бэклога.",
      },
      q6: {
        title: "Можете работать с моими текущими аккаунтами и сайтами?",
        answer:
          "Да. Работаю с Google Ads, Meta Ads, аналитикой, CMS (Webflow, WordPress, Tilda) и кастомным кодом. Проведу аудит, найду пробелы и оптимизирую. Начинать с нуля не обязательно — усиливаю то, что уже работает.",
      },
      q7: {
        title: "Сколько стоят ваши услуги?",
        answer:
          "Стоимость зависит от объема: лендинги от 1500 AED. Ведение рекламы обычно 3000–8000 AED в месяц, зависит от бюджета и сложности. Обсудим ваш бюджет — предложу адекватный вариант.",
      },
      q8: {
        title: "Даете ли бесплатные консультации?",
        answer:
          "Конечно. Напишите в WhatsApp или на почту. 15–20 минут обсуждаем ваши задачи и цели. Без продаж — честно расскажу, что может сработать.",
      },
      cta: {
        text: "Остались вопросы?",
        button: "Написать мне в WhatsApp",
      },
    },
    contact: {
      title: "Давайте обсудим",
      subtitle: "Расскажите о целях и бюджете. Предложу понятный план с KPI и сроками.",
      location: "Дубай, ОАЭ",
      formTitle: "Отправьте сообщение",
      formSubtitle: "Заполните форму — отвечу в течение 24 часов.",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш email",
      messagePlaceholder: "Ваше сообщение",
      submit: "Отправить",
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
