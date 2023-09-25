import axios from 'axios';
import querystring from 'querystring';

const CLIENT_ID = '23R9DM'; // Replace with your Client ID
const CLIENT_SECRET = '3651e6e7c9beb9ad051f79997fb8cf30'; // Replace with your Client Secret
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
  