import { Navbar } from './components/common/Navbar'; 
import { LanguageSwitcher } from './components/common/LanguageSwitcher';
import { Footer } from './components/common/Footer';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      
      <Navbar /> 
      <LanguageSwitcher />

      <main>
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;