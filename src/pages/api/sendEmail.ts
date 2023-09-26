// sendEmail.ts

import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY must be provided');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, body } = req.body;

    const msg = {
      to: 'arman@moi.sh', // Your email
      from: email, // Sender's email
      subject: `New Message from ${name}: ${subject}`,
      text: body,
    };

    try {
        console.log("Sending email with body: ", req.body);  
      await sgMail.send(msg);
      res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error("Error sending email: ", error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
