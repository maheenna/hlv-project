import React from 'react'
import Image from 'next/image'
import hero2 from "../../../../public/images/heropic2.png"
import scanicon from "../../../../public/images/scanicon.png"
import securityicon from "../../../../public/images/securityicon.png"
import iicon from "../../../../public/images/iicon.png"
import shopping from "../../../../public/images/shoppingbag.png"
import hero2top from "../../../../public/images/hero2top.png"
import capsule from "../../../../public/images/capsule.png"


const Feature = () => {
    return (
        <div className='bg-[#99C8FF]'>
            <div className='md:pt-[5rem] pt-[2.5rem] pb-[3rem] mx-[1rem] md:mx-[5rem]'>
                <Image src={capsule} alt='capsule' className='ml-[48rem] w-[60px] mb-4 -rotate-180'/>
                
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[5rem] gap-[2rem]'>
                <div>
                    <h1 className='md:text-[40px] font-extrabold text-[30px]'>Harness the power of <br /> our significant <span className='text-[#0075FF]'>Features</span></h1>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[2rem] md:gap-[4rem] gap-[1rem]'>
                            <div>
                                <Image src={scanicon} alt='scanicon'/>
                                <h1 className='mt-3 font-extrabold'>Scanning and Searching System</h1>
                                <p className='md:text-[13px] text-[16px]'>Our advanced scanning and search engine enables precise and efficient discovery, helping you find exactly the medicine products you need with ease.</p>
                            </div>
                            <div>
                                
                            <Image src={securityicon} alt='securityicon'/>
                                <h1 className='mt-3 font-bold'>Medicine Matchmaker</h1>
                                <p className='md:text-[13px] text-[16px]'>The Hlv App offers distinctive digital features that inform you of a medication's compatibility or incompatibility based on your selected allergies.</p>
                            </div>
                            <div>
                                
                            </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[3rem] gap-[1rem]'>
                            <div>
                                <Image src={shopping} alt='shoppingicon'/>
                                <h1 className='mt-3 font-bold'>Shop from home</h1>
                                <p className='md:text-[13px] text-[16px]'>Purchase items conveniently without leaving v the comfort of your own home, Enjoy the convenience of buying and get it delivered to your door step</p>
                            </div>
                            <div>
                                <Image src={iicon} alt='iicon'/>
                                <h1 className='mt-3 font-bold'>Medication Information</h1>
                                <p className='md:text-[13px] text-[16px]'>Our advanced scanning and search engine enables precise and efficient discovery, helping you find exactly the medicine products you need with ease.</p>
                            </div>
                            <div>
                                
                            </div>
                    </div>
                </div>
                    {/* for text-area */}
                    
                    {/* for image */}
                    
                    <div className="relative inline-block md:mx-0 ml-6">
  <Image src={hero2} alt="hero2" className="md:w-[1700px]  md:h-auto" />
  <Image src={hero2top} alt="hero2top" className="absolute -top-4 -left-4 w-32 h-auto" />
</div>

                </div>
            </div>
        </div>
    )
}

export default Feature;
