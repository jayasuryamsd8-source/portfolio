import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import { Link } from "react-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuref=useRef();
  const openmenu=()=>{
     menuref.current.style.right="0";
  }
  const closemenu=()=>{
    menuref.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
       <img src={menu_open} alt="" onClick={openmenu}  className="nav-mob-open" />
      <ul ref={menuref} className="nav-menu">
        <img src={menu_close} alt="" onClick={closemenu} className="nav-mob-close" />
        <li><Link className="anchor-link"to="home"smooth={true}offset={-50}duration={500}onClick={() => setMenu("home")}>Home</Link>{menu==='home' && <img src={underline} />}</li>
        <li><Link className="anchor-link"to="about"smooth={true}offset={-50}duration={500}onClick={() => setMenu("about")}>About Me</Link>{menu==='about' && <img src={underline} />}</li>
        <li><Link  className="anchor-link" to="service"smooth={true}offset={-50}duration={500}onClick={() => setMenu("service")}>Service</Link>{menu==='service' && <img src={underline} />}</li>
        <li> <Link className="anchor-link"to="work"smooth={true}offset={-50}duration={500}onClick={() => setMenu("work")}>Portfolio</Link>{menu==='work' && <img src={underline} />}</li>
        <li><Link className="anchor-link"to="contact"smooth={true}offset={-50}duration={500}onClick={() => setMenu("contact")}>Contact</Link>{menu==='contact' && <img src={underline} />}</li>
        </ul>

      <div className="nav-connect"> <Link className="anchor-link" to="contact"smooth={true}offset={-50}duration={500}onClick={() => setMenu("contact")}>Connect With Me</Link></div>
      
    </div>
  )
}

export default Navbar
