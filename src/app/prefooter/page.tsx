import React from 'react'

function Prefooter() {
  return (
<div className='h-[270px] flex bg-orange-50 justify-around items-center'>
<div className='flex gap-2'>
    <img  className='w-[60px] h-[60px]' src='/trophy.png'></img>
    <div className='flex-col'>
        <h2 className='text-2xl font-[600]'>High Quality</h2>
        <p>crafted from top materials</p>
    </div>
</div>

<div className='flex gap-2'>
    <img  className='w-[60px] h-[60px]' src='/guarantee.png'></img>
    <div className='flex-col'>
        <h2 className='text-2xl font-[600]'>Warranty Protection</h2>
        <p>Over 2 years</p>
    </div>
</div>

<div className='flex gap-2'>
    <img  className='w-[60px] h-[60px]' src='/shipping.png'></img>
    <div className='flex-col'>
        <h2 className='text-2xl font-[600]'>Free Shipping</h2>
        <p>Order over 150 $</p>
    </div>
</div>

<div className='flex gap-2'>
    <img  className='w-[60px] h-[60px]' src='/cus-support.png'></img>
    <div className='flex-col'>
        <h2 className='text-2xl font-[600]'>24 / 7 Support</h2>
        <p>Dedicated support</p>
    </div>
</div>

</div>
  )
}

export default Prefooter