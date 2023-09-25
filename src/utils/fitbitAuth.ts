// utils/fitbitAuth.ts

import axios from 'axios';
import querystring from 'querystring';

const CLIENT_ID = '23R9DM'; // Replace with your Client ID
const CLIENT_SECRET = '5bc2541ff04afa72ac4fdd7fd730b7b2'; // Replace with your Client Secret
const REDIRECT_URI = 'https://www.moi.sh/api/fitbit/callback'; // Replace with your Redirect URI

export const getAuthorizationUrl = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: 'activity heartrate location nutrition profile settings sleep social weight', // Add or remove scopes as needed
    });
  
    return `https://www.fitbit.com/oauth2/authorize?${params.toString()}`;
  };
  
  