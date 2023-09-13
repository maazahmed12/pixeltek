import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/w12-removebg-preview.png"
import profile2 from "../../public/images/profile/w4.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import { motion,useScroll } from 'framer-motion'
import LiIcon from '@/components/LiIcon'
import React, { useEffect, useRef } from 'react';


const Details = ({type,point1,point2,point3})=>{
  const ref = useRef(null);
  return(
  <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
          <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-orange-500'>{type}</h3>
          {/* <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
              
          </span> */}
          <p className='font-semibold w-full mt-4 md:text-sm dark:text-light'>
              {point1}
              {point2}
              {point3}
          </p>
         
         
      </motion.div>
  </li>
  )
}

export default function Home() {

  const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end","center start"]
        }
    )
  return (
    <>
      <Head>
        <title>PixelTEK</title>
        <meta name="description" content="Generated by create next app" />
       
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='PixelTEK' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px)50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="PixelTEK - Where Innovation Meets Execution." className='!text-4xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Welcome to PixelTEK, where innovation meets excellence in software development. We are a leading software company dedicated to providing cutting-edge technology solutions to empower businesses and individuals alike.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="mailto:pixelteksoftwares@gmail.com"target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid-transparent
                 hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                download={true}>Join<LinkArrow className={"w-6 ml-1"}/></Link>
                {/* <Link href="mailto:pixelteksoftwares@gmail.com"target={"_blank"}className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link> */}
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe/> */}
        <div className='absolute right-8 bottom-4 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='PixelTEK' className='w-full h-auto'/>
        </div>
      </main>

                      {/* sec 2 */}



      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16 bg-primaryDark text-dark dark:text-light'>
      <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-dark dark:text-orange-500'>Why Partner With Us ?</h2>
          <div className='grid w-full grid-cols-6 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark dark:text-orange-500'>PixelTEK</h2>
<p className="font-medium">At PixelTEK, we are passionate about technology and committed to delivering innovative software solutions. With a mission to simplify complexities and drive digital transformation, we&apos;ve been serving businesses and individuals since 2023.</p>
<h2 className="mt-4 text-lg font-bold uppercase text-dark dark:text-orange-500">Our Team</h2>
<p className="my-4 font-medium">
Our team of seasoned professionals combines technical expertise with creativity to solve complex challenges. We take pride in our transparent communication, on-time delivery, and the ability to adapt to evolving technologies.
</p>
<h2 className="mb-4 text-lg font-bold uppercase text-dark dark:text-orange-500">Contact Us</h2>
<p className='font-medium'>
Ready to transform your digital landscape? Contact us today to discuss your software needs and explore how we can collaborate to achieve your goals. 
</p>

            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid dark:bg-dark dark:border-light border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={profile2} alt="PixelTEK" className="w-full h-auto rounded-2xl" 
              priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px)50vw,
              33vw'
              />
            </div>

          </div>      
        </Layout>
      </main>
      
                                    {/* sec 3 */}

      <div className='my-64'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-dark dark:text-orange-500'>Our Key Offerings</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
            type="Custom Software Development" 
            point1="We create bespoke software applications to address your unique challenges and goals."
            point2="Our solutions grow with your business, ensuring long-term viability."
            point3="Rigorous testing ensures that your software works flawlessly." 
            />
            <Details 
            type="Mobile App Development" 
            point1="We specialize in iOS and Android app development for a broader reach."
            point2="Our apps prioritize user experience and engagement."
            point3="We provide ongoing support and updates to keep your apps running smoothly." 
            />
            <Details 
            type="Web Development" 
            point1="We build websites that look great and function seamlessly on all devices."
            point2="Our expertise extends to creating secure and feature-rich online stores."
            point3="Easily manage your website content with user-friendly CMS solutions." 
            />
            <Details 
            type="Cloud Solutions" 
            point1="Seamlessly transition your operations to cloud-based platforms."
            point2="Our cloud solutions offer flexibility to adapt to changing demands."
            point3="We prioritize data protection and security in all cloud deployments." 
            />
            <Details 
            type="AI and Machine Learning" 
            point1="Leverage the power of AI and ML to make data-driven decisions."
            point2="Streamline processes and boost efficiency with intelligent automation."
            point3="Stay ahead of the competition with predictive modeling" 
            />
            <Details 
            type="DevOps Services" 
            point1="Speed up development and deployment cycles."
            point2="Efficiently manage and scale your infrastructure."
            point3="Foster collaboration between development and IT operations teams." 
            />
            <Details 
            type="UI/UX Design" 
            point1="Create visually appealing and user-friendly interfaces."
            point2="Ensure your software is intuitive and accessible to all users."
            point3="Enhance your brand's digital presence with cohesive design." 
            />
            <Details 
            type="IT Consultancy" 
            point1="Benefit from our IT expertise for informed decision-making."
            point2="Plan for the future with tailored technology roadmaps."
            point3="Maximize ROI through cost-effective IT strategies." 
            />
        </ul>
      </div>
    </div>
         </>
  )
}


