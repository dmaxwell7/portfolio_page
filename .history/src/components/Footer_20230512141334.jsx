import LinkedIncon from '@material-ui/icons/LinkedIn';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div 
      className='bg-tertiary flex flex-col items-center 
      justify-center pt-5 mt-5 text-white text-[17px] font-serif'>
        <p> &copy; 2023 Des-Tech Production </p>
        <div 
      className='flex justify-center items-center'>
        <a>
        <LinkedIncon style={{ marginRight: '1rem' }} />
        </a>
        <GitHubIcon style={{ marginRight: '1rem' }} />

        <InstagramIcon style={{ marginRight: '1rem' }} />

        <TwitterIcon style={{ marginRight: '1rem' }} />

        <FacebookIcon />
    </div>
    </div>
  )
}

export default Footer