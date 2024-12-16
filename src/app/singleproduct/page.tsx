import Footer from '@/components/Footer'
import React from 'react'
import Relproduct from '../relproduct/page'

function Singleproduct() {
    return (
        <div className='w-[1440px] h-[100px]'>
            <div className='w-[1440px] h-[100px] bg-orange-50 flex text-base items-center gap-6 pl-[90px]'>
                <p className='flex opacity-35'>Home</p>
                <img className='h-[14px] w-[8px]' src='/dashicon.png'></img>
                <p className='flex opacity-35'>Shop</p>
                <img className='h-[14px] w-[8px]' src='/dashicon.png'></img>
                <p className='h-[37px] border-[2px] border-black'></p>
                <p>Asgard sofa</p>
            </div>

            <div className='h-[820px] w-[1440px] pl-[80px] pt-[50px] flex justify-evenly'>
                <div className='h-[500px] w-[553px] flex '>
                    <div className='w-[76px] h-[416px] flex-wrap space-y-5 '>
                        <img src='/prod-sofa1.png'></img>
                        <img src='/prod-sofa2.png'></img>
                        <img src='/prod-sofa3.png'></img>
                        <img src='/prod-sofa4.png'></img>
                    </div>
                    <div>
                        <img src='/prod-sofa.png'></img>
                    </div>

                </div>

                <div className='h-[730px] w-[606px] flex-col space-y-5'>
                    <h1 className='text-[42px] font-normal'>Asgaard sofa</h1>
                    <h3 className='text-2xl font-medium opacity-45'>Rs. 250,000.00</h3>
                    <div className='flex items-center gap-3'>
                        <img src='/stars.png'></img>
                        <p className='h-[30px] w-0 border border-inherit'></p>
                        <p className='text-[13px] font-normal opacity-55'>5 Customer Review</p>
                    </div>
                    <p className='h-[80px] w-[340px] text-[13px] font-normal'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <div className='flex-col space-y-4'>
                        <p className='text-sm font-normal opacity-55'>size</p>
                        <div className='flex gap-3'>
                            <img className='h-[30px] w-[30px]' src='/prod-large.png'></img>
                            <img className='h-[30px] w-[30px]'src='/prod-xlarge.png'></img>
                            <img className='h-[30px] w-[30px]'src='/prod-xsmall.png'></img>
                        </div>
                    </div>

                    <div className='flex-col space-y-4'>
                        <p className='text-sm font-normal opacity-55'>Color</p>
                        <div className='flex gap-3'>
                            <img src='/prod-blue.png'></img>
                            <img src='/prod-black.png'></img>
                            <img src='/prod-brown.png'></img>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className=' h-[64px] w-[123px] flex items-center justify-between p-2 border border-black rounded-lg text-base font-medium '>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <button className=' h-[64px] w-[215px] flex items-center justify-center border border-black rounded-lg text-xl font-normal'>Add to Cart</button>
                        <button className=' h-[64px] w-[215px] flex items-center justify-center border border-black rounded-lg text-xl font-normal'>+ Compare</button>
                    </div>

                    <div className='w-[605px] h-0 border border-inherit flex top-3' ></div>

                    <div className='flex gap-5'>
                        <div className='flex-col text-base font-normal opacity-55 space-y-3'>
                            <p>SKU</p>
                            <p>Catetory</p>
                            <p>Tags</p>
                            <p>Share</p>
                        </div>

                        <div className='flex-col text-base font-normal opacity-55 space-y-3'>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>

                        <div className='flex-col text-base font-normal opacity-55 space-y-3'>
                            <p>SS001</p>
                            <p>Sofas</p>
                            <p>Sofa, Chair, Home, Shop</p>
                            <div className='h-5 w-5 flex gap-3 items-center'>
                                <img src='/icon-facebook.png'></img>
                                <img src='/icon-linkedin.png'></img>
                                <img src='/icon-twitter.png'></img>
                            </div>
                        </div>



                    </div>
                    




                </div>
            </div>

            <div className='w-auto h-[744px] flex-col content-center justify-items-center space-y-7'>
                <div className='w-[649px] h-[36px] flex justify-between'>
                    <h1 className='text-2xl font-medium'>Description</h1>
                    <h1 className='text-2xl font-normal opacity-55'>Additional Information</h1>
                    <h1 className='text-2xl font-normal opacity-55'>Reviews [5]</h1>
                </div>
                <div className='h-[174px] w-[890px] space-y-5 opacity-55'>
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>

                <div className='h-[348px] w-[1239px] flex gap-7'>
                    <img src='/sofa-complete1.png'></img>
                    <img src='/sofa-complete2.png'></img>

                </div>



            </div>

            <Relproduct/>
            <Footer />
        </div>
    )
}

export default Singleproduct