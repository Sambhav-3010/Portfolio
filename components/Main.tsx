

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Sambhav from "../assets/images/sambhav.jpg";
import dark from "../assets/images/bg-dark.png";
import light from "../assets/images/bg-light.png";
import Image from "next/image";

function Main() {
  return (
    <div id="home" className="w-full flex flex-col items-center justify-center relative bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Background Images with Crossfade and Next.js Optimization */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={light}
          alt="Light Theme Background"
          fill
          priority
          quality={90}
          className="object-cover object-center transition-opacity duration-500 opacity-100 dark:opacity-0"
        />
        <Image
          src={dark}
          alt="Dark Theme Background"
          fill
          priority
          quality={90}
          className="object-cover object-center transition-opacity duration-500 opacity-0 dark:opacity-100"
        />
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 transition-colors duration-500" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-center items-center w-full px-4 md:px-[10%] min-h-[700px]">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl mx-auto py-16">
          <div className="shrink-0">
            <Image
              src={Sambhav}
              alt="Sambhav Mani Tripathi"
              width={320}
              height={320}
              priority
              className="rounded-full w-80 h-80 object-cover shadow-lg border-4 border-gray-300 dark:border-purple-400 dark:border-opacity-100 transition-colors duration-500"
            />
          </div>
          <div className="text-center md:text-left z-20 w-full">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-2 transition-colors duration-500">
              Sambhav Mani Tripathi
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-500">
              Computer Engineering Student
            </p>
            <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 transition-colors duration-500">
              K.J. Somaiya College of Engineering, Mumbai, India
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Sambhav-3010"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sambhav-mani-tripathi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="tel:+917007231054"
                  aria-label="Call Sambhav"
                  className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-3xl" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:sambhavmani.tripathi@gmail.com"
                  aria-label="Email Sambhav"
                  className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
