export default function SafetyBox({ title, variant, images = [], items = [] }) {
  return (
    <article className={`safety-box safety-box--${variant}`}>
      <h2 className="safety-box__title">{title}</h2>

      <div className="safety-box__body">
        <div className={`safety-box__images safety-box__images--${variant}`}>
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt=""
              className="safety-box__image"
            />
          ))}
        </div>

        <div className="safety-box__separator" />

        <ul className="safety-box__list">
          {items.map((item) => (
            <li key={item} className="safety-box__item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}