import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import logo from "../../public/images/profile/logo3-transformed.png"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 sm:mr-4 sm:mt-0'>
      <MotionLink
        href="/"
        className='w-[6rem] h-[6rem] bg-light text-dark flex items-center justify-center rounded-full
        text-lg font-bold border border-solid border-blue-500 dark:border-light  hover:shadow-md'
      >
        <Image
          src={logo}
          alt="Logo"
          className="w-full h-full"
        />
      </MotionLink>
    </div>
  )
}

export default Logo

