'use client'
import Image from 'next/image'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'
import processlogo from "../../../../public/images/processlogo.png"
import processicon from "../../../../public/images/process side image.png"

interface Props {
  title: string
  image: string
  para: string
  step: string
  top: string

}

const BurgerCards = ({ title, image, para, step, top }: Props) => {

  return (
    <div>
      <div className='bg-white  md:hidden block rounded-lg m-3'>
        <div className='w-[283px] h-[200px] '>
          <Image src={image} width={200} height={200} alt={title} className='w-[100%] h-[100%] object-cover ' />

        </div>
        <div className='rounded-t-[300px] p-6'>
          <div className='bg-[#2B88D9] text-white w-[30%] rounded-full  px-2 items-center justify-center text-center py-1 mt-[1rem]'>{step}</div>
          <h1 className='mt-[1.3rem] text-[22px] text-black font-semibold start'>{title}</h1>
          <div className='flex items-center mt-[0.5rem] space-x-3'>



          </div>
          <p className='text-black text-opacity-90 mt-[0.5rem] text-start'>{para}</p>
        </div>
      </div>

      <div className='bg-[#F2F2F2] md:block hidden'>
        <div className='pt-[2rem] pb-[2rem] m-3'>
          <div className='grid grid-cols-2 items-center justify-center'>
            <div className='bg-white  pb-[2rem] h-auto w-[800px]'>
              <div className='p-10'>
                <div className='bg-[#2B88D9] w-[10%] rounded-full  px-2 text-center py-1'>{step}</div>
              </div>
              <div>
                <Image src={processicon} alt='processicons' className='top-0 opacity-55 right-4 ml-[10rem] -mt-20' />
              </div>
              <h1 className='ml-5 text-[23px] text-[#2B88D9]'>{title}</h1>
              <p className='ml-5 w-[40%] mt-[0.5rem] '>{para}</p>
            </div>

            <div className="relative inline-block">
              <Image src={image} alt={title} width={800} height={900} className="w-[500px] rounded-br-[150px] h-auto" />

              {/* Positioning the top image */}
              <Image src={top} alt="." width={50} height={50} className="absolute top-0 left-0  md:w-[50px] mt-5 ml-5  md:block hidden" />
            </div>

          </div>

        </div>


      </div>
    </div>


  )
}

export default BurgerCards