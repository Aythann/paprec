export default function QuizQuestion({
  question,
  selected,
  onSelect,
  showError,
  locked,
  whyLabel,
  onReadQuestion,
}) {
  return (
    <article className="quiz-question">

      <div className="quiz-question__header">
        <h2 className="quiz-question__title">
          {question.question}
        </h2>

        <button
          type="button"
          onClick={() => onReadQuestion(question)}
          className="quiz-question__speech"
        >
          🔊
        </button>
      </div>

      <div className="quiz-question__choices">
        {question.choices.map((choice, index) => (
          <button
            key={choice}
            type="button"
            disabled={locked}
            onClick={() => onSelect(index)}
            className={`quiz-question__choice ${
              selected === index ? "quiz-question__choice--selected" : ""
            }`}
          >
            {choice}
          </button>
        ))}
      </div>

      {showError && (
        <div className="quiz-question__error">
          <strong>{whyLabel}</strong>
          <p>{question.why}</p>
        </div>
      )}
    </article>
  );
}