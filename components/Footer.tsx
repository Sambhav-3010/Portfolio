import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";

function Footer({mode}: {mode: string}) {
  return (
    <footer className={`text-center py-8 ${mode === 'dark' ? 'bg-[#0d1116] text-gray-400' : 'bg-[#f8f9fa] text-gray-600'}`}>
      <div className="flex justify-center space-x-6 mb-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" className={`${mode === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} transition-colors duration-300`}>
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer" className={`${mode === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} transition-colors duration-300`}>
            <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
          </a>
        </Button>
      </div>
      <p className="text-sm">
        A portfolio designed & built by{' '}
        <a href="https://github.com/Sambhav-3010/Portfolio" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors duration-300">
          Sambhav Mani Tripathi
        </a>{' '}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
