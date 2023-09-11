import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import React from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const services = () => {
  return (
    <>

<Head>
        <title>PixelTEK | Services Page</title>
        <meta name='description' content='my description' />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Transforming Lines into Lifelines." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl sm:mt-8'/>
    
      <Experience/>
          <Skills/>  
    </Layout>
    </main>
          </>

    )
}

export default services