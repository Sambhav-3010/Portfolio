import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Main({mode}: {mode: string}) {

  return (
    <div className="pt-16 w-full flex flex-col items-center justify-center">
      <div className={`flex gap-x-8 justify-start items-center w-full px-[15%] min-h-[700px] bg-no-repeat bg-cover bg-fixed bg-center md:block md:pt-[150px] md:px-0 ${mode === 'dark' ? 'bg-black/20' : ''}`} style={{backgroundImage: `url(${mode === 'dark' ? '/src/assets/images/bg-dark.png' : '/src/assets/images/bg-light.png'})`}}>
        <div className="image-wrapper">
          <img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
        </div>
        <div className="text-left z-20 w-full md:px-[5%] md:pb-[5%]">
          <div className="flex flex-row gap-x-3 text-white md:hidden">
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><GitHubIcon className="text-[1.8em]"/></a>
            <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer"><LinkedInIcon className="text-[1.8em]"/></a>
          </div>
          <h1 className="text-[5em] my-0 md:text-[4em]">Sambhav Mani Tripathi</h1>
          <p className="text-[1.5em] my-0">Computer Engineering Student</p>

          <div className="pt-3 flex flex-row gap-x-3 text-white sm:flex md:flex lg:hidden xl:hidden">
            <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><GitHubIcon className="text-[1.8em]"/></a>
            <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer"><LinkedInIcon className="text-[1.8em]"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;