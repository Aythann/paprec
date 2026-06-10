import { useNavigate } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";
import { useApp } from "../context/AppContext";
import sessionTypeTranslations from "../data/translations/sessionTypeTranslations";
import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function SessionTypePage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";
  const translations =
    sessionTypeTranslations[languageKey] || sessionTypeTranslations.en;

  const selectEntry = () => {
    updateSession({
      sessionType: "entry",
      endTime: null,
    });

    navigate("/search");
  };

  const selectExit = () => {
    updateSession({
      sessionType: "exit",
    });

    navigate("/departure");
  };

  return (
    <main className="page session-type-page">
      <Header title={translations.title} />
      <ProgressBar step={2} />

      <section className="session-type-page__grid">
        <button
          type="button"
          onClick={selectEntry}
          className="session-type-page__card"
        >
          <LogIn size={86} className="session-type-page__icon" />

          <span className="session-type-page__title">
            {translations.entry.title}
          </span>

          <span className="session-type-page__text">
            {translations.entry.description}
          </span>
        </button>

        <button
          type="button"
          onClick={selectExit}
          className="session-type-page__card"
        >
          <LogOut size={86} className="session-type-page__icon" />

          <span className="session-type-page__title">
            {translations.exit.title}
          </span>

          <span className="session-type-page__text">
            {translations.exit.description}
          </span>
        </button>
      </section>
    </main>
  );
}