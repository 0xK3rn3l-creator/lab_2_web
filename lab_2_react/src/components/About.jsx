// Блок "Про себе". Приймає один рядок тексту через props.text.
function About({ text }) {
  return (
    <section>
      <h2>Про себе</h2>
      <p>{text}</p>
    </section>
  );
}

export default About;
