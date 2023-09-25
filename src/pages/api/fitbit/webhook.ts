import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { verify } = req.query;

    if (verify) {
      res.status(200).send(verify);
      return;
    }

    console.error('No verification code provided');
    res.status(400).send('No verification code provided');
  } else {
    console.error('Method not allowed');
    res.status(405).send('Method Not Allowed');
  }
}