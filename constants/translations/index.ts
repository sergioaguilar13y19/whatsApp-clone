import { language } from "./function";

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
};

export { WORDS_SCREENS };
