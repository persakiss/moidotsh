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

    // Get the user's IP address
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Get additional headers
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const language = req.headers['accept-language'] || 'Unknown';
    const referrer = req.headers['referer'] || 'Unknown';


    const msg = {
      to: 'arman@moi.sh',  // Your email
      from: 'arman@moi.sh', // Your verified email
      replyTo: email, // User's email
      subject: `New Message from ${name}: ${subject}`,
      text: `
        From IP: ${userIp}
        User Agent: ${userAgent}
        Language: ${language}
        Referrer: ${referrer}
        
        ${body}
      `,
    };
    try {
      console.log("Sending email with body: ", req.body);
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("SendGrid detailed errors: ", (error as any).response?.body?.errors);
      } else {
        console.error("An unknown error occurred: ", error);
      }
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
