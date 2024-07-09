import React from 'react'
import imgag from './contact.png'
import './ContactStyle.css'
export default function Contact() {
  return (
    <div>
      <form className="contact-container" action="https://api.web3forms.com/submit" method="POST">
        <div className="contact-left">
          <div className="contact-left-tittle"><h1>Get in touch</h1><hr />
          <input type="hidden" name="access_key" value="3968ab67-8c30-4e64-8ba5-e0155da7a7f3"></input></div>
          <input type="text" name='name' placeholder='Your Name' className='contact-input' required />
          <input type="Email" name='Email' placeholder='Your Email' className='contact-input' required />
          <textarea name="message" placeholder='Your Message' className='contact-input' required></textarea>
          <button type='submit'>Submit</button>
        </div>
        <div className="contact-right"><img src={imgag} alt="" /></div>
      </form>
    </div>
  )
}
