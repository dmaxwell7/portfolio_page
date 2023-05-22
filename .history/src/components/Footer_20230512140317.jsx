import LinkednIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
  return (
    <div 
      className='bg-tertiary flex flex-col items-center 
      justify-center pt-5 mt-5 text-white text-[17px] font-serif'>
        <p> &copy; 2023 Des-Tech Production </p>
      <div>
        <LinkednIcon />
        <InstagramIcon />
      </div>
    </div>
  )
}

export default Footer