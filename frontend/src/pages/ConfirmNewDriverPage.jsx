import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserRoundCheck } from "lucide-react";
import { useApp } from "../context/AppContext";
import confirmNewDriverTranslations from "../data/translations/confirmNewDriverTranslations";
import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function ConfirmNewDriverPage() {
  const navigate = useNavigate();
  const { session } = useApp();

  const languageKey = session.language?.key || "en";
  const translations =
    confirmNewDriverTranslations[languageKey] ||
    confirmNewDriverTranslations.en;

  useEffect(() => {
    if (!session.profile) {
      navigate("/new-driver");
    }
  }, [session.profile, navigate]);

  if (!session.profile) return null;

  const continueFlow = () => {
    navigate("/vehicle");
  };

  const editProfile = () => {
    navigate("/new-driver");
  };

  return (
    <main className="page confirm-driver-page">
      <Header title={translations.title} />
      <ProgressBar step={4} />

      <section className="confirm-driver-page__content">
        <article className="confirm-driver-page__card">
          <UserRoundCheck size={74} className="confirm-driver-page__icon" />

          <h2 className="confirm-driver-page__question">
            {translations.question}
          </h2>

          <div className="confirm-driver-page__infos">
            <p>
              <strong>{translations.firstName}:</strong>{" "}
              {session.profile.firstName}
            </p>
            <p>
              <strong>{translations.lastName}:</strong>{" "}
              {session.profile.lastName}
            </p>
            <p>
              <strong>{translations.company}:</strong>{" "}
              {session.profile.company}
            </p>
          </div>

          <div className="confirm-driver-page__actions">
            <button
              type="button"
              onClick={continueFlow}
              className="confirm-driver-page__button confirm-driver-page__button--yes"
            >
              {translations.continueButton}
            </button>

            <button
              type="button"
              onClick={editProfile}
              className="confirm-driver-page__button confirm-driver-page__button--no"
            >
              {translations.editButton}
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}