import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name,x,y})=>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent  xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}}
        >

            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='mb-10 font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 dark:text-orange-500'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center mb-10 rounded-full bg-circularLight dark:bg-circularDark lg:h-[88vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-4 py-9 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}>
                PixelTEK
            </motion.div>

            <Skill name="Mobile App" x="-25vw" y="0vw"/>
            <Skill name="Devops" x="10vw" y="-10vw"/>
            <Skill name="UI / UX" x="25vw" y="6vw"/>
            <Skill name="Web Dev" x="-10vw" y="10vw"/>
            <Skill name="E-Commerce Sol" x="-20vw" y="-15vw"/>
            <Skill name="MS Teams Apps" x="32vw" y="-5vw"/>
            <Skill name="Microsoft Dynamics 365" x="0vw" y="-20vw"/>
            <Skill name="IT Rsource Outsourcing" x="0vw" y="20vw"/>
        </div>
    </>
  )
}

export default Skills