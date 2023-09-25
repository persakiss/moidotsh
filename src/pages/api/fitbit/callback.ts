// pages/api/fitbit/callback.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle the initial OAuth flow here
    const clientId = '23R9DM';
    const redirectUri = encodeURIComponent('https://www.moi.sh/api/fitbit/callback');
    const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight`;

    res.redirect(authUrl);
  } else if (req.method === 'POST') {
    // Handle the OAuth callback here
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: 'No code provided' });
    }

    const clientId = '23R9DM';
    const clientSecret = '3651e6e7c9beb9ad051f79997fb8cf30';
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
      const response = await axios.post('https://api.fitbit.com/oauth2/token', null, {
        params: {
          client_id: clientId,
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

      // Store these tokens securely
      // ...

      res.status(200).json({ access_token, refresh_token });
    } catch (error) {
      res.status(500).json({ error: 'Failed to exchange code for tokens' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
