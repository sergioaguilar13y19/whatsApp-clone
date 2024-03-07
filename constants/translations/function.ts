import * as localization from "expo-localization";
import { I18n } from "i18n-js";
import es from "./es.json";
import en from "./en.json";

const il8n = new I18n({ en, es });
il8n.locale = localization.getLocales()[0].languageCode || "en";
il8n.enableFallback = true;
const language = (key: string) => il8n.t(key);

export { language };