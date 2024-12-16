import React from 'react'
import "../css/contact.css"
import Footer from '@/components/Footer'
import Prefooter from '../prefooter/page'

function Cart() {
  return (
<div className='cont-body'>
    <div className='cont-div1'>
        <img className='cont-image' src="/Meubel_Logos-05.png"></img>
        <h2 className='cont-heading'>Cart</h2>
        <div className='cont-subdiv'>
            <h2>Home</h2>
            <img src="/dashicon.png"></img>
            <h2>Cart</h2>
        </div>
    </div>

    <div className='h-[525px] flex gap-4 justify-center items-center'>
      <div className='w-auto h-[390px]'>
        <div className='w-[817px] h-[55px] top-[488px] left-[100px] bg-orange-50'>
          <div className='flex justify-around text-xl font-semibold pt-4' >
            <h3> Product </h3> 
            <h3> Price </h3> 
            <div className='flex gap-[2rem] '>
            <h3> Quantity </h3> 
            <h3> Subtotal</h3> </div> 
          </div>
          <div className='h-[200px] flex justify-between items-center font-normal text-base '>
            <img className='w-[111px] h-[90px] opacity-0px' src='cart-sofa.png'></img>
            <p className='opacity-55'>Asgard sofa</p>
            <p className='opacity-55'>Rs. 250,000.00</p>
            <p className='w-8 h-8 border text-center'>1</p>
            <p>Rs. 250,000.00</p>
            <img className='w-[21px] h-[21.88px] opacity-0px' src='cart-box.png'></img>

          </div>
          



        </div>
        </div>  
        <div className='w-[393px] h-[390px] flex-col space-y-5 text-center bg-orange-50'>
          <h2 className='text-3xl font-bold mt-4'> Cart Totals</h2>
          <div className='flex justify-center space-x-12 pt-10'>
              <p className='font-bold'>Subtotal</p>
              <p>Rs. 250,000.00</p>
          </div>
          <div className='flex justify-center space-x-12 pt-6'>  
              <p className='font-bold'>Total</p>
              <p className='font-medium text-xl text-brown'>Rs. 250,000.00</p>
          </div>
          <button className='h-[58.95px] w-[222px] text-xl border-2 border-black rounded-lg '>Check out</button>
        </div>

    </div>

    
<Prefooter/>    
<Footer/>
</div>
  )
}

export default Cart