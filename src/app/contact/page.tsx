import React from 'react'
import "../css/contact.css"
import Footer from '@/components/Footer'

function Contact() {
  return (
<div className='cont-body'>
    <div className='cont-div1'>
        <img className='cont-image' src="/Meubel_Logos-05.png"></img>
        <h2 className='cont-heading'>Contact</h2>
        <div className='cont-subdiv'>
            <h2>Home</h2>
            <img src="/dashicon.png"></img>
            <h2>Contact</h2>
        </div>
    </div>

    <div className='cont-div2'>
    <h1>Get In Touch With Us</h1>
    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

    </div>

    <div className='cont-div3 pb-[5rem]'>
      <div>
        <img src="/contactimg.png"></img>
      </div>
      <div className='cont-div3sub'>
          <h4>Your Name</h4>
          <input className='input-div' type="text" placeholder="abc" />
          <h4>Email Address</h4>
          <input className='input-div' type="text" placeholder="abc@def.com"/>
          <h4>Subject</h4>
          <input className='input-div' type="text" placeholder="This is an optional"/>
          <h4>Message</h4>
          <input className='input-div1' type="text" placeholder="Hi! I'd like ask about"/>
          <button type="submit" className="cont-button">Submit</button>
      </div>

    </div>
<Footer/>
</div>
  )
}

export default Contact