import * as localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    welcome: "Welcome to WhatsApp Clone",
    read: "Read our",
    privacy: "Privacy Policy",
    terms: "Tap 'Agree and continue' to accept the",
    termsEnd: "WhatsApp Terms of Service",
    accept: "Agree and continue",
  },
  es: {
    welcome: "Bienvenido a WhatsApp Clone",
    read: "Lea nuestra",
    privacy: "Política de privacidad",
    terms: "Toque 'Aceptar y continuar' para aceptar los",
    termsEnd: "Términos de servicio",
    accept: "Aceptar y continuar",
  },
};

const il8n = new I18n(translations);
il8n.locale = localization.getLocales()[0].languageCode || "en";
il8n.enableFallback = true;
const languaje = (key: string) => il8n.t(key);

const WORDS_SCREENS = {
  Welcome: {
    welcome: languaje("welcome"),
    description: {
      read: languaje("read"),
      privacy: languaje("privacy"),
      terms: languaje("terms"),
      termsEnd: languaje("termsEnd"),
    },
    accept: languaje("accept"),
  },
};

export { WORDS_SCREENS };
