const translations = {
  ar: {
    header: "الجهة الحكومية",
    navHome: "الرئيسية",
    navAbout: "عن الجهة",
    navServices: "الخدمات",
    navNews: "الأخبار",
    navContact: "تواصل معنا",
    toggleLabel: "English",
    welcome: "مرحباً بكم في بوابة الجهة الحكومية",
    description: "نسعى لتقديم خدمات إلكترونية متكاملة للمواطنين والمقيمين بكفاءة وشفافية.",
    servicesTitle: "خدماتنا",
    service1: "خدمة إصدار الوثائق",
    service2: "خدمة متابعة الطلبات",
    service3: "مركز الدعم والمساعدة",
    footer: "جميع الحقوق محفوظة &copy; 2025 - الجهة الحكومية",
    aboutTitle: "عن الجهة",
    aboutDescription: "هذه الصفحة تحتوي على معلومات عن الجهة الحكومية."
  },
  en: {
    header: "Government Authority",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navNews: "News",
    navContact: "Contact Us",
    toggleLabel: "العربية",
    welcome: "Welcome to the Government Authority Portal",
    description: "We strive to provide integrated e-services for citizens and residents efficiently and transparently.",
    servicesTitle: "Our Services",
    service1: "Document Issuance",
    service2: "Request Tracking",
    service3: "Support & Help Center",
    footer: "All rights reserved &copy; 2025 - Government Authority",
    aboutTitle: "About the Authority",
    aboutDescription: "This page contains information about the government authority."
  }
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.title = t.header;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
 
  localStorage.setItem("lang", lang);

  setText("headerTitle", t.header);
  setText("navHome", t.navHome);
  setText("navAbout", t.navAbout);
  setText("navServices", t.navServices);
  setText("navNews", t.navNews);
  setText("navContact", t.navContact);
  setText("langToggle", t.toggleLabel);
  setHTML("footerText", t.footer);

  setText("heroTitle", t.welcome);
  setText("heroDesc", t.description);
  setText("servicesTitle", t.servicesTitle);
  setText("service1", t.service1);
  setText("service2", t.service2);
  setText("service3", t.service3);

  setText("aboutTitle", t.aboutTitle);
  setText("aboutDescription", t.aboutDescription);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  setLanguage(savedLang);

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === "ar" ? "en" : "ar";
      setLanguage(newLang);
    });
  }
});
