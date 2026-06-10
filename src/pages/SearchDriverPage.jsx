import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

import { profiles } from "../data/profiles/profiles";
import { useApp } from "../context/AppContext";
import searchDriverTranslations from "../data/translations/searchDriverTranslations";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import SearchBar from "../components/common/SearchBar";

const MIN_SEARCH_LENGTH = 2;

export default function SearchDriverPage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";

  const translations =
    searchDriverTranslations[languageKey] || searchDriverTranslations.en;

  const normalizedSearch = search.trim().toLowerCase();
  const canSearch = normalizedSearch.length >= MIN_SEARCH_LENGTH;

  const filteredProfiles = canSearch
    ? profiles.filter((profile) =>
        `${profile.firstName} ${profile.lastName} ${profile.company}`
          .toLowerCase()
          .includes(normalizedSearch),
      )
    : [];

  const selectProfile = (profile) => {
    updateSession({ profile });
    navigate("/confirm-driver");
  };

  return (
    <main className="page search-driver-page">
      <Header title={translations.title} />
      <ProgressBar step={3} />

      <section className="search-driver-page__content">
        <div className="search-driver-page__toolbar">
          <button
            type="button"
            onClick={() => navigate("/session-type")}
            className="search-driver-page__back"
            aria-label="Retour"
          >
            <ArrowLeft size={34} strokeWidth={3} />
          </button>

          <SearchBar
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={translations.placeholder}
          />

          <button
            type="button"
            onClick={() => navigate("/new-driver")}
            className="search-driver-page__new-button"
          >
            {translations.createProfileButton}
          </button>
        </div>

        {!canSearch && (
          <div className="search-driver-page__empty">
            <p>{translations.startSearch}</p>
          </div>
        )}

        {canSearch && filteredProfiles.length === 0 && (
          <div className="search-driver-page__empty">
            <h2>{translations.notFoundTitle}</h2>
            <p>{translations.notFoundText}</p>
          </div>
        )}

        {canSearch && filteredProfiles.length > 0 && (
          <div className="search-driver-page__list">
            {filteredProfiles.map((profile) => (
              <button
                key={profile.id}
                type="button"
                onClick={() => selectProfile(profile)}
                className="search-driver-page__item"
              >
                <div className="search-driver-page__identity">
                  <div className="search-driver-page__name">
                    <User size={28} />

                    <span>
                      {profile.firstName} {profile.lastName}
                    </span>
                  </div>

                  <p className="search-driver-page__company">
                    {profile.company}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}