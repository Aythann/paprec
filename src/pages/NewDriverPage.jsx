import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import newDriverTranslations from "../data/translations/newDriverTranslations";
import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function NewDriverPage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";
  const translations =
    newDriverTranslations[languageKey] || newDriverTranslations.en;

  const [firstName, setFirstName] = useState(session.profile?.firstName || "");
  const [lastName, setLastName] = useState(session.profile?.lastName || "");
  const [company, setCompany] = useState(session.profile?.company || "");

  const canSave =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    company.trim().length > 0;

  const saveDriver = () => {
    if (!canSave) return;

    const newDriver = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      company: company.trim(),
    };

    updateSession({ profile: newDriver });
    navigate("/confirm-new-driver");
  };

  return (
    <main className="page driver-form-page">
      <Header title={translations.title} />
      <ProgressBar step={3} />

      <section className="driver-form">
        <label className="driver-form__field">
          <span>{translations.firstName}</span>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>

        <label className="driver-form__field">
          <span>{translations.lastName}</span>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>

        <label className="driver-form__field">
          <span>{translations.company}</span>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={saveDriver}
          disabled={!canSave}
          className="driver-form__button"
        >
          {translations.validateButton}
        </button>
      </section>
    </main>
  );
}