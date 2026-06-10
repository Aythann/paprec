import {
  commonQuizQuestions,
  equipmentQuizQuestions,
} from "./quizQuestions";

import quizTranslations from "./translations";

const DEFAULT_LANGUAGE = "en";

const shuffleArray = (items) => {
  return [...items].sort(() => Math.random() - 0.5);
};

const getTranslation = (translations, questionId) => {
  return (
    translations.questions[questionId] ||
    quizTranslations[DEFAULT_LANGUAGE].questions[questionId]
  );
};

const hydrateQuestion = ({ question, translations }) => {
  const translatedQuestion = getTranslation(translations, question.id);

  return {
    id: question.id,
    question: translatedQuestion.question,
    choices: translatedQuestion.choices,
    why: translatedQuestion.why,
    answer: question.answer,
  };
};

export const buildQuiz = ({
  languageKey = DEFAULT_LANGUAGE,
  equipmentType,
  commonCount = 2,
  specificCount = 2,
}) => {
  const translations =
    quizTranslations[languageKey] || quizTranslations[DEFAULT_LANGUAGE];

  const commonQuestions = shuffleArray(commonQuizQuestions).slice(
    0,
    commonCount,
  );

  const specificQuestions = shuffleArray(
    equipmentQuizQuestions[equipmentType] || [],
  ).slice(0, specificCount);

  return [...commonQuestions, ...specificQuestions].map((question) =>
    hydrateQuestion({
      question,
      translations,
    }),
  );
};

export const getQuizTranslations = (languageKey = DEFAULT_LANGUAGE) => {
  return quizTranslations[languageKey] || quizTranslations[DEFAULT_LANGUAGE];
};