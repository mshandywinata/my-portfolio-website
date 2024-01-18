'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section className='mb-28 max-w-[45rem]
    text-center leading-8 sm:mb-40 scroll-mt-28'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
        <div className='text-justify'>
          <p className='mb-3'>
              It all started as a hobby for me. My first formal journey into computer-related things was when I chose{' '}
              <span className="font-medium">Computer & Network Engineering </span>
              as my major in vocational high school. There, I learned the basics of the internet and computer networking, how to assemble PC parts, operate Linux distros such as Debian and Kali, and configure network equipments such as a router or an access point. In my spare time at home, I learned <span className='font-medium'>graphic & motion design,</span> which now, become my freelance job.
          </p>

          <p className='mb-3'>
            After graduating from vocational high-school, I enrolled for a bachelor&apos;s degree in Software Engineering. In my first semester I learned the basics of <span className='font-medium'>programming with Python</span>. Where most of the time, we worked on sloving coding problem based on study cases. And as our final assignment, we created a project with my beloved group called eKOS.
          </p>

          <p>
              Despite all the things that I&apos;ve mentioned above, I also have a tendency to hear about other people&apos;s perspectives, which makes me intrested in learning all sorts of things. I believe that widening our view could make us come up with some cool ideas that no one has ever seen before. 
          </p>
        </div>
    </motion.section>
  )
}
