import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/sections/footer/Footer';
import { Background } from './layout/sections/background/Background';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/goTopBtn';




function App() {
    return (
        <div className="App">
            <Particle/>
            <Background/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
