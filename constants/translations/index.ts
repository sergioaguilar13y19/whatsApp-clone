//import { language } from "./function";
import * as localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    unknown: "",
    welcome: "Welcome to WhatsApp Clone",
    read: "Read our",
    privacy: "Privacy Policy",
    terms: "Tap 'Agree and continue' to accept the",
    termsEnd: "WhatsApp Terms of Service",
    accept: "Agree & Continue",
    titleRegister: "Enter Your Phone Number",
    advisementAge:
      "You must be 16 years or older to register. Learn how WhatsApp works with the Meta Companies.",
    verify: "Whatsapp will need to verify your account with a code.",
  },
  es: {
    unknown: "",
    welcome: "Bienvenido a WhatsApp Clone",
    read: "Lea nuestra",
    privacy: "Política de privacidad",
    terms: "Toque 'Aceptar y continuar' para aceptar los",
    termsEnd: "Términos de servicio",
    accept: "Aceptar y Continuar",
    titleRegister: "Ingrese su número de teléfono",
    advisementAge:
      "Debes tener 16 años o más para registrarte. Conoce cómo WhatsApp trabaja con las empresas de Meta.",
    verify: "Whatsapp necesitará verificar tu cuenta con un código.",
  },
};

const il8n = new I18n(translations);
il8n.locale = localization.getLocales()[0].languageCode || "en";
il8n.enableFallback = true;
const language = (key: string): string => il8n.t(key);

const WORDS_SCREENS = {
  Welcome: {
    welcome: language("welcome"),
    description: {
      read: language("read"),
      privacy: language("privacy"),
      terms: language("terms"),
      termsEnd: language("termsEnd"),
    },
    accept: language("accept"),
  },
  register: {
    title: language("titleRegister"),
    advisement: language("advisementAge"),
    verify: language("verify"),
  },
};

export { WORDS_SCREENS };
