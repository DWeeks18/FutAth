import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.re_BfQaxYqh_DgDNDYCR5sTjGothDMTfrigR);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, selectedService, message } = req.body;

  const emailContent = `
    <h1>Contact Form Submission</h1>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Selected Service:</strong> ${selectedService}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: 'Dan Future Athlete <FutureAthlete.com',
    to: ['Daniel.J.Weeks@outlook.com'],
    subject: 'New Contact Submisson',
    html: emailContent,
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json({ message: 'Email sent successfully!', data });
};
