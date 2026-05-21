export default function SafetyRule({ image, text }) {
  return (
    <article className="safety-rule">
      {image && <img src={image} alt="" className="safety-rule__image" />}
      <p className="safety-rule__text">{text}</p>
    </article>
  );
}