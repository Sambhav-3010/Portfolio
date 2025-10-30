import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer({mode}: {mode: string}) {
  return (
    <footer className="text-center py-[50px]">
      <div className="[&_svg]:w-[1.1em] [&_svg]:h-[1.1em] [&_svg]:mr-[10px]">
        <a href="https://github.com/Sambhav-3010" target="_blank" rel="noreferrer"><GitHubIcon className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}/></a>
        <a href="https://www.linkedin.com/in/sambhav-mani-tripathi" target="_blank" rel="noreferrer"><LinkedInIcon className={`${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}/></a>
      </div>
      <p className={`text-[0.8em] ${mode === 'dark' ? 'text-white' : 'text-[#0d1116]'}`}>A portfolio designed & built by <a href="https://github.com/Sambhav-3010/Portfolio" target="_blank" rel="noreferrer" className="hover:text-[#5000ca] transition-colors duration-150 ease-in-out">Sambhav Mani Tripathi</a> with 💜</p>
    </footer>
  );
}

export default Footer;