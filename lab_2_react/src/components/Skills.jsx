// Технічний стек + ключові компетенції.
// props: { stack: string[], competencies: {title, text}[] }.
function Skills({ stack, competencies }) {
  return (
    <section>
      <h2>Технічний стек</h2>
      <ul>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Ключові компетенції</h3>
      <ul>
        {competencies.map((c) => (
          <li key={c.title}>
            <strong>{c.title}:</strong> {c.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
