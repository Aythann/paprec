import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";
import { useApp } from "../context/AppContext";
import editDriverTranslations from "../data/translations/editDriverTranslations";
import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function EditDriverPage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";
  const translations =
    editDriverTranslations[languageKey] || editDriverTranslations.en;

  const [editableField, setEditableField] = useState(null);
  const [firstName, setFirstName] = useState(session.profile?.firstName || "");
  const [lastName, setLastName] = useState(session.profile?.lastName || "");
  const [company, setCompany] = useState(session.profile?.company || "");

  useEffect(() => {
    if (!session.profile) {
      navigate("/search");
    }
  }, [session.profile, navigate]);

  if (!session.profile) return null;

  const canValidate =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    company.trim().length > 0;

  const validateProfile = () => {
    if (!canValidate) return;

    updateSession({
      profile: {
        ...session.profile,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        company: company.trim(),
      },
    });

    navigate("/vehicle");
  };

  return (
    <main className="page edit-driver-page">
      <Header title={translations.title} />
      <ProgressBar step={4} />

      <section className="edit-driver-page__content">
        <article className="edit-driver-page__card">
          <p className="edit-driver-page__intro">{translations.intro}</p>

          <div className="edit-driver-page__fields">
            <label className="edit-driver-page__field">
              <span>{translations.firstName}</span>

              <div className="edit-driver-page__control">
                <input
                  type="text"
                  value={firstName}
                  readOnly={editableField !== "firstName"}
                  onChange={(event) => setFirstName(event.target.value)}
                  className={`edit-driver-page__input ${
                    editableField === "firstName"
                      ? "edit-driver-page__input--editable"
                      : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setEditableField("firstName")}
                  className="edit-driver-page__edit-button"
                  aria-label={translations.editLabel}
                >
                  <Pencil size={24} />
                </button>
              </div>
            </label>

            <label className="edit-driver-page__field">
              <span>{translations.lastName}</span>

              <div className="edit-driver-page__control">
                <input
                  type="text"
                  value={lastName}
                  readOnly={editableField !== "lastName"}
                  onChange={(event) => setLastName(event.target.value)}
                  className={`edit-driver-page__input ${
                    editableField === "lastName"
                      ? "edit-driver-page__input--editable"
                      : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setEditableField("lastName")}
                  className="edit-driver-page__edit-button"
                  aria-label={translations.editLabel}
                >
                  <Pencil size={24} />
                </button>
              </div>
            </label>

            <label className="edit-driver-page__field">
              <span>{translations.company}</span>

              <div className="edit-driver-page__control">
                <input
                  type="text"
                  value={company}
                  readOnly={editableField !== "company"}
                  onChange={(event) => setCompany(event.target.value)}
                  className={`edit-driver-page__input ${
                    editableField === "company"
                      ? "edit-driver-page__input--editable"
                      : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setEditableField("company")}
                  className="edit-driver-page__edit-button"
                  aria-label={translations.editLabel}
                >
                  <Pencil size={24} />
                </button>
              </div>
            </label>
          </div>

          <button
            type="button"
            onClick={validateProfile}
            disabled={!canValidate}
            className="edit-driver-page__validate-button"
          >
            {translations.validateButton}
          </button>
        </article>
      </section>
    </main>
  );
}