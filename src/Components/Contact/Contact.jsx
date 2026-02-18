import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "525133d1-ebf6-44c8-a14f-4a6e02d8f544");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take a new Projects, so feel free</p>
                <div className="contact-details">
                    <div className="contact-detail">
                     <img src={mail_icon} alt="" /><p>jayasuryamsd8@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91-790-451-3569</p>
                    </div>
                     <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>TAMILNADU,INDIA</p>
                    </div>
                </div>
            </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter Your Email' name='email' />
                    <label htmlFor=""> Write Your Message</label>
                    <textarea name="message" placeholder='Enter Your Message' rows="8"></textarea>
                    <button type='sumbit' className='contact-sumbit'>Sumbit now</button>
                </form>
        </div>
      
    </div>
  )
}

export default Contact
