import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Main({mode}: {mode: string}) {

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div
        className={`relative flex flex-col md:flex-row gap-8 justify-center items-center w-full px-4 md:px-[10%] min-h-[700px] bg-no-repeat bg-cover bg-fixed bg-center ${mode === 'dark' ? 'bg-black/50' : 'bg-white/50'} transition-colors duration-500`}
        style={{ backgroundImage: `url(${mode === 'dark' ? '/src/assets/images/bg-dark.png' : '/src/assets/images/bg-light.png'})` }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-6xl mx-auto py-16">
          <div className="shrink-0">
            <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-white dark:border-gray-800" />
          </div>
          <div className="text-center md:text-left z-20 w-full">
            <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight ${mode === 'dark' ? 'text-white' : 'text-gray-900'} mb-2`}>
              Sambhav Mani Tripathi
            </h1>
            <p className={`text-xl md:text-2xl font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
              Computer Engineering Student
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" className={`${mode === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} transition-colors duration-300`}>
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer" className={`${mode === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'} transition-colors duration-300`}>
                <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
