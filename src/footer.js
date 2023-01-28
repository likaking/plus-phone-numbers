import logo from './assets/logo.png'
import './footer.css';
import {FaEthereum} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaCopyright,FaArrowUp} from 'react-icons/fa'
import React, {useState} from 'react';


function Footer(){

  const dateBuilder = (d)=>{
  let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  let days = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]


  let today = days[d.getDay()];
  let c_day = d.getDate();
  let currMounth = months[d.getMonth()];
  let year = d.getFullYear();
  return ` ${year} `
  }

  
  const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
  const scrolled = document.documentElement.scrollTop;
  scrolled > 300 ? setVisible(true) : setVisible(false)
  }

 typeof window !== 'undefined' && window.addEventListener('scroll', toggleVisible)

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};
  return(
    <>
	
	

	
	
    <div className='footer'>
    <div className='footer__info'>
    <div className='footer__a'>
  
    
     
    </div>
    <div className='footer__b'>
    
    </div>
    <div className='footer__c'>
   

    </div>
    </div>
	
    <div className='footer__copy-rights' >
	<span>+Plus Phone Numbers {<br />} {dateBuilder(new Date())}</span>
	 </div>
   <button className= 'upButton' onClick = {scrollToTop} style={{display: visible ? 'inline' : 'none'}}><FaArrowUp /></button>

   </div>
    </>
  )
}


export default Footer;



