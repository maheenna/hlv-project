'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCards from './UsersCards';
import Image from 'next/image';
import processlogo from "../../../../public/images/processlogo.png"
const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1.5,
    slideToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1.5,
    slideToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slideToSlide: 1
  }
};

const PopularBurger = () => {
  return (
    <div className='pt-[4rem] pb-[3rem] bg-[#F2F2F2]'>
      <div className='flex justify-center items-center h-auto pb-[3rem]'>
          <Image src={processlogo} alt='processlogo' className='ml-4 md:mr-0 mr-4 md:block hidden'/>
          <h1 className='text-[25px] md:text-[40px] font-extrabold'>What's The Process Like?</h1>
        </div>
      <div className='md:w-[80%] w-[80%] sm:mt-[4rem] mx-auto'>
        <Carousel additionalTransfrom={0} autoPlay={false} arrows={true} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}>

          <BurgerCards 
          title="Welcome to the Store" 
          image="/images/process1.png" 
          step="Step 1"
          para="Welcome to the store! Get ready to discover  product  compatibility with our app. Begin  by picking  up a product from the shelves around you"
          top="" />
          

<BurgerCards 
          title="Select Your Product"
          image="/images/process2.png" 
          step="Step 2"
          para="Select a drug product that interests you. Simply reach out and grab it from the shelf. picking  up a product from the shelves around you"
          top="" />

<BurgerCards 
          title="Scan For Compatibility" 
          image="/images/process3.png" 
          step="Step 3"
          para="To scan the product barcode, tap the 'Scan' button in the app and align the barcode within the frame. picking  up a product from the shelves around you "
          top="/images/process3top.png" />

<BurgerCards 
          title="View Matching Result" 
          image="/images/process4.png" 
          step="Step 4"
          para="After scanning, view the compatibility results displayed on your screen.picking  up a product from the shelves around you picking  up a product from the Hlv"
          top="/" />

        </Carousel>
      </div>
    </div>
  )
}

export default PopularBurger