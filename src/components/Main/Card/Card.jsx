import "./Card.scss";

export default function Card({title, img, screenSize}) {
  const gradientDeg = screenSize > 1000 ? "to top" : "to right";

  return (
    <div
      className="creation-card"
      style={{
        backgroundImage: `linear-gradient(${gradientDeg}, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0)), url(${
          screenSize > 1000 ? img.desktop : img.mobile
        })`
      }}
      alt={img.alt}
      tabIndex="0"
    >
      <h3>{title.toUpperCase()}</h3>
    </div>
  );
}
