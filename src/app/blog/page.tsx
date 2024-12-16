import React from 'react'
import "../css/contact.css"
import Prefooter from '../prefooter/page'
import Footer from '@/components/Footer'

function Blog() {
  return (
<div className='cont-body'>
    <div className='cont-div1'>
        <img className='cont-image' src="/Meubel_Logos-05.png"></img>
        <h2 className='cont-heading'>Blog</h2>
        <div className='cont-subdiv'>
            <h2>Home</h2>
            <img src="/dashicon.png"></img>
            <h2>Blog</h2>
        </div>
    </div>

    <div className='flex p-[5rem] h-auto'>
        <img src="/Group176.png"></img>
        <div>
          <img src='Group171.png'></img>
          <img src='Group184.png'></img>
        </div>
    </div>
    <div className='flex justify-center' ><img src="/Group72.png"></img></div>
    
    
    
<Prefooter/>
<Footer/>
</div>
  )
}

export default Blog