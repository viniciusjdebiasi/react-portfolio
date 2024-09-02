import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import itTranslation from '../../public/languages/it.json'
import ptTranslation from '../../public/languages/pt.json'
import enTranslation from '../../public/languages/en.json'

const resources = {
    it: { translation: itTranslation },
    pt: { translation: ptTranslation },
    en: { translation: enTranslation },
}

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        resources,
        interpolation: { escapeValue: false }
    })

export default i18n;