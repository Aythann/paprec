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
          <SafetyBox
            title={translations.sections[0].title}
            variant={translations.sections[0].variant}
            images={risksImages}
            items={translations.sections[0].items}
          />

          <SafetyBox
            title={translations.sections[1].title}
            variant={translations.sections[1].variant}
            images={obligationsImages}
            items={translations.sections[1].items}
          />

          <SafetyBox
            title={translations.sections[2].title}
            variant={translations.sections[2].variant}
            images={prohibitionsImages}
            items={translations.sections[2].items}
          />
        </div>

        <h2 className="safety-page__rules-title">
          {translations.rulesTitle}
        </h2>

        <div className="safety-rules">
          {translations.rules.map((rule, index) => (
            <SafetyRule
              key={rule}
              image={rulesImages[index]}
              text={rule}
            />
          ))}
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
      </section>
    </main>
  );
}