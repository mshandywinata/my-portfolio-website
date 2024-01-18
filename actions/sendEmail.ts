'use server';
 
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const messages = formData.get('messages');

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        };
    }

    if (!validateString(messages, 5000)) {
        return {
            error: 'Invalid message'
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Portfolio Form <onboarding@resend.dev>',
            to: 'mshandywinata@upi.edu',
            subject: 'Message from Portfolio Form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                messages: messages as string,
                senderEmail: senderEmail as string
            }),
        })
    } catch (error) {
        return {
            error: getErrorMessage(error),
        }
    }

    return {
        data
    }

}