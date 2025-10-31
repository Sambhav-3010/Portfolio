import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Sambhav from "../assets/images/sambhav.jpg";
import dark from "../assets/images/bg-dark.png";
import light from "../assets/images/bg-light.png";

function Main({ mode }: { mode: string }) {
  return (
    <div id="home" className="w-full flex flex-col items-center justify-center">
      <div
        className={`relative flex flex-col md:flex-row gap-8 justify-center items-center w-full px-4 md:px-[10%] min-h-[700px] bg-no-repeat bg-cover bg-fixed bg-center ${
          mode === "dark" ? "bg-black/50" : "bg-white/50"
        } transition-colors duration-500`}
        style={{
          backgroundImage: `url(${
            mode === "dark"
              ? dark
              : light
          })`,
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl mx-auto py-16">
          <div className="shrink-0">
            <img
              src={Sambhav}
              alt="Avatar"
              className={`rounded-full w-80 h-80 object-cover shadow-lg border-4 ${
                mode === "dark" ? "border-purple-400" : "border-gray-300"
              } dark:border-gray-800`}
            />
          </div>
          <div className="text-center md:text-left z-20 w-full">
            <h1
              className={`text-5xl md:text-6xl font-extrabold leading-tight ${
                mode === "dark" ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              Sambhav Mani Tripathi
            </h1>
            <p
              className={`text-xl md:text-2xl font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              } mb-6`}
            >
              Computer Engineering Student
            </p>
            <p
              className={`text-xl md:text-2xl font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              } mb-6`}
            >
              K.J. Somaiya College of Engineering, Mumbai, India
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Sambhav-3010"
                  target="_blank"
                  rel="noreferrer"
                  className={`${
                    mode === "dark"
                      ? "text-white hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600"
                  } transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sambhav-mani-tripathi"
                  target="_blank"
                  rel="noreferrer"
                  className={`${
                    mode === "dark"
                      ? "text-white hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600"
                  } transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="tel:+919876543210"
                  className={`${
                    mode === "dark"
                      ? "text-white hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600"
                  } transition-colors duration-300`}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-3xl" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="mailto:sambhavmani.tripathi@gmail.com"
                  className={`${
                    mode === "dark"
                      ? "text-white hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600"
                  } transition-colors duration-300`}
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
