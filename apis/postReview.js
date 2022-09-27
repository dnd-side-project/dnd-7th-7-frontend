import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

const postReview = async (records) => {
  try {
    const body = {};
    for (const key in records) body[key] = records[key];

    const response = await axios.post(`${baseUrl}/running-route`, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(`postReview API ${response.status}, ${response.data}`);
  } catch (error) {
    console.log('postReview API error: ', error.response);
  }
};

export default postReview;
