import i18n from "i18n-js";

import en from "./en.json";
import tel from "./tel.json";

i18n.defaultLocale = "tel";
i18n.locale = "tel";
i18n.fallbacks = true;
i18n.translations = { en, tel };

export default i18n;
