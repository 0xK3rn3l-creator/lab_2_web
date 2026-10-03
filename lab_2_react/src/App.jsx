import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { cv } from "./data";

// App — батьківський компонент. Він володіє даними (cv)
// і роздає їх дочірнім компонентам через props.
function App() {
  return (
    <div>
      <Header name={cv.name} role={cv.role} contacts={cv.contacts} />

      <main>
        <About text={cv.about} />
        <Skills stack={cv.stack} competencies={cv.competencies} />
        <Education items={cv.education} />
        <Experience items={cv.experience} />
      </main>

      <Footer
        languages={cv.languages}
        qualities={cv.qualities}
        note={cv.footerNote}
        name={cv.name}
      />
    </div>
  );
}

export default App;
