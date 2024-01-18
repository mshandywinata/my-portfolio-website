import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    
    return (
        <button
            type='submit'
            disabled={pending}
            className='group flex items-center
            justify-center gap-2 h-[3rem] w-[8rem] bg-blue-500
            text-white rounded-full outline-none transition-all
            focus:scale-110 hover:scale-110 hover:bg-blue-600
            active:scale-105 disabled:scale-100 disabled:bg-opacity-65
            dark:bg-blue-600 dark:hover:bg-blue-800'
        >{
            pending ? <div
                className='h-5 w-5 animate-spin rounded-full
                border-b-2 border-white'
            ></div> : (
                <>
                    Submit
                    <FaPaperPlane
                        className='text-xs opacity-70 transition-all
                        group-hover:translate-x-1
                        group-hover:-translate-y-1'
                    />
                </>
            )
        }
        </button>
    )
}
