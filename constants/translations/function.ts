import * as localization from "expo-localization";
import { I18n } from "i18n-js";

import en from "./en.json";
import es from "./es.json";

/**
 * Represents an instance of the I18n class.
 * remove localization for testing
 */
const il8n = new I18n({ es, en });
il8n.locale = localization.getLocales()[0].languageCode || "en";
il8n.enableFallback = true;

/**
 * Translates the given key using the il8n translation function.
 *
 * @param key - The key to be translated.
 * @returns The translated value for the given key.
 */
const language = (key: string): string => il8n.t(key);

export { language };
