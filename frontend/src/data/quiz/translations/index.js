import en from "./en";
import fr from "./fr";
import es from "./es";
import pt from "./pt";
import de from "./de";
import it from "./it";
import pl from "./pl";
import ro from "./ro";
import ru from "./ru";
import ua from "./ua";
import lt from "./lt";
import hr from "./hr";

const translations = {
  en,
  fr,
  es,
  pt,
  de,
  it,
  pl,
  ro,
  ru,
  ua,
  lt,
  hr,
};

const englishQuestions = en.questions;

Object.keys(translations).forEach((languageKey) => {
  if (languageKey === "en") return;

  translations[languageKey].questions = {
    ...englishQuestions,
    ...translations[languageKey].questions,
  };
});

export default translations;