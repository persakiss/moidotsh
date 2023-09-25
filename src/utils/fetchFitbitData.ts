import axios from 'axios';

export const fetchSleepData = async (accessToken: string) => {
  try {
    const response = await axios.get('https://api.fitbit.com/1.2/user/-/sleep/date/today.json', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Fitbit sleep data:', error);
    return null;
  }
};
