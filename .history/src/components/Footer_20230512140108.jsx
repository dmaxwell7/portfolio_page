import React from 'react'
import LinkednIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div 
      className='bg-tertiary flex flex-col items-center 
      justify-center pt-5 mt-5 text-white text-[17px] font-serif'>
        <p> &copy; 2023 Des-Tech Production </p>
          <LinkednIcon 
          />  
    </div>
  )
}

export default Footer