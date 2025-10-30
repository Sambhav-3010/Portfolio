import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';

function Project({mode}: {mode: string}) {
    return(
    <div className="py-16 w-full flex flex-col items-center justify-center" id="projects">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-transform duration-300 hover:scale-105`}>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" className="block mb-4">
              <img src={mock01} className="rounded-lg shadow-md w-full h-48 object-cover" alt="thumbnail" />
            </a>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer">
              <h3 className={`text-xl font-bold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'} hover:text-blue-500 transition-colors duration-300`}>GhumoFiro</h3>
            </a>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.
            </p>
          </div>
          <div className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-transform duration-300 hover:scale-105`}>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" className="block mb-4">
              <img src={mock02} className="rounded-lg shadow-md w-full h-48 object-cover" alt="thumbnail" />
            </a>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer">
              <h3 className={`text-xl font-bold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'} hover:text-blue-500 transition-colors duration-300`}>PropChain</h3>
            </a>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.
            </p>
          </div>
          <div className={`flex flex-col items-center text-center p-6 rounded-lg shadow-lg ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-transform duration-300 hover:scale-105`}>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer" className="block mb-4">
              <img src={mock03} className="rounded-lg shadow-md w-full h-48 object-cover" alt="thumbnail" />
            </a>
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer">
              <h3 className={`text-xl font-bold mb-2 ${mode === 'dark' ? 'text-white' : 'text-gray-900'} hover:text-blue-500 transition-colors duration-300`}>Rythmo</h3>
            </a>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              A music streaming app with real-time playback, personalized playlists, and genre based recommendations for a rich listening experience. Created an artist dashboard showing song analytics streams, likes, and minutes played—for better content tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Project;
