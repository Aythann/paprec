import { useState } from "react";
import { useLocation } from "react-router-dom";
import { languages } from "../../data/languages/languages";
import { useApp } from "../../context/AppContext";
import icon from "/Paprec_Logo.png";

export default function Header({ title }) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();
  const { session, updateSession } = useApp();

  const showLanguageSelect = location.pathname !== "/" && session.language;

  const changeLanguage = (language) => {
    updateSession({ language });
    setIsLanguageOpen(false);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title">{title}</h1>

      <div className="app-header__right">
        {showLanguageSelect && (
          <div className="app-header__language">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((current) => !current)}
              className="app-header__language-trigger"
            >
              <span>{session.language.name}</span>
              <span className="app-header__language-chevron">▾</span>
            </button>

            {isLanguageOpen && (
              <div className="app-header__language-menu">
                {languages.map((language) => (
                  <button
                    key={language.name}
                    type="button"
                    onClick={() => changeLanguage(language)}
                    className={`app-header__language-option ${
                      session.language.name === language.name
                        ? "app-header__language-option--active"
                        : ""
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="app-header__brand">
          <img src={icon} alt="Paprec Logo" className="app-header__logo" />
          <p className="app-header__label">Sens</p>
        </div>
      </div>
    </header>
  );
}