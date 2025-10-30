import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';

function Project({mode}: {mode: string}) {
    return(
    <div className="pt-16 flex flex-col py-[5%] px-[10%] text-left lg:px-[5%]" id="projects">
        <h1 className="text-white">Personal Projects</h1>
        <div className="grid grid-cols-2 gap-[50px] lg:grid-cols-1">
            <div className="text-left pb-[5%]">
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><img src={mock01} className="rounded-[5px] transition-transform duration-200 hover:scale-[1.05] mx-auto" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><h2 className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'} hover:underline transition-colors duration-150 ease-in-out`}>GhumoFiro</h2></a>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.</p>
            </div>
            <div className="text-left pb-[5%]">
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><img src={mock02} className="rounded-[5px] transition-transform duration-200 hover:scale-[1.05] mx-auto" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><h2 className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'} hover:underline transition-colors duration-150 ease-in-out`}>PropChain</h2></a>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.</p>
            </div>
            <div className="text-left pb-[5%]">
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><img src={mock03} className="rounded-[5px] transition-transform duration-200 hover:scale-[1.05] mx-auto" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><h2 className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'} hover:underline transition-colors duration-150 ease-in-out`}>Rythmo</h2></a>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>A music streaming app with real-time playback, personalized playlists, and genre based recommendations for a rich listening experience. Created an artist dashboard showing song analytics streams, likes, and minutes played—for better content tracking.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;