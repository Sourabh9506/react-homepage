import './App.css';
import Contact from './components/Contact'; 
import Bio from './components/Bio';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Bio />
      <hr />
      <Experience/>
      <hr />
      <Skills/>
      <hr />
      <Contact />
    </main>
  );
}

export default App;
