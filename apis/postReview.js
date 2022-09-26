import axios from 'axios';
import getEnvVars from '@/environment';
import { useRecoilValue } from 'recoil';
import routeAtom from '@recoil/route';
import { base64toBlob } from '@hooks/utils';

const { baseUrl } = getEnvVars();

const postReview = async (records) => {
  try {
    const body = {};
    for (const key in records) body[key] = records[key];

    const result = await axios.post(`${baseUrl}/running-route`, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(`status: ${result.status}, server response: ${result.data}`);
  } catch (error) {
    console.log('error: ', error.response);
  }
};

export default postReview;
