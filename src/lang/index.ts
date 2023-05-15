import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RICKY from "./locales/ricky";
import getEnvConfig from "../utils/config";

const { VITE_RESUME_OWNER } = getEnvConfig();

i18n.use(initReactI18next).init({
  resources: {
    RICKY: { translation: RICKY }
  },
  fallbackLng: VITE_RESUME_OWNER,
  preload: ["RICKY"], //在这里添加你们的locales表
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
