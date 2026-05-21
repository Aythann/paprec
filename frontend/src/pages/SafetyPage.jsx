import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";
import SafetyRulesTranslations from "../data/translations/SafetyRulesTranslations";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import SafetyBox from "../components/safety/SafetyBox";
import SafetyRule from "../components/safety/SafetyRule";

import { risksImages } from "../data/safety/risks";
import { obligationsImages } from "../data/safety/obligations";
import { prohibitionsImages } from "../data/safety/prohibitions";
import { rulesImages } from "../data/safety/rules";

const safetyBoxImages = {
  risk: risksImages,
  obligation: obligationsImages,
  prohibition: prohibitionsImages,
};

export default function SafetyPage() {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";

  const translations =
    SafetyRulesTranslations[languageKey] || SafetyRulesTranslations.en;

  const validateSafety = () => {
    if (!checked) return;

    updateSession({
      safetyAccepted: true,
    });

    navigate("/specific-rules");
  };

  return (
    <main className="page safety-page">
      <Header title={translations.pageTitle} />
      <ProgressBar step={5} />

      <section className="safety-page__content">
        <div className="safety-page__boxes">
          {translations.sections.map((section) => (
            <SafetyBox
              key={section.variant}
              title={section.title}
              variant={section.variant}
              images={safetyBoxImages[section.variant]}
              items={section.items}
            />
          ))}
        </div>

        <h2 className="safety-page__rules-title">
          {translations.rulesTitle}
        </h2>

        <div className="safety-rules">
          <div className="safety-rules__row safety-rules__row--top">
            {translations.rules.slice(0, 3).map((rule, index) => (
              <SafetyRule
                key={rule}
                image={rulesImages[index]}
                text={rule}
              />
            ))}
          </div>

          <div className="safety-rules__row safety-rules__row--bottom">
            {translations.rules.slice(3, 5).map((rule, index) => (
              <SafetyRule
                key={rule}
                image={rulesImages[index + 3]}
                text={rule}
              />
            ))}
          </div>
        </div>

        <div className="safety-page__confirm">
          <label className="safety-page__checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />

            <span>{translations.checkboxText}</span>
          </label>

          <button
            type="button"
            onClick={validateSafety}
            disabled={!checked}
            className="safety-page__button"
          >
            {translations.buttonText}
          </button>
        </div>

        <footer className="safety-page__footer">
          {translations.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </footer>
      </section>
    </main>
  );
}