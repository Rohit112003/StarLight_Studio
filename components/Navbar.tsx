import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 '>
      <Link href='/' className='flex  items-center gap-2'>
        <Image src='/icons/logo.svg' alt='logo' height={32} width={32} className='max-sm:size-10'/>
        <p className='text-[20px] text-white max-sm:hidden font-extrabold'>StarLight Studio</p>
      </Link>
      <div className='flex-between gap-10'>
        <SignedIn>
          <UserButton/>
        </SignedIn>
       <MobileNav/>
      </div>

    </div>
  )
}    

export default Navbar