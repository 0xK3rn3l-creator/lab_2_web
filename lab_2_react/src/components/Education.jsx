// Освіта. props.items — масив навчальних закладів.
function Education({ items }) {
  return (
    <section>
      <h2>Освіта</h2>
      {items.map((edu) => (
        <article key={edu.place}>
          <h3>{edu.place}</h3>
          <p>{edu.period}</p>
          <ul>
            {edu.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Education;
