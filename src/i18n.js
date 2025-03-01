import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          logo: "Logo",
          home: "Home",
          about: "About",
          contact: "Contact",
        },
      },
      ar: {
        translation: {
          logo: "الشعار",
          home: "الرئيسية",
          about: "من نحن",
          contact: "اتصل بنا",
        },
      },
    },
    lng: localStorage.getItem("language") || "en", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
