import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import { languages } from "../data/languages/languages";
import { useApp } from "../context/AppContext";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { updateSession } = useApp();

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectLanguage = (language) => {
    updateSession({
      language,

      startTime: new Date().toLocaleString(),

      sessionType: "",

      profile: null,

      activeSessionId: null,

      equipmentType: "",
      packagingType: "",
      materialType: "",

      quizAnswers: [],

      safetyAccepted: false,

      signature: null,

      entryValidationTime: null,
      entrySignature: null,

      exitSignature: null,
      exitTime: null,

      endTime: null,
    });

    navigate("/session-type");
  };

  return (
    <main className="page home-page">
      <Header title="Select Language" />

      <ProgressBar step={1} />

      <section className="home-page__content">
        <div className="home-page__search">
          <Search size={30} className="home-page__search-icon" />

          <input
            type="text"
            placeholder="Search language..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="home-page__search-input"
          />
        </div>

        <div className="home-page__grid">
          {filteredLanguages.map((language) => (
            <button
              key={language.name}
              type="button"
              onClick={() => selectLanguage(language)}
              className="home-page__card"
            >
              <img
                src={language.image}
                alt={language.name}
                className="home-page__flag"
              />

              <span className="home-page__name">
                {language.name}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}