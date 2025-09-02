import { useEffect, useState } from 'react';
import axios from 'axios';

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/${currency}.json`);
        setData(res.data[currency]);
      } catch (error) {
        console.error('Failed to fetch currency data:', error);
        setData({});
      }
    };

    fetchData(); // 👈 actually call it
  }, [currency]);

  return data;
}

export default useCurrency;