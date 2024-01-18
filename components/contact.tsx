'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.8);

    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 sm:mb-20 w-[min(100%, 38rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6
            dark:text-white/80
            '>
                Please contact me directly at{' '}
                <a className='underline' href='mailto:mshandywinata@upi.edu'>
                    mshandywinata@upi.edu
                </a> or through this form!
            </p>

            <form
                className='mt-10 flex flex-col
                dark:text-black'
                action={async formData => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error)
                        return
                    }

                    toast.success('Email sent successfully 📨')
                }}
            >
                <input
                    type='email'
                    name='senderEmail'
                    placeholder='Your email'
                    required
                    maxLength={500}
                    className='h-14 px-4 rounded-lg borderLightBlue
                    focus:outline-blue-500
                    dark:bg-white
                    dark:bg-opacity-80
                    dark:focus:bg-opacity-100
                    dark:outline-none
                    transition-all'
                />
                <textarea
                    placeholder='Your messages'
                    name='messages'
                    required
                    maxLength={5000}
                    className='h-52 my-3 rounded-lg p-4
                    borderLightBlue focus:outline-blue-500
                    dark:bg-white
                    dark:bg-opacity-80
                    dark:focus:bg-opacity-100
                    dark:outline-none
                    transition-all'
                ></textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
