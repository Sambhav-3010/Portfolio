import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Timeline({mode}: {mode: string}) {
  return (
    <div id="history" className="py-16 w-full flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Journey
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>

          {/* Education Timeline Element */}
          <div className="relative mb-8 last:mb-0 flex items-center justify-between">
            <div className="w-1/2 pr-8 text-right">
              <Card className={mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">K.J. Somaiya College of Engineering</CardTitle>
                  <p className="text-md font-medium text-gray-300 dark:text-gray-700">Mumbai, India</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-400 dark:text-gray-600">
                    B.Tech Computer Engineering, CGPA: 9.46
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-xl" />
            </div>
            <div className="w-1/2 pl-8">
              <p className="font-mono text-sm md:text-base text-gray-300 dark:text-gray-700">2023 - 2027</p>
            </div>
          </div>

          {/* Work Timeline Element 1 */}
          <div className="relative mb-8 last:mb-0 flex items-center justify-between flex-row-reverse">
            <div className="w-1/2 pl-8 text-left">
              <Card className={mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Co Lead - KJSCE - Somaiya Machine Learning Research Association</CardTitle>
                  <p className="text-md font-medium text-gray-300 dark:text-gray-700">Mumbai, India</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-400 dark:text-gray-600">
                    Led a team of developers to build and maintain the council website and led the council events and workshops
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-1/2 pr-8">
              <p className="font-mono text-sm md:text-base text-gray-300 dark:text-gray-700 text-right">July 2025 - Present</p>
            </div>
          </div>

          {/* Work Timeline Element 2 */}
          <div className="relative mb-8 last:mb-0 flex items-center justify-between">
            <div className="w-1/2 pr-8 text-right">
              <Card className={mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Full-stack Developer Intern - Naareecollections</CardTitle>
                  <p className="text-md font-medium text-gray-300 dark:text-gray-700">Delhi, India</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-400 dark:text-gray-600">
                    Building a comprehensive e-commerce website for a startup, including product listings, cart functionality, and order tracking. Deployed the entire website along with the dashboard on hostinger
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-1/2 pl-8">
              <p className="font-mono text-sm md:text-base text-gray-300 dark:text-gray-700">June 2025 - Present</p>
            </div>
          </div>

          {/* Work Timeline Element 3 */}
          <div className="relative mb-8 last:mb-0 flex items-center justify-between flex-row-reverse">
            <div className="w-1/2 pl-8 text-left">
              <Card className={mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Full-stack Developer Intern - ZecBay</CardTitle>
                  <p className="text-md font-medium text-gray-300 dark:text-gray-700">Mumbai, India</p>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-400 dark:text-gray-600">
                    Built a fully functional prototype and developed and integrated a reverse auction system that supported concurrent bids, aligning with import logistics use cases.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-1/2 pr-8">
              <p className="font-mono text-sm md:text-base text-gray-300 dark:text-gray-700 text-right">Nov 2024 - Jan 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
