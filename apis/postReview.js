import axios from 'axios';
import getEnvVars from '@/environment';

const { baseUrl } = getEnvVars();

/**
 * 러닝 리뷰 등록 API
 * @param {formData} formData
 */
const postReview = async (formData) => {
  try {
    const result = await axios.post('running-route', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default postReview;
