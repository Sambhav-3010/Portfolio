"use client";

import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Timeline({ mode }: { mode: string }) {
  return (
    <section
      id="experience"
      className={`py-20 w-full flex flex-col items-center justify-center transition-colors duration-500 ${
        mode === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <h2
          className={`text-4xl font-extrabold text-center mb-14 tracking-tight ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          My Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>

          {/* Work 1 */}
          <div className="relative mb-8 last:mb-0 flex flex-col md:flex-row items-center md:justify-between">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0">
              <Card
                className={`${
                  mode === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900"
                } border-none shadow-lg rounded-2xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    SDE Intern - Explified
                  </CardTitle>
                  <p className="text-md font-medium text-gray-400 dark:text-gray-500">
                    India
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base opacity-90">
                    Developed full-stack Shopify applications using Node.js for
                    secure backend logic and React with the Polaris component
                    library for embedded admin interfaces.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10 shadow-md">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left mt-2 md:mt-0">
              <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400">
                October 2025 - Present
              </p>
            </div>
          </div>

          {/* Work 2 */}
          <div className="relative mb-8 last:mb-0 flex flex-col md:flex-row-reverse items-center md:justify-between">
            <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left mb-4 md:mb-0">
              <Card
                className={`${
                  mode === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900"
                } border-none shadow-lg rounded-2xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Co Lead - KJSCE Machine Learning Research Association
                  </CardTitle>
                  <p className="text-md font-medium text-gray-400 dark:text-gray-500">
                    Mumbai, India
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base opacity-90">
                    Led a team of developers to build and maintain the council
                    website and organized technical workshops and events.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10 shadow-md">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right mt-2 md:mt-0">
              <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 text-right">
                July 2025 - Present
              </p>
            </div>
          </div>

          {/* Work 3 */}
          <div className="relative mb-8 last:mb-0 flex flex-col md:flex-row items-center md:justify-between">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right mb-4 md:mb-0">
              <Card
                className={`${
                  mode === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900"
                } border-none shadow-lg rounded-2xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Full-stack Developer Intern - Naareecollections
                  </CardTitle>
                  <p className="text-md font-medium text-gray-400 dark:text-gray-500">
                    Delhi, India
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base opacity-90">
                    Built a comprehensive e-commerce platform including product
                    listings, cart system, and order tracking. Deployed both the
                    site and dashboard on Hostinger.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10 shadow-md">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left mt-2 md:mt-0">
              <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400">
                June 2025 - August 2025
              </p>
            </div>
          </div>

          {/* Work 4 */}
          <div className="relative mb-8 last:mb-0 flex flex-col md:flex-row-reverse items-center md:justify-between">
            <div className="w-full md:w-1/2 pl-0 md:pl-8 text-left mb-4 md:mb-0">
              <Card
                className={`${
                  mode === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-900"
                } border-none shadow-lg rounded-2xl transition-all duration-300`}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Full-stack Developer Intern - ZecBay
                  </CardTitle>
                  <p className="text-md font-medium text-gray-400 dark:text-gray-500">
                    Mumbai, India
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-base opacity-90">
                    Built and integrated a reverse auction system supporting
                    concurrent bids, aligning with import logistics use cases.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center z-10 shadow-md">
              <FontAwesomeIcon icon={faBriefcase} className="text-white text-xl" />
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-8 text-left md:text-right mt-2 md:mt-0">
              <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 text-right">
                Nov 2024 - Jan 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
