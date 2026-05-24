'use strict';

/* ─── i18n Data ──────────────────────────────────────────────────────────── */

const i18n = {
  en: {
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.chip': 'Available for new opportunities',
    'hero.role': 'QA Lead &amp; Test Automation Engineer',
    'hero.tagline': '10+ years engineering quality into critical software systems — from startup MVPs to national-scale platforms.',
    'hero.stat.years': 'Years',
    'hero.stat.companies': 'Companies',
    'hero.stat.domains': 'Domains',
    'hero.cta': 'Get in touch',
    'hero.scroll': 'Scroll',

    'about.title': 'About',
    'about.intro': 'Senior QA professional with a decade of hands-on experience spanning the full testing spectrum — from manual exploratory testing to architecting complex automation frameworks for high-load production systems.',
    'about.0': 'Proven track record of establishing QA processes from the ground up: requirements, quality metrics, risk assessment, ROI, and resource planning',
    'about.1': 'Built and led distributed QA teams of up to 10 engineers across international, cross-functional projects',
    'about.2': 'Hands-on expertise designing test automation frameworks for API, web, and mobile applications',
    'about.3': 'Performance and load testing delivery with k6 + TypeScript at scale',
    'about.4': 'CI/CD pipeline configuration and maintenance with GitHub Actions and Jenkins',
    'about.5': 'Domain expertise across infrastructure, healthcare, media, e-commerce, and entertainment',

    'exp.title': 'Experience',
    'exp.present': 'Present',

    'exp.0.role': 'General QA Lead',
    'exp.0.project': 'High-load ticketing and seat reservation platform for a national railway operator (United Kingdom)',
    'exp.0.b0': 'Established end-to-end QA strategy for a suite of 7 React Native mobile apps and multiple web portals',
    'exp.0.b1': 'Owned release risk assessment, test planning, effort estimation, team hiring, 1:1s, and annual performance reviews',
    'exp.0.b2': 'Architected the React Native mobile automation framework (Appium + PyTest + BrowserStack) — the principal engagement focus',
    'exp.0.b3': 'Built complementary API contract testing (Postman/Newman) and performance/load testing (k6) suites',
    'exp.0.b4': 'Rolled out Xray test management and authored team-wide standards for test case documentation',
    'exp.0.b5': 'Introduced AI-assisted QA tooling: ChatGPT, Claude, GitHub Copilot integrated into automation workflows',

    'exp.1.role': 'QA Automation Team Lead',
    'exp.1.project': 'Data ingestion and analytics platform for a major music distributor (US)',
    'exp.1.b0': 'Authored UI automation frameworks for web and native mobile (Python + Selenium / Appium)',
    'exp.1.b1': 'Built API regression and data validation suites (Python + PyTest + Requests)',
    'exp.1.b2': 'Developed pre-sales PoC prototypes for automation engagements (Selenium, Playwright)',
    'exp.1.b3': 'Mentored QA engineers, led code reviews, established team coding standards',

    'exp.2.role': 'QA Automation Engineer',
    'exp.2.project': 'Social networking and event management platform for online and in-person events (US)',
    'exp.2.b0': 'Full SDLC quality coverage — requirements analysis, test planning through to production release',
    'exp.2.b1': 'Developed and maintained web and API automation framework (Robot Framework)',

    'exp.3.role': 'QA Automation Engineer',
    'exp.3.project': 'Mobile application for a major e-commerce retailer (US)',
    'exp.3.b0': 'Mobile test automation framework (Java + TestNG + Appium) with full functional coverage',

    'exp.4.role': 'QA Automation Engineer',
    'exp.4.project': 'High-load e-commerce platform (US)',
    'exp.4.b0': 'Service-layer automation framework targeting microservices (SoapUI, FitNesse)',
    'exp.4.b1': 'CI/CD pipelines (Jenkins) and test environment provisioning',
    'exp.4.b2': 'On-site embedded with client team for the full engagement duration',

    'exp.5.role': 'QA Automation Engineer',
    'exp.5.project': 'Internal helpdesk system for a telecom support organisation (US)',
    'exp.5.b0': 'Full automated regression coverage of functional requirements (Selenium, unittest, Requests)',

    'exp.6.role': 'QA Engineer',
    'exp.6.project': 'Medical device — integrated hardware and mobile solution for diabetes management (Israel)',
    'exp.6.b0': 'Requirements analysis, risk-based test planning and acceptance criteria validation',

    'exp.7.role': 'QA Engineer',
    'exp.7.project': 'Online newspaper and digital media platform (US)',
    'exp.7.b0': 'Requirements analysis, test planning, test case authoring, and acceptance criteria validation',

    'exp.via': 'via',
    'exp.confidential': 'Confidential',

    'dom.title': 'Domains &amp; Notable Clients',
    'dom.lede': 'A decade delivered exclusively through outstaff partnerships — embedded with product teams across five industries.',
    'dom.0.name': 'Infrastructure',
    'dom.0.desc': 'Internet performance &amp; DNS infrastructure',
    'dom.1.name': 'Transport',
    'dom.1.desc': 'National railway ticketing &amp; reservation',
    'dom.2.name': 'Healthcare',
    'dom.2.desc': 'Medical device &amp; integrated mobile',
    'dom.3.name': 'E-commerce',
    'dom.3.desc': 'High-load retail at scale',
    'dom.4.name': 'Media',
    'dom.4.desc': 'Digital news &amp; online publishing',

    'lead.title': 'QA Leadership Scope',
    'lead.lede': 'The non-technical surface area of the role — owning quality end-to-end, shaping process, and growing people.',
    'lead.0.name': 'Quality Ownership',
    'lead.0.b0': 'Own and enforce quality gates end-to-end across the platform',
    'lead.0.b1': 'Establish, track, and report on quality metrics',
    'lead.0.b2': 'Lead defect triage and drive defect lifecycle management',
    'lead.0.b3': 'Review manual and automated test cases for coverage and quality',
    'lead.0.b4': 'Own test planning for release iterations',
    'lead.1.name': 'Process &amp; Standards',
    'lead.1.b0': 'Continuously improve QA processes in line with industry best practices',
    'lead.1.b1': 'Maintain and evolve process documentation',
    'lead.1.b2': 'Conduct risk assessments and escalate quality concerns to stakeholders',
    'lead.1.b3': 'Implement and roll out Test Case Management Systems (Xray, TestRail, QTest)',
    'lead.2.name': 'Cross-team Collaboration',
    'lead.2.b0': 'Build and maintain strong working relationships with Product and Engineering teams',
    'lead.2.b1': 'Act as the primary QA point of contact for cross-functional initiatives',
    'lead.3.name': 'Team Planning &amp; Delivery',
    'lead.3.b0': 'Define team priorities and manage workload distribution',
    'lead.3.b1': 'Provide work estimation for QA efforts across projects',
    'lead.3.b2': 'Assign tasks and oversee execution to ensure timely delivery',
    'lead.4.name': 'People Management',
    'lead.4.b0': 'Conduct regular 1-2-1s to support team growth and wellbeing',
    'lead.4.b1': 'Lead onboarding for new team members',
    'lead.4.b2': 'Carry out annual and mid-year performance reviews',
    'lead.4.b3': 'Participate in interviewing and hiring QA candidates',

    'skills.title': 'Technical Skills',
    'skills.c0': 'Test Automation — Web',
    'skills.c1': 'Test Automation — Mobile',
    'skills.c2': 'Test Automation — API &amp; Performance',
    'skills.c4': 'AI-Agentic &amp; AI-Assisted QA',
    'skills.c5': 'Languages',
    'skills.c6': 'CI/CD &amp; DevOps',
    'skills.c7': 'Observability &amp; Analytics',
    'skills.c8': 'Test Management &amp; Tracking',

    'edu.title': 'Education',
    'edu.degree': 'Bachelor of Science in Radio Electronics',
    'edu.school': 'Kharkiv National University of Radio Electronics',

    'contact.title': "Let's work\ntogether",
    'contact.sub': 'Open to senior QA Lead and test automation engineering opportunities.',
  },

  uk: {
    'nav.experience': 'Досвід',
    'nav.skills': 'Навички',
    'nav.contact': 'Контакт',

    'hero.chip': 'Відкритий до нових можливостей',
    'hero.role': 'QA Lead та Інженер з автоматизації тестування',
    'hero.tagline': '10+ років забезпечення якості критично важливих програмних систем — від стартап-MVP до платформ національного масштабу.',
    'hero.stat.years': 'Роки',
    'hero.stat.companies': 'Компанії',
    'hero.stat.domains': 'Домени',
    'hero.cta': "Зв'язатися",
    'hero.scroll': 'Прокрутити',

    'about.title': 'Про мене',
    'about.intro': 'Старший QA-спеціаліст з десятирічним практичним досвідом у повному спектрі тестування — від ручного дослідницького тестування до проектування складних фреймворків автоматизації для високонавантажених виробничих систем.',
    'about.0': 'Досвід побудови QA-процесів з нуля: вимоги, метрики якості, оцінка ризиків, ROI та планування ресурсів',
    'about.1': 'Формування та керівництво розподіленими QA-командами до 10 інженерів у міжнародних кросфункціональних проєктах',
    'about.2': 'Практичний досвід проектування фреймворків автоматизації тестування для API, веб- та мобільних застосунків',
    'about.3': 'Навантажувальне та продуктивне тестування з k6 + TypeScript у масштабі',
    'about.4': 'Налаштування та підтримка CI/CD пайплайнів з GitHub Actions та Jenkins',
    'about.5': 'Доменна експертиза в інфраструктурі, охороні здоров\'я, медіа, e-commerce та розвагах',

    'exp.title': 'Досвід',
    'exp.present': 'Сьогодні',

    'exp.0.role': 'Головний QA Lead',
    'exp.0.project': 'Високонавантажена платформа продажу квитків та резервування місць для національного залізничного оператора (Велика Британія)',
    'exp.0.b0': 'Побудував наскрізну QA-стратегію для пакету з 7 React Native мобільних застосунків та кількох вебпорталів',
    'exp.0.b1': 'Відповідальний за оцінку ризиків випуску, планування тестування, оцінку зусиль, найм команди, 1:1 та щорічні performance review',
    'exp.0.b2': 'Спроектував фреймворк автоматизації React Native мобільних застосунків (Appium + PyTest + BrowserStack) — основний фокус проєкту',
    'exp.0.b3': 'Побудував допоміжні набори: контрактне тестування API (Postman/Newman) та навантажувальне тестування (k6)',
    'exp.0.b4': 'Впровадив систему управління тест-кейсами Xray та розробив командні стандарти документування',
    'exp.0.b5': 'Впровадив AI-інструменти для QA: ChatGPT, Claude, GitHub Copilot інтегровано в робочі процеси автоматизації',

    'exp.1.role': 'Тімлід QA Automation',
    'exp.1.project': 'Платформа збору та аналітики даних для великого дистриб\'ютора музики (США)',
    'exp.1.b0': 'Створив UI-фреймворки автоматизації для веб та нативного мобайлу (Python + Selenium / Appium)',
    'exp.1.b1': 'Побудував набори API-регресії та валідації даних (Python + PyTest + Requests)',
    'exp.1.b2': 'Розробив PoC-прототипи для пресейлів (Selenium, Playwright)',
    'exp.1.b3': 'Наставляв QA-інженерів, проводив code review, встановив командні стандарти кодування',

    'exp.2.role': 'QA Automation Engineer',
    'exp.2.project': 'Платформа соціальних мереж та управління подіями для онлайн та офлайн заходів (США)',
    'exp.2.b0': 'Повне покриття якості SDLC — від аналізу вимог до production release',
    'exp.2.b1': 'Розробляв та підтримував веб та API фреймворк автоматизації (Robot Framework)',

    'exp.3.role': 'QA Automation Engineer',
    'exp.3.project': 'Мобільний застосунок для великого e-commerce рітейлера (США)',
    'exp.3.b0': 'Мобільний фреймворк автоматизації (Java + TestNG + Appium) з повним функціональним покриттям',

    'exp.4.role': 'QA Automation Engineer',
    'exp.4.project': 'Високонавантажена e-commerce платформа (США)',
    'exp.4.b0': 'Фреймворк автоматизації сервісного рівня для мікросервісів (SoapUI, FitNesse)',
    'exp.4.b1': 'CI/CD пайплайни (Jenkins) та provisioning тестових середовищ',
    'exp.4.b2': 'Виїзна робота вбудованим членом команди клієнта протягом усього проєкту',

    'exp.5.role': 'QA Automation Engineer',
    'exp.5.project': 'Внутрішня helpdesk-система для телекомунікаційної організації підтримки (США)',
    'exp.5.b0': 'Повне автоматизоване регресійне покриття функціональних вимог (Selenium, unittest, Requests)',

    'exp.6.role': 'QA Engineer',
    'exp.6.project': 'Медичний пристрій — інтегроване апаратне та мобільне рішення для управління діабетом (Ізраїль)',
    'exp.6.b0': 'Аналіз вимог, ризик-орієнтоване планування тестування та валідація критеріїв прийнятності',

    'exp.7.role': 'QA Engineer',
    'exp.7.project': 'Онлайн-газета та платформа цифрових медіа (США)',
    'exp.7.b0': 'Аналіз вимог, планування тестування, написання тест-кейсів та валідація критеріїв прийнятності',

    'exp.via': 'через',
    'exp.confidential': 'Конфіденційно',

    'dom.title': 'Домени та ключові клієнти',
    'dom.lede': 'Десятиліття роботи через аутстаф-партнерства — у складі продуктових команд п\'яти індустрій.',
    'dom.0.name': 'Інфраструктура',
    'dom.0.desc': 'Internet performance та DNS-інфраструктура',
    'dom.1.name': 'Транспорт',
    'dom.1.desc': 'Національна система продажу залізничних квитків',
    'dom.2.name': 'Healthcare',
    'dom.2.desc': 'Медичні пристрої та інтегровані мобільні рішення',
    'dom.3.name': 'E-commerce',
    'dom.3.desc': 'Високонавантажена роздрібна торгівля',
    'dom.4.name': 'Медіа',
    'dom.4.desc': 'Цифрові новини та онлайн-видавництво',

    'lead.title': 'Зона відповідальності QA-ліда',
    'lead.lede': 'Нетехнічна частина ролі — володіння якістю наскрізно, побудова процесів та розвиток команди.',
    'lead.0.name': 'Відповідальність за якість',
    'lead.0.b0': 'Володіти та забезпечувати наскрізні quality gates на платформі',
    'lead.0.b1': 'Встановлювати, відстежувати та звітувати по метриках якості',
    'lead.0.b2': 'Очолювати defect triage та керувати життєвим циклом дефектів',
    'lead.0.b3': 'Переглядати ручні та автоматизовані тест-кейси на покриття та якість',
    'lead.0.b4': 'Володіти плануванням тестування для релізних ітерацій',
    'lead.1.name': 'Процеси та стандарти',
    'lead.1.b0': 'Постійно вдосконалювати QA-процеси відповідно до галузевих best practices',
    'lead.1.b1': 'Підтримувати та розвивати документацію процесів',
    'lead.1.b2': 'Проводити оцінку ризиків та ескалувати питання якості до стейкхолдерів',
    'lead.1.b3': 'Впроваджувати Test Case Management Systems (Xray, TestRail, QTest)',
    'lead.2.name': 'Кросфункціональна співпраця',
    'lead.2.b0': 'Будувати міцні робочі стосунки з командами Product та Engineering',
    'lead.2.b1': 'Бути основною точкою контакту QA у кросфункціональних ініціативах',
    'lead.3.name': 'Планування та доставка',
    'lead.3.b0': 'Визначати пріоритети команди та керувати розподілом навантаження',
    'lead.3.b1': 'Оцінювати зусилля QA по проєктах',
    'lead.3.b2': 'Призначати завдання та контролювати виконання у строк',
    'lead.4.name': 'Робота з людьми',
    'lead.4.b0': 'Проводити регулярні 1-2-1 для підтримки росту та благополуччя команди',
    'lead.4.b1': 'Очолювати онбординг нових членів команди',
    'lead.4.b2': 'Проводити щорічні та піврічні performance reviews',
    'lead.4.b3': 'Брати участь у співбесідах та найманні QA-кандидатів',

    'skills.title': 'Технічні навички',
    'skills.c0': 'Автоматизація — Веб',
    'skills.c1': 'Автоматизація — Мобільні',
    'skills.c2': 'Автоматизація — API та продуктивність',
    'skills.c4': 'AI-Agentic та AI-assisted QA',
    'skills.c5': 'Мови програмування',
    'skills.c6': 'CI/CD та DevOps',
    'skills.c7': 'Спостереження та аналітика',
    'skills.c8': 'Управління тестуванням',

    'edu.title': 'Освіта',
    'edu.degree': 'Бакалавр з радіоелектроніки',
    'edu.school': 'Харківський національний університет радіоелектроніки',

    'contact.title': 'Поговоримо\nпро роботу',
    'contact.sub': 'Відкритий до старших позицій QA Lead та інженера з автоматизації тестування.',
  },
};

/* ─── Language ───────────────────────────────────────────────────────────── */

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val === undefined) return;

    if (key === 'contact.title') {
      el.innerHTML = val.replace('\n', '<br>');
    } else if (val.includes('&amp;') || val.includes('&lt;')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.val === lang);
  });

  localStorage.setItem('cv-lang', lang);
}

function initLang() {
  const btn = document.getElementById('langToggle');
  const saved = localStorage.getItem('cv-lang') || 'en';
  applyLang(saved);

  btn.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'uk' : 'en');
  });
}


/* ─── Header scroll ──────────────────────────────────────────────────────── */

function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ─── Scroll reveal ──────────────────────────────────────────────────────── */

function initReveal() {
  const els = document.querySelectorAll('.reveal, .about-item');
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Stagger siblings within same parent
          const siblings = [...el.parentElement.querySelectorAll('.reveal, .about-item')];
          const idx = siblings.indexOf(el);
          el.style.transitionDelay = `${idx * 0.07}s`;
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => io.observe(el));
}


/* ─── Smooth nav scroll ──────────────────────────────────────────────────── */

function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* ─── Init ───────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initHeader();
  initReveal();
  initNavScroll();
});
