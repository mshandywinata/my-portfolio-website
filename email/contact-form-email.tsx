import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    messages: string;
    senderEmail: string;
}

export default function ContactFormEmail({
    messages,
    senderEmail
}: ContactFormEmailProps) {
    return (
        <section>
            <Html>
                <Head />
                <Preview>New Message from Your Portfolio</Preview>
                <Tailwind>
                    <Body className='bg-gray-200 text-[#0094ff]'>
                        <Container>
                            <Section
                                className='bg-[#262626] borderBlue my-10 px-10
                                py-4 rounded-md'
                                >
                                <Heading
                                    className='leading-tight'
                                >
                                    You had received the following messages from the contact form in your portfolio site
                                </Heading>
                                <Text>{messages}</Text>
                                <Hr />
                                <Text>From: {senderEmail}</Text>
                            </Section>
                        </Container>
                    </Body>
                </Tailwind>
            </Html>
        </section>
    )
}
