import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

import { specificRulesContent } from "../components/specific/specificRulesContent";
import SpecificRulesTranslations from "../data/translations/SpecificRulesTranslations";
import SafetyRulesTranslations from "../data/translations/SafetyRulesTranslations";

export default function SpecificRulesPage() {
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const { session } = useApp();

  const languageKey = session.language?.key || "en";

  const translations =
    SpecificRulesTranslations[languageKey] || SpecificRulesTranslations.en;

  const safetyTranslations =
    SafetyRulesTranslations[languageKey] || SafetyRulesTranslations.en;

  const content = specificRulesContent[session.equipmentType];
  const rules = translations.equipmentRules[session.equipmentType];

  const validateRules = () => {
    if (!checked) return;

    navigate("/quiz");
  };

  if (!content || !rules) {
    return (
      <main className="page specific-rules-page">
        <Header title={translations.pageTitle} />

        <ProgressBar step={7} />

        <section className="specific-rules-page__content">
          <div className="specific-rules-page__empty">
            <p>{translations.emptyText}</p>

            <button
              type="button"
              onClick={() => navigate("/vehicle")}
              className="specific-rules-page__button"
            >
              {translations.backButton}
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page specific-rules-page">
      <Header title={translations.pageTitle} />

      <ProgressBar step={7} />

      <section className="specific-rules-page__content">
        <div className="specific-rules-page__intro">
          <h2>{rules.title}</h2>

          <p>{translations.intro}</p>
        </div>

        <div className="specific-rules-page__sections">
          {content.sections.map((section) => (
            <article key={section.key} className="specific-rules-section">
              <h3 className="specific-rules-section__title">
                {rules.sections[section.key]}
              </h3>

              <div className="specific-rules-section__grid">
                {section.items.map((item) => (
                  <div key={item.key} className="specific-rule-card">
                    {item.image && (
                      <div className="specific-rule-card__image-box">
                        <img
                          src={item.image}
                          alt=""
                          className="specific-rule-card__image"
                        />
                      </div>
                    )}

                    {item.icons && (
                      <div className="specific-rule-card__icons">
                        {item.icons.map((icon) => (
                          <img
                            key={icon}
                            src={icon}
                            alt=""
                            className="specific-rule-card__icon"
                          />
                        ))}
                      </div>
                    )}

                    <p className="specific-rule-card__text">
                      {rules.items[item.key]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="safety-page__confirm">
          <label className="safety-page__checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />

            <span>{safetyTranslations.checkboxText}</span>
          </label>

          <button
            type="button"
            onClick={validateRules}
            disabled={!checked}
            className="safety-page__button"
          >
            {safetyTranslations.buttonText}
          </button>
        </div>
      </section>
    </main>
  );
}