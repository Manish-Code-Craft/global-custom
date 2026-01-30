export default function SectionHeading({
  name,
  headingClass
}) {
  return (
    <div className="section-heading ">
        <h2 className="marque flex" id={headingClass}>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
          <span className="heading-text">{name}</span>
          <span className="heading-text outline-text">{name}</span>
        </h2>
    </div>
  );
}
