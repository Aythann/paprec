import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildQuiz, getQuizTranslations } from "../data/quiz/buildQuiz";
import { useApp } from "../context/AppContext";

import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import QuizQuestion from "../components/quiz/QuizQuestion";

export default function QuizPage() {
  const navigate = useNavigate();
  const { session, updateSession } = useApp();

  const [showErrors, setShowErrors] = useState(false);

  const quizAnswers = session.quizAnswers || [];
  const languageKey = session.language?.key || "en";
  const speechLanguage = session.language?.speech || "en-GB";

  const translations = getQuizTranslations(languageKey);

  const quizQuestions = useMemo(() => {
    return buildQuiz({
      languageKey,
      equipmentType: session.equipmentType,
      commonCount: 2,
      specificCount: 2,
    });
  }, [languageKey, session.equipmentType]);

  useEffect(() => {
    updateSession({ quizAnswers: [] });
  }, []);

  const selectAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...quizAnswers];
    updatedAnswers[questionIndex] = answerIndex;

    updateSession({ quizAnswers: updatedAnswers });
  };

  const validateQuiz = () => {
    const hasError = quizQuestions.some(
      (question, index) => Number(quizAnswers[index]) !== question.answer,
    );

    if (hasError) {
      setShowErrors(true);
      return;
    }

    navigate("/summary");
  };

const readQuestion = (question) => {
  const text = [
    question.question,
    ...question.choices,
  ].join(". ");

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = speechLanguage || "en-GB";
    utterance.rate = 1;
    utterance.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const allAnswered =
    quizAnswers.filter((answer) => answer !== undefined).length ===
    quizQuestions.length;

  return (
    <main className="page quiz-page">
      <Header title={translations.pageTitle} />
      <ProgressBar step={8} />

      <section className="quiz-page__content">
        {quizQuestions.map((question, index) => (
          <div key={question.id}>
            <QuizQuestion
              question={question}
              selected={quizAnswers[index]}
              onSelect={(answer) => selectAnswer(index, answer)}
              showError={
                showErrors && Number(quizAnswers[index]) !== question.answer
              }
              locked={showErrors}
              whyLabel={translations.whyLabel}
              onReadQuestion={readQuestion}
            />
          </div>
        ))}

        <button
          type="button"
          disabled={!allAnswered && !showErrors}
          onClick={() => {
            if (showErrors) {
              navigate("/safety");
              return;
            }

            validateQuiz();
          }}
          className="quiz-page__validate"
        >
          {showErrors ? translations.retryButton : translations.validateButton}
        </button>
      </section>
    </main>
  );
}