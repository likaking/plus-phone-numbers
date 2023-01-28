import navbar from './navbar.css'
import logo from './assets/logo.png'
import {FaList} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaBattleNet} from 'react-icons/fa'
import { useState,useEffect } from 'react';




function Navbar(){
  const [toggle, setToggle] = useState(false)

  const toggleMenu = ()=> {
    !toggle ? setToggle(true) : setToggle(false);
  }


return(
<>
<div className = 'nav_bar'>
<div className = 'nav_bar__logo'>
</div>

<div className = 'nav_bar__compName'>
+Plus Phone Numbers
</div>
<div className = 'nav_bar__wraper'>
<ul className = 'nav_bar__menu'>
<li><a href = "#" className = 'nav_bar__menu_a'>Explore</a></li>
<li><a href = "#" className = 'nav_bar__menu_a'>Creator</a></li>
<li><a href = "#" className = 'nav_bar__menu_a'>Market</a></li>
<li><a href = "#" className = 'nav_bar__menu_a'>Community</a></li>
</ul>
</div>


<div className = 'nav_bar__mobileBtn'  onClick={toggleMenu}><FaBars /></div>
<div className = 'nav_Mobilemenu' style={{display : toggle ? 'block' : 'none'}} >
  <ul>
  <li><a href = "#" className = 'nav_bar__menu_aMobile'>Explore</a></li>
<li><a href = "#" className = 'nav_bar__menu_aMobile'>Creator</a></li>
<li><a href = "#" className = 'nav_bar__menu_aMobile'>Market</a></li>
<li><a href = "#" className = 'nav_bar__menu_aMobile'>Community</a></li>
  </ul>

  </div>

 </div>
</>
)}

export default Navbar;