import React from 'react'
import'./Footer.css'
import footer_icon from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_icon} alt="" />
            <p>i'am frontend developer,from India with 2 years of experienced Frontend Developer with over a decade of professional expertise in the field.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2026 JayaSurya All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
