import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position,company,companyLink,title,work})=>{
    const ref = useRef(null);
    return(
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}target='_blank' className='text-blue-600 dark:text-orange-500 capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {title}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}


const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end","center start"]
        }
    )


  return (
    <div className='my-62'>
        {/* <h2 className='mt-20 font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Services</h2> */}
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-orange-500 md:w-[2px] md:left-[30px] xs:left-[20px]'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            
            position=" Web Development " company="PixelTEK"companyLink="www.google.com"
            title= "Transform Your Digital Presence with Expert Web Development" 
            work="At PixelTEK , we specialize in creating innovative and customized web solutions that cater to your specific needs. Our team of experienced developers uses the latest technologies to build responsive, user-friendly, and secure websites that leave a lasting impression."
            />

            <Details
            
            position=" Mobile App Development " company="PixelTEK"companyLink="www.google.com"
            title= "Power Your Business with Cutting-Edge mobile app development" 
            work="At PixelTEK , we specialize in crafting intuitive and feature-rich mobile applications that drive engagement and growth.Our mobile app development team is skilled in creating apps for both iOS and Android platforms. We understand the importance of user experience and tailor our apps to provide seamless navigation and functionality."
                />
            <Details
            
            position=" Ecommerce Solutions " company="PixelTEK"companyLink="www.google.com"
            title= "Elevate Your Online Retail with Ecommerce Excellence" 
            work="PixelTEK offers top-notch ecommerce solutions designed to help businesses thrive in the online marketplace.Our ecommerce development services encompass everything from building robust online stores to optimizing checkout processes and integrating secure payment gateways. We understand the complexities of online selling and tailor our solutions to maximize your revenue potential."
                />
            <Details
            
            position=" DevOps " company="PixelTEK"companyLink="www.google.com"
            title= "Streamline Your Software Development with DevOps Excellence" 
            work="At PixelTEK , we specialize in DevOps practices that drive efficiency and innovation.Our DevOps experts can help you automate deployment, improve code quality, and ensure the continuous delivery of software updates. We understand the importance of scalability and security in modern software development and provide tailored solutions to meet your needs."
                />

            <Details
            
            position=" UI/UX Design Services " company="PixelTEK"companyLink="www.google.com"
            title= "Craft Exceptional User Experiences with Our Design Expertise" 
            work="PixelTEK offers UI/UX design services that prioritize user-centric design principles.Our design team specializes in creating visually appealing and intuitive interfaces that captivate users and keep them engaged. We focus on usability, accessibility, and aesthetics to ensure that your product not only looks great but also functions flawlessly."
                />

            <Details
            
            position=" IT Resource Outsourcing " company="PixelTEK"companyLink="www.google.com"
            title= "Leverage Our IT Expertise for Seamless Resource Outsourcing" 
            work="PixelTEK offers comprehensive IT resource outsourcing services to help you focus on your core business while we handle your IT needs.Our dedicated IT professionals are skilled in a wide range of technologies and can seamlessly integrate into your organization. Whether you need IT support, infrastructure management, or software development, we provide flexible outsourcing solutions tailored to your requirements."
                />
        </ul>
      </div>
    </div>
  )
}

export default Experience
