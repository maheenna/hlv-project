import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Image from 'next/image'
import logo from "../../../../public/images/Group 18894logo.png"
import { RiMenu5Line } from 'react-icons/ri'

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className='h-[70px] md:h-[100px] bg-[#101010]'>
            <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between '>

                {/* logo design */}
                <div className='flex items-center md:ml-32 ml-5  md:space-x-2'>
                    <Image src={logo} alt='logo'/>

                    <h1 className='text-[20px] sm:text-[30px] font-bold text-[#2B88D9] md:block hidden'>HLV</h1>
                </div>
                {/* Nav Links */}
                <div className='hidden md:block bg-custom-gradient border-[0.5px] border-white rounded-3xl px-6 py-2 text-white'>
                <ul className='hidden lg:flex items-center space-x-12'>
                    <li>
                        <Link className='text-[15px]  hover:text-blue-500' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-[15px]  hover:text-blue-500' href='/About'>About</Link>
                    </li>
                    <li>
                        <Link className='text-[15px]  hover:text-blue-500' href='/FAQ'>FAQ</Link>
                    </li>
                    
                    
                </ul>
                </div>

                 
                <div className='flex items-center space-x-4'>
                    <button className='hidden sm:block px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-[#2B88D9] transition-all duration-200  rounded-lg item-center space-x-2 text-white'>
                        
                        <span className='font-bold'>
                            Join Waitlist
                        </span>
                    </button>
                    
                    <RiMenu5Line onClick={openNav} className='lg:hidden h-[2rem] w-[2rem] text-white' />
                </div>
            </div>
        </div>
    )
}

export default Nav