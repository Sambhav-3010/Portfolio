import {useState, useEffect} from "react";
import Main from './components/Main';
import Expertise from './components/Expertise';
import Timeline from './components/Timeline';
import Project from './components/Project';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import Navbar from "./components/Navbar";

function App() {
    const [mode, setMode] = useState<string>('dark');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`relative ${mode === 'dark' ? 'bg-[#0d1116]' : 'bg-[#f8f9fa]'}`}>
        <Navbar mode={mode} setMode={setMode}/>
        <FadeIn transitionDuration={700}>
            <Main mode={mode}/>
            <Expertise mode={mode}/>
            <Timeline mode={mode}/>
            <Project mode={mode}/>
        </FadeIn>
        <Footer mode={mode}/>
    </div>
    );
}

export default App;