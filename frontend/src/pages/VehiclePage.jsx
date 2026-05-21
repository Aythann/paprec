import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";

import vehiclePageTranslations from "../data/translations/VehiclePageTranslations";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function VehiclePage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";

  const translations =
    vehiclePageTranslations[languageKey] || vehiclePageTranslations.en;

  const canValidate =
    Boolean(session.equipmentType) &&
    Boolean(session.packagingType) &&
    Boolean(session.materialType);

  const selectOption = (key, value) => {
    updateSession({
      [key]: value,
    });
  };

  const validateVehicle = () => {
    if (!canValidate) return;

    navigate("/safety");
  };

  return (
    <main className="page vehicle-page">
      <Header title={translations.title} />
      <ProgressBar step={5} />

      <section className="vehicle-page__content">
        <div className="vehicle-page__group">
          <h2 className="vehicle-page__title">
            {translations.equipmentTitle}
          </h2>

          <div className="vehicle-page__grid vehicle-page__grid--two">
            {translations.equipmentTypes.map((equipmentType) => (
              <button
                key={equipmentType.key}
                type="button"
                onClick={() =>
                  selectOption("equipmentType", equipmentType.key)
                }
                className={`vehicle-page__option ${
                  session.equipmentType === equipmentType.key
                    ? "vehicle-page__option--selected"
                    : ""
                }`}
              >
                {equipmentType.label}
              </button>
            ))}
          </div>
        </div>

        <div className="vehicle-page__group">
          <h2 className="vehicle-page__title">
            {translations.packagingTitle}
          </h2>

          <div className="vehicle-page__grid vehicle-page__grid--four">
            {translations.packagingTypes.map((packagingType) => (
              <button
                key={packagingType.key}
                type="button"
                onClick={() =>
                  selectOption("packagingType", packagingType.key)
                }
                className={`vehicle-page__option vehicle-page__option--small ${
                  session.packagingType === packagingType.key
                    ? "vehicle-page__option--selected"
                    : ""
                }`}
              >
                {packagingType.label}
              </button>
            ))}
          </div>
        </div>

        <div className="vehicle-page__group">
          <h2 className="vehicle-page__title">
            {translations.materialTitle}
          </h2>

          <div className="vehicle-page__grid vehicle-page__grid--three">
            {translations.materialTypes.map((materialType) => (
              <button
                key={materialType.key}
                type="button"
                onClick={() =>
                  selectOption("materialType", materialType.key)
                }
                className={`vehicle-page__option vehicle-page__option--small ${
                  session.materialType === materialType.key
                    ? "vehicle-page__option--selected"
                    : ""
                }`}
              >
                {materialType.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={validateVehicle}
          disabled={!canValidate}
          className="vehicle-page__validate"
        >
          {translations.validateButton}
        </button>
      </section>
    </main>
  );
}