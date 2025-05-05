import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English (US)</button>
      <button onClick={() => changeLanguage("en-GB")}>English (UK)</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
