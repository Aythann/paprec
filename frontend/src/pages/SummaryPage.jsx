import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

import { useApp } from "../context/AppContext";
import SummaryTranslations from "../data/translations/SummaryTranslations";
import vehiclePageTranslations from "../data/translations/VehiclePageTranslations";
import {
  addActiveSession,
  removeActiveSession,
} from "../data/storage/activeSessions";

import Header from "../components/common/Header";
import SignaturePad from "../components/common/SignaturePad";

export default function SummaryPage() {
  const navigate = useNavigate();
  const { session, updateSession, resetSession } = useApp();

  const languageKey = session.language?.key || "en";
  const isExitSession = session.sessionType === "exit";

  const translations =
    SummaryTranslations[languageKey] || SummaryTranslations.en;

  const vehicleTranslations =
    vehiclePageTranslations[languageKey] || vehiclePageTranslations.en;

  const getTranslatedValue = (items, key) => {
    if (!key) return "-";

    const item = items.find((currentItem) => currentItem.key === key);

    return item?.label || key;
  };

  const translatedEquipment = getTranslatedValue(
    vehicleTranslations.equipmentTypes,
    session.equipmentType,
  );

  const translatedPackaging = getTranslatedValue(
    vehicleTranslations.packagingTypes,
    session.packagingType,
  );

  const translatedMaterial = getTranslatedValue(
    vehicleTranslations.materialTypes,
    session.materialType,
  );

  const hasSignature = Boolean(session.signature);

  const updateSignature = (signature) => {
    updateSession({
      signature,
    });
  };

  const validateSession = () => {
    if (!hasSignature) return;

    const validationTime = new Date().toLocaleString();

    if (isExitSession) {
      updateSession({
        exitTime: validationTime,
        exitSignature: session.signature,
        endTime: validationTime,
      });

      removeActiveSession(session.activeSessionId);
      return;
    }

    updateSession({
      endTime: validationTime,
    });

    addActiveSession({
      ...session,
      endTime: validationTime,
    });
  };

  const closeSession = () => {
    resetSession();
    navigate("/");
  };

  return (
    <main className="page summary-page">
      <Header
        title={
          isExitSession
            ? translations.exitTitle || "Sortie chauffeur"
            : translations.title
        }
      />

      <section className="summary-page__content">
        {!isExitSession && (
          <div className="summary-page__warning">
            <div className="summary-page__warning-header">
              <TriangleAlert size={38} />
              <p>{translations.warningTitle}</p>
            </div>

            <p className="summary-page__warning-main">
              {translations.warningMain}
            </p>

            <p>{translations.warningText1}</p>

            <p>{translations.warningText2}</p>
          </div>
        )}

        <div className="summary-page__card">
          <div className="summary-page__rows">
            <p>
              <strong>{translations.labels.language}:</strong>{" "}
              {session.language?.name || "-"}
            </p>

            <p>
              <strong>{translations.labels.lastName}:</strong>{" "}
              {session.profile?.lastName || "-"}
            </p>

            <p>
              <strong>{translations.labels.firstName}:</strong>{" "}
              {session.profile?.firstName || "-"}
            </p>

            <p>
              <strong>{translations.labels.company}:</strong>{" "}
              {session.profile?.company || "-"}
            </p>

            <p>
              <strong>{translations.labels.equipment}:</strong>{" "}
              {translatedEquipment}
            </p>

            <p>
              <strong>{translations.labels.packaging}:</strong>{" "}
              {translatedPackaging}
            </p>

            <p>
              <strong>{translations.labels.material}:</strong>{" "}
              {translatedMaterial}
            </p>

            <p>
              <strong>{translations.labels.arrival}:</strong>{" "}
              {session.startTime || translations.notRegistered}
            </p>

            <p>
              <strong>
                {isExitSession
                  ? translations.labels.departure || "Sortie"
                  : translations.labels.validation}
                :
              </strong>{" "}
              {session.endTime || translations.notRegistered}
            </p>
          </div>

          {!session.endTime && (
            <div className="summary-page__signature">
              <h2 className="summary-page__signature-title">
                {isExitSession
                  ? translations.exitSignatureTitle ||
                    "Signature de sortie du chauffeur"
                  : translations.signatureTitle}
              </h2>

              <SignaturePad
                value={session.signature}
                onChange={updateSignature}
                hint={translations.signatureHint}
                clearLabel={translations.clearButton}
              />

              <button
                type="button"
                onClick={validateSession}
                disabled={!hasSignature}
                className="summary-page__button summary-page__button--validate"
              >
                {isExitSession
                  ? translations.exitValidateButton || "Valider la sortie"
                  : translations.validateButton}
              </button>
            </div>
          )}

          {session.endTime && (
            <div className="summary-page__signed">
              <h2 className="summary-page__signature-title">
                {translations.signatureSaved}
              </h2>

              {session.signature && (
                <img
                  src={session.signature}
                  alt={translations.signatureTitle}
                  className="summary-page__signature-preview"
                />
              )}

              <button
                type="button"
                onClick={closeSession}
                className="summary-page__button summary-page__button--close"
              >
                {translations.closeButton}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}