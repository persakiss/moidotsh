// pages/api/fitbit/callback.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const CLIENT_ID = process.env.CLIENT_ID || '23R9DM'; // Moved to env variables
const CLIENT_SECRET = process.env.CLIENT_SECRET || '3651e6e7c9beb9ad051f79997fb8cf30'; // Moved to env variables

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const redirectUri = encodeURIComponent('https://www.moi.sh/api/fitbit/callback');
    const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=activity%20nutrition%20heartrate%20location%20profile%20settings%20sleep%20social%20weight`;

    res.redirect(authUrl);
  } else if (req.method === 'POST') {
    const { code } = req.body;

    if (!code) {
      console.error('No code provided');
      return res.status(400).json({ error: 'No code provided' });
    }

    const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

    try {
      const response = await axios.post('https://api.fitbit.com/oauth2/token', null, {
        params: {
          client_id: CLIENT_ID,
          grant_type: 'authorization_code',
          redirect_uri: 'https://www.moi.sh/api/fitbit/callback',
          code,
        },
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token, refresh_token } = response.data;

      // TODO: Store these tokens securely

      res.status(200).json({ access_token, refresh_token });
    } catch (error) {
      console.error('Failed to exchange code for tokens', error);
      res.status(500).json({ error: 'Failed to exchange code for tokens' });
    }
  } else {
    console.error('Method not allowed');
    res.status(405).send('Method Not Allowed');
  }
}