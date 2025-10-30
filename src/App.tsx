import {useState, useEffect} from "react";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Expertise from './components/Expertise';
import Timeline from './components/Timeline';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`relative ${mode === 'dark' ? 'bg-[#0d1116]' : 'bg-[#f8f9fa]'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main mode={mode}/>
            <Expertise mode={mode}/>
            <Timeline mode={mode}/>
            <Project mode={mode}/>
            <Contact mode={mode}/>
        </FadeIn>
        <Footer mode={mode}/>
    </div>
    );
}

export default App;