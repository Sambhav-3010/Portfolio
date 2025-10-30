"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const labelsFirst = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React.js",
  "Express.js",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
];

const labelsSecond = [
  "Git",
  "GitHub",
  "Docker",
  "Team Collaboration",
  "Data Structures & Algorithms",
];

function Expertise({mode}: {mode: string}) {

  return (
    <section
      id="expertise"
      className={`py-20 w-full flex flex-col items-center justify-center transition-colors duration-500 ${
        mode === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-14 tracking-tight"
        >
          Expertise
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              className={`group relative overflow-hidden border-none shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                mode === "dark"
                  ? "bg-gray-900 hover:bg-gray-800 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="flex flex-col items-center text-center">
                <FontAwesomeIcon
                  icon={faReact}
                  size="3x"
                  className={`mb-4 transition-transform duration-500 group-hover:scale-110 ${
                    mode === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <CardTitle className="text-2xl font-bold mb-3">
                  Full Stack Web Development
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-base leading-relaxed mb-6 opacity-90">
                  I develop scalable web applications using modern frameworks
                  like Next, React and Express. My experience spans the entire
                  SDLC from planning to deployment ensuring efficient,
                  maintainable codebases.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {labelsFirst.map((label, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 rounded-full text-sm px-3 py-1"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tools & Methodologies Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={`group relative overflow-hidden border-none shadow-lg rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                mode === "dark"
                  ? "bg-gray-900 hover:bg-gray-800 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="flex flex-col items-center text-center">
                <FontAwesomeIcon
                  icon={faDocker}
                  size="3x"
                  className={`mb-4 transition-transform duration-500 group-hover:scale-110 ${
                    mode === "dark" ? "text-cyan-400" : "text-cyan-600"
                  }`}
                />
                <CardTitle className="text-2xl font-bold mb-3">
                  Tools & Methodologies
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-base leading-relaxed mb-6 opacity-90">
                  I utilize modern development tools, CI/CD practices, and
                  version control systems to optimize collaboration and
                  streamline development workflows. My expertise includes Docker, Git, and GitHub.
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {labelsSecond.map((label, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-600 rounded-full text-sm px-3 py-1"
                    >
                      {label}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;