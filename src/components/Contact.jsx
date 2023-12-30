// import React from 'react';
// import WebsiteLogo from '../assets/website logo.svg';
// import PhoneLogo from '../assets/phone.svg';
// import EmailLogo from '../assets/email logo.svg'

// const Contact = () => {
//   return (
//     <div className='w-full bg-[#30475E] h-full text-[#DDDDDD]'>
//       <h2 className="text-4xl font-bold m-6 text-center">Contact Us</h2>
//         <div className="flex items-center justify-center  p-2">
//           <img className='h-8 w-8' src={WebsiteLogo} alt=""/>
//           <p className="ml-2">www.stmaryschool.com</p>
//         </div>
//         <div className="flex items-center justify-center  p-2">
//           <img className='h-8 w-8' src={PhoneLogo} alt=""/>
//           <p className="ml-2">+9144444585</p>
//         </div>
//         <div className="flex items-center justify-center  p-2">
//           <img className='h-8 w-8' src={EmailLogo} alt=""/>
//           <p className="ml-2">stmary@edu.co.in</p>
//         </div>
//       </div>
 
//   );
// }

// export default Contact;


import React from 'react';
import WebsiteLogo from '../assets/website logo.svg';
import PhoneLogo from '../assets/phone.svg';
import EmailLogo from '../assets/email logo.svg';

const Contact = () => {
  return (
    <div className='w-full bg-[#30475E] h-full text-[#DDDDDD]'>
      <h2 className="text-4xl font-bold m-6 text-center">Contact Us</h2>

      <div className="flex items-center justify-center p-2">
        <img className='h-8 w-8' src={WebsiteLogo} alt=""/>
        <a href="http://www.stmaryschool.com" className="ml-2" target="_blank" rel="noopener noreferrer">www.stmaryschool.com</a>
      </div>

      <div className="flex items-center justify-center p-2">
        <img className='h-8 w-8' src={PhoneLogo} alt=""/>
        <a href="tel:+9144444585" className="ml-2">+9144444585</a>
      </div>

      <div className="flex items-center justify-center p-2">
        <img className='h-8 w-8' src={EmailLogo} alt=""/>
        <a href="mailto:stmary@edu.co.in" className="ml-2">stmary@edu.co.in</a>
      </div>
    </div>
  );
}

export default Contact;

