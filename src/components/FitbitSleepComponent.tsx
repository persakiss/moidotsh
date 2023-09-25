import React, { useEffect, useState } from 'react';
import { fetchSleepData } from '../utils/fetchFitbitData';

const FitbitSleepComponent: React.FC = () => {
  const [sleepData, setSleepData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Replace 'your_access_token_here' with the actual access token you've stored
      const data = await fetchSleepData('your_access_token_here');
      setSleepData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {sleepData ? (
        <pre>{JSON.stringify(sleepData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FitbitSleepComponent;
