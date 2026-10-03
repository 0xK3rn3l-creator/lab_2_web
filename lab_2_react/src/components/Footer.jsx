// Підвал: мови, особисті якості та додаткова інформація.
// props: { languages: string[], qualities: string[], note, name }.
function Footer({ languages, qualities, note, name }) {
  return (
    <footer>
      <section>
        <h2>Мови</h2>
        <ul>
          {languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Особисті якості</h2>
        <ul>
          {qualities.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      <h2>Додаткова інформація</h2>
      <p>{note}</p>
      <p><small>© 2026 {name}</small></p>
    </footer>
  );
}

export default Footer;
