import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="text-center py-8 bg-[#f8f9fa] text-gray-700 dark:bg-[#0d1116] dark:text-gray-300">
      <div className="flex justify-center space-x-6 mb-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
          </a>
        </Button>
      </div>
      <p className="text-sm font-medium">
        A portfolio designed & built by{' '}
        <a href="https://github.com/Sambhav-3010/Portfolio" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-semibold">
          Sambhav Mani Tripathi
        </a>{' '}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
