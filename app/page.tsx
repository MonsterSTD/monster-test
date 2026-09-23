const CONTACT_EMAIL = "delio@monsterstudio.es";

const services = [
  {
    number: "01",
    title: "Diseño",
    description: "Identidad visual, logotipos y piezas gráficas con carácter propio.",
  },
  {
    number: "02",
    title: "Rotulación",
    description: "Fachadas, vehículos y espacios que no pasan desapercibidos.",
  },
  {
    number: "03",
    title: "Impresión",
    description: "Gran formato, papelería y soportes con acabados de calidad.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav container">
        <span className="logo">MS</span>
        <a className="nav-link" href="#servicios">Servicios</a>
      </header>

      <section className="hero container">
        <h1 className="title">Monster Studio</h1>
        <p className="subtitle">Here is where ideas become monsters</p>
        <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
          Contactar
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <section id="servicios" className="services container">
        <h2 className="section-label">Servicios</h2>
        <div className="grid">
          {services.map((s) => (
            <article key={s.title} className="card">
              <span className="card-number">{s.number}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-text">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container">
        © {new Date().getFullYear()} Monster Studio
      </footer>
    </main>
  );
}
