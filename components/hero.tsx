'use client';

import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Hero() {
  const { ref } = useSectionInView('Home', 0.5);
  const {
    setActiveSection,
    setTimeLastClick, 
  } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem]
      text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            {/* start profile picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2}}
            >
              <Image
                  src='/profilePicture.jpg'
                  alt='profile-picture'
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className='h-24 w-24 rounded-full
                  object-cover border-[0.4rem]
                  border-white shadow-xl'
              />
            </motion.div>
            {/* end profile picture */}

            {/* start emoji */}
            <motion.span className='text-4xl absolute
            bottom-0 right-0 cursor-default'
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7}}
            >
              🤟
            </motion.span>
            {/* end emoji */}
          </div>
        </div>

        {/* start intro */}
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
        sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
          <span className='font-bold'>Hi! I&apos;m Shandy. </span>I&apos;m a{" "}
          <span className='font-bold'>junior programmer & motion designer</span> with{" "}
          <span className='font-bold'>not that much</span> of experience. I love
          making <span className='underline'>websites, mographs, and infographics</span>.
        </motion.h1>
        {/* end intro */}

        {/* start buttons */}
        <motion.div className='flex flex-col sm:flex-row items-center justify-center
        gap-2 px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1
          }}
        >
          <Link href="#contact" className='group bg-blue-500 text-white px-7 py-3
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110
          hover:scale-110
          hover:bg-blue-600
          active:scale-105
          dark:bg-blue-600
          dark:hover:bg-blue-800
          transition'
          onClick={() =>{
            setActiveSection('Contact');
            setTimeLastClick(Date.now());
          }}
          >
            Say hi <BsArrowRight className='opacity-70
            group-hover:translate-x-1
            transition
            '/>
          </Link>

          {/* <a href="/CV.pdf" download
          className='group bg-blue-100 px-7 py-3
          flex items-center gap-2 rounded-full outline-none borderLightBlue
          focus:scale-110
          hover:scale-110
          active:scale-105
          transition
          dark:bg-blue-500/10'
          >
            Download CV <HiDownload className='opacity-60 cursor-pointer
            group-hover:translate-y-1
            transition
            '/>
          </a> */}
  
          {/* <a href="https://linkedin.com" target='_blank'
          className='bg-blue-100 p-4 text-gray-700
          flex items-center gap-2 rounded-full borderLightBlue
          focus:scale-[1.15]
          hover:scale-[1.15]
          hover:text-gray-950
          active:scale-105
          transition
          dark:bg-blue-500/10
          dark:text-blue-300'
          >
            <BsLinkedin />
          </a> */}

          <a href="https://github.com/mshandywinata" target='_blank'
          className='bg-blue-100 p-4 text-gray-700
          flex items-center gap-2 rounded-full text-[1.35rem] borderLightBlue
          focus:scale-[1.15]
          hover:scale-[1.15]
          hover:text-gray-950
          active:scale-105
          transition
          dark:bg-blue-500/10
          dark:text-blue-300'
          >
            <FaGithubSquare />
          </a>

          <a href="https://instagram/altrnt.if" target='_blank'
          className='bg-blue-100 p-4 text-gray-700
          flex items-center gap-2 rounded-full borderLightBlue
          focus:scale-[1.15]
          hover:scale-[1.15]
          hover:text-gray-950
          active:scale-105
          transition
          dark:bg-blue-500/10
          dark:text-blue-300'
          >
            <BsInstagram />
          </a>
        </motion.div>
        {/* end buttons */}
    </section>
  )
}
