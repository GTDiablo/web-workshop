import HuLang from './langs/hu.json'
import EnLang from './langs/en.json'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnLang
      },
      hu: {
        translation: HuLang
      }
    },
    lng: "hu", // if you're using a language detector, do not define the lng option
    fallbackLng: "hu",
    keySeparator: '.',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  export default i18n;