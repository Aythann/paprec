function getImageRows(variant, images) {
  if (variant === "risk") {
    return [images.slice(0, 3), images.slice(3, 5), images.slice(5, 7)];
  }

  if (variant === "obligation") {
    return [images.slice(0, 3), images.slice(3, 5)];
  }

  if (variant === "prohibition") {
    return [images.slice(0, 3), images.slice(3, 6)];
  }

  return [images];
}

export default function SafetyBox({ title, variant, images = [], items = [] }) {
  const imageRows = getImageRows(variant, images);

  return (
    <article className={`safety-box safety-box--${variant}`}>
      <h2 className="safety-box__title">{title}</h2>

      <div className={`safety-box__images safety-box__images--${variant}`}>
        {imageRows.map((row, rowIndex) => (
          <div
            key={`${variant}-row-${rowIndex}`}
            className={`safety-box__image-row safety-box__image-row--${
              rowIndex + 1
            }`}
          >
            {row.map((image) => (
              <img key={image} src={image} alt="" className="safety-box__image" />
            ))}
          </div>
        ))}
      </div>

      <ul className="safety-box__list">
        {items.map((item) => (
          <li key={item} className="safety-box__item">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}