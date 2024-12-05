'use server';
import { Phone } from 'lucide-react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail (name, lastName, email, service, message) {
    const { data } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['futureathletecontact@gmail.com'],
        subject: 'New Form Submission',
        react: emailTemplate(name, lastName, email, service, message),
        });
};

function emailTemplate(firstName, lastName, email, service, message) {
    return (
        <div>
        <h1>New Form Submission</h1>
        <p> Name: {firstName} {' '} {lastName}</p>
        <p> Email: {email}</p>
        <p> Service: {service}</p>
        <p> Message: {message} </p> 
        </div>
    )
} 

