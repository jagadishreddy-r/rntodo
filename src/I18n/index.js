import i18n from "i18n-js";

import en from "./en.json";
import tel from "./tel.json";
import hin from "./hin.json";

i18n.defaultLocale = "en";
i18n.locale = "en";
i18n.fallbacks = true;
i18n.translations = { en, tel, hin };

export default i18n;
