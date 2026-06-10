import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

import { useApp } from "../context/AppContext";
import { getActiveSessions } from "../data/storage/activeSessions";
import DepartureTranslations from "../data/translations/DepartureTranslations";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import SearchBar from "../components/common/SearchBar";

const MIN_SEARCH_LENGTH = 2;

export default function DeparturePage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const languageKey = session.language?.key || "en";

  const translations =
    DepartureTranslations[languageKey] || DepartureTranslations.en;

  const activeSessions = useMemo(() => getActiveSessions(), []);

  const normalizedSearch = search.trim().toLowerCase();
  const canSearch = normalizedSearch.length >= MIN_SEARCH_LENGTH;

  const filteredSessions = canSearch
    ? activeSessions.filter((activeSession) =>
        `${activeSession.profile?.firstName || ""} ${
          activeSession.profile?.lastName || ""
        } ${activeSession.profile?.company || ""}`
          .toLowerCase()
          .includes(normalizedSearch),
      )
    : activeSessions;

  const selectActiveSession = (activeSession) => {
    updateSession({
      ...activeSession,
      activeSessionId: activeSession.id,
      sessionType: "exit",
      signature: null,
      exitSignature: null,
      exitTime: null,
      endTime: null,
    });

    navigate("/summary");
  };

  return (
    <main className="page departure-page">
      <Header title={translations.title} />
      <ProgressBar step={3} />

      <section className="departure-page__content">
        <div className="departure-page__layout">
          <button
            type="button"
            onClick={() => navigate("/session-type")}
            className="departure-page__back"
            aria-label={translations.backLabel}
          >
            <ArrowLeft size={34} strokeWidth={3} />
          </button>

          <div className="departure-page__card">
            <h2 className="departure-page__title">
              {translations.pageTitle}
            </h2>

            <p className="departure-page__text">{translations.intro}</p>

            <SearchBar
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={translations.placeholder}
            />

            {activeSessions.length === 0 && (
              <div className="departure-page__empty">
                {translations.emptyText}
              </div>
            )}

            {activeSessions.length > 0 && filteredSessions.length === 0 && (
              <div className="departure-page__empty">
                {translations.notFoundText}
              </div>
            )}

            {filteredSessions.length > 0 && (
              <div className="departure-page__list">
                {filteredSessions.map((activeSession) => (
                  <button
                    key={activeSession.id}
                    type="button"
                    onClick={() => selectActiveSession(activeSession)}
                    className="departure-page__item"
                  >
                    <div className="departure-page__identity">
                      <div className="departure-page__name">
                        <User size={28} />

                        <span>
                          {activeSession.profile?.firstName}{" "}
                          {activeSession.profile?.lastName}
                        </span>
                      </div>

                      <p className="departure-page__company">
                        {activeSession.profile?.company}
                      </p>

                      <p className="departure-page__arrival">
                        {translations.arrivalLabel} :{" "}
                        {activeSession.startTime || "-"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}