import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()}&nbsp;All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build With <span className='text-blue-600 dark:text-orange-500 text-2xl px-1'>&#9825;</span>by&nbsp;<Link href="/" target={"_blank"} className='underline underline-offset-2'>PixelTEK</Link>
            </div>
            <Link href="/" target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
