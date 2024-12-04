'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail () {
    const { data } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['futureathletecontact@gmail.com'],
        subject: 'New Form Submission',
        html: '<h1>A new contact form has been submitted. Check inbox.'
        });
};
