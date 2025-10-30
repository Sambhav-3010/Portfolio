import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';

const labelsFirst = [
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Express.js",
    "Node.js",
    "Flask",
    "MongoDB",
    "TailwindCSS"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Team Collaboration",
    "Data Structures & Algorithms"
];

function Expertise({mode}: {mode: string}) {
    return (
    <div className="pt-16 w-full flex flex-col items-center justify-center" id="expertise">
        <div className="py-[5%] px-[10%] flex flex-col text-left lg:px-[5%]">
            <h1>Expertise</h1>
            <div className="grid grid-cols-2 gap-x-[50px] lg:grid-cols-1">
                <div className="flex flex-col items-center text-left pb-[5%]">
                    <FontAwesomeIcon icon={faReact} size="3x" className={mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="leading-loose m-[0.5]">
                        <span className={`pr-[10px] ${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className={`chip text-black bg-white text-[0.8em] h-[25px] ${mode === 'dark' ? 'bg-white shadow-md' : 'bg-gray-200 shadow-md'} mr-[0.5em]`} label={label} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center text-left pb-[5%]">
                    <FontAwesomeIcon icon={faDocker} size="3x" className={mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}/>
                    <h3>Tools & Methodologies</h3>
                    <p>I am proficient in various tools and methodologies that streamline development workflows and enhance collaboration, ensuring efficient project delivery.</p>
                    <div className="leading-loose m-[0.5]">
                        <span className={`pr-[10px] ${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className={`chip text-black bg-white text-[0.8em] h-[25px] ${mode === 'dark' ? 'bg-white shadow-md' : 'bg-gray-200 shadow-md'} mr-[0.5em]`} label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;