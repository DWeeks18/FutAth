import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { NextResponse} from 'next/server';

export async function get () {
const resend = new Resend(process.env.re_cXX3kPKw_5xc3nRHgrCNneduvBThZy7qu);
try {
    const { data } = await resend.emails.send({
        from: 'Dan Future Athlete <futureathlcontact.dev',
        to: ['futureathletecontact@gmail.com'],
        subject: 'New Form Submission',
        html: '<h1>A new contact form has been submitted. Check inbox.'
      });
    return NextResponse.json({ data });
} catch (error) {
    return NextResponse.json ({ error });
}
};
