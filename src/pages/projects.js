import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import Image from 'next/image';
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect';
import Portfolio1 from "../../public/images/projects/portfolio1.jpg"
import Portfolio2 from "../../public/images/projects/portfolio2.jpg"
import Portfolio3 from "../../public/images/projects/portfolio3.jpg"
import Portfolio4 from "../../public/images/projects/portfolio4.jpg"
import Portfolio5 from "../../public/images/projects/portfolio5.jpg"
import Portfolio6 from "../../public/images/projects/portfolio6.jpg"




const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl relative border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}} 
        transition={{duration:0.2}} 
        priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px)50vw,
              50vw'/>
      </Link>
  
      <div className='w-1/2 flex flex-col items-start justify-center pl-6 lg:w-full lg:pl-0 lg:pt-6'> {/* Adjust padding here */}
        <span className='text-primary font-medium text-xl dark:text-orange-500 xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  
  
  );
};

const Project = ({title, type, img, link, github})=>{
    return(
        <article className='w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xs:p-4'>
          <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className='w-full h-auto'
           whileHover={{scale:1.05}} 
           transition={{duration:0.2}} />
        </Link>

        <div className='w-full flex flex-col items-start justify-center mt-6'> {/* Adjust padding here */}
          <span className='text-primary dark:text-orange-500 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
          </Link>
          <div className='w-full mt-2 flex items-center justify-between'>

            <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>
              Visit
            </Link>
            <Link href={github} target='_blank' className='w-8 md:w-6'>
              <GithubIcon />
            </Link>
        
          </div>
        </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>PixelTEK | Projects Page</title>
        <meta name='description' content='my description' />
  </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Coding Excellence, Every Project." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl  sm:mt-8'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="FitClub Website"
                    img={Portfolio1}
                    summary="Fitness Website."
                    link="https://fitclub-3ev.pages.dev/"
                    github="/"
                    type="Featured Project"
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="Construction Company Website"
                    img={Portfolio2}
                    summary="Construction Company Website."
                    link="https://construction-710e2.web.app/"
                    github="/"
                    type="Project"
                    />
                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="Grocery Store"
                    img={Portfolio3}
                    summary="A Grocery Store Website."
                    link="https://grocery-shop-f47b3.web.app/"
                    github="/"
                    type="Project"
                    />
                </div>

                <div className='col-span-12'>
                <FeaturedProject
                    title="Portfolio Website"
                    img={Portfolio4}
                    summary="Portfolio Website"
                    link="https://glowing-souffle-b2068f.netlify.app/"
                    github="/"
                    type="Featured Project"
                    />                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="Education Website"
                    img={Portfolio5}
                    summary="Education Website."
                    link="https://onlinetution-64499.web.app/"
                    github="/"
                    type="Project"
                    />                </div>

                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="Rent A Car Website"
                    img={Portfolio6}
                    summary="Rent A Car Website."
                    link="https://rentacar-16o.pages.dev/"
                    github="/"
                    type="Project"
                    />                </div>


            </div>


        </Layout>
    </main>



  </>
    )
}
export default projects
