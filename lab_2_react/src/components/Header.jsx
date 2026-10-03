// Шапка: ім'я, посада та список контактів.
// Отримує дані через props: { name, role, contacts }.
function Header({ name, role, contacts }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{role}</p>

      <nav aria-label="Контакти">
        <ul>
          {contacts.map((c) => (
            <li key={c.label}>
              {c.label}: {c.href ? <a href={c.href}>{c.value}</a> : c.value}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
