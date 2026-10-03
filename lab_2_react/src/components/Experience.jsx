// Практичний досвід, CTF, стажування та курси.
// props.items — масив записів; кожен має title, meta, points[], links[].
function Experience({ items }) {
  return (
    <section>
      <h2>Досвід, CTF та стажування</h2>
      {items.map((job) => (
        <article key={job.title}>
          <h3>{job.title}</h3>
          <p>{job.meta}</p>

          {job.points.length > 0 && (
            <ul>
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}

          {job.links.length > 0 && (
            <p>
              {job.links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </p>
          )}
        </article>
      ))}
    </section>
  );
}

export default Experience;
