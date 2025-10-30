import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker} from '@fortawesome/free-brands-svg-icons';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <div className="py-16 w-full flex flex-col items-center justify-center" id="expertise">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <CardHeader>
              <FontAwesomeIcon icon={faReact} size="3x" className={`mb-4 ${mode === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <CardTitle className="text-2xl font-bold mb-3">Full Stack Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-6">
                I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className={`font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600">{label}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <CardHeader>
              <FontAwesomeIcon icon={faDocker} size="3x" className={`mb-4 ${mode === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
              <CardTitle className="text-2xl font-bold mb-3">Tools & Methodologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-6">
                I am proficient in various tools and methodologies that streamline development workflows and enhance collaboration, ensuring efficient project delivery.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className={`font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Skills:</span>
                {labelsSecond.map((label, index) => (
                  <Badge key={index} variant="secondary" className="bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-700 dark:text-white dark:hover:bg-cyan-600">{label}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    );
}

export default Expertise;
