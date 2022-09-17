import axios from 'axios';
import getEnvVars from '@/environment';
import { useRecoilValue } from 'recoil';
import routeAtom from '@recoil/route';

const { baseUrl } = getEnvVars();

const postReview = async (records) => {
  try {
    const formData = new FormData();
    console.log(records.arrayOfPos);
    formData.append('routeName', records.routeName);
    // formData.append('routeName', records.arrayOfPos);
    const result = await axios.post(`${baseUrl}/running-route`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('post review response: ', result);
  } catch (error) {
    console.log(error.response);
  }
};

export default postReview;
