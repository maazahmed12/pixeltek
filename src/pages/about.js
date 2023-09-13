import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image'; // Import Image component
import profilePic from '../../public/images/profile/logo3.jpg'; // Import your image
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value})=>{
const ref =  useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})
const isInView = useInView(ref,{once:true});


useEffect(() => {
  if(isInView)
  motionValue.set(value);
}, [isInView,value,motionValue])

useEffect(() => {
 
  springValue.on("change",(latest)=>{
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })



}, [springValue,value])

  return <span ref={ref}></span>
}


const About = () => {
  return (
    <>
      <Head>
        <title>PixelTEK | About Page</title>
        <meta name='description' content='my description' />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Your Vision, Our Code." className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 sm:mt-8'/>
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-orange-500'>Biography</h2>
<p className="font-medium">At PixelTEK, we are passionate about technology and committed to delivering innovative software solutions. With a mission to simplify complexities and drive digital transformation, we&apos;ve been serving businesses and individuals since 2023.</p>
<h2 className="mt-4 text-lg font-bold uppercase text-dark/75 dark:text-orange-500">Our Story</h2>
<p className="my-4 font-medium">
Founded by a team of seasoned professionals, PixelTEK was born out of a shared vision to make technology accessible and impactful. Over the years, we&apos;ve grown into a dynamic and agile software development company known for our creativity and technical expertise.
</p>
<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-orange-500">Our Approach</h2>
<p className='font-medium'>
What sets us apart is our client-centric approach. We believe in collaboration, communication, and a deep understanding of your goals. Our team works tirelessly to craft solutions that not only meet your needs but also exceed your expectations.
</p>

            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid dark:bg-dark dark:border-light border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={profilePic} alt="PixelTEK" className="w-full h-auto rounded-2xl" 
              priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px)50vw,
              33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={50}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-orange-500 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={40}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-orange-500 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={4}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-orange-500 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
              </div>

            </div>

          </div>      
          
  
          <Education/>
        </Layout>
      </main>
      
    </>
  );
}

export default About;